from flask import request, jsonify, session
from models import db, Movie, Platform, UserFavorite, WatchHistory
from . import movies_bp
from .auth import login_required

@movies_bp.route('/movies', methods=['GET'])
def get_movies():
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 20, type=int)
        platform_id = request.args.get('platform_id', type=int)
        genre = request.args.get('genre')
        search = request.args.get('search')
        
        query = Movie.query
        
        if platform_id:
            query = query.filter_by(platform_id=platform_id)
        if genre:
            query = query.filter(Movie.genre.ilike(f'%{genre}%'))
        if search:
            query = query.filter(Movie.title.ilike(f'%{search}%'))
        
        movies = query.paginate(
            page=page, 
            per_page=per_page, 
            error_out=False
        )
        
        return jsonify({
            'movies': [{
                'id': movie.id,
                'title': movie.title,
                'description': movie.description,
                'genre': movie.genre,
                'release_year': movie.release_year,
                'duration': movie.duration,
                'rating': movie.rating,
                'poster_url': movie.poster_url,
                'platform': movie.platform.name,
                'platform_id': movie.platform_id
            } for movie in movies.items],
            'total': movies.total,
            'pages': movies.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@movies_bp.route('/movies/<int:movie_id>', methods=['GET'])
def get_movie(movie_id):
    try:
        movie = Movie.query.get_or_404(movie_id)
        
        return jsonify({
            'movie': {
                'id': movie.id,
                'title': movie.title,
                'description': movie.description,
                'genre': movie.genre,
                'release_year': movie.release_year,
                'duration': movie.duration,
                'rating': movie.rating,
                'poster_url': movie.poster_url,
                'video_url': movie.video_url,
                'platform': movie.platform.name,
                'platform_id': movie.platform_id
            }
        }), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@movies_bp.route('/movies/<int:movie_id>/play', methods=['GET'])
@login_required
def play_movie(movie_id):
    try:
        user_id = session.get('user_id')
        movie = Movie.query.get_or_404(movie_id)
        
        # Record watch history
        watch_record = WatchHistory(
            user_id=user_id,
            movie_id=movie_id,
            duration_watched=0
        )
        db.session.add(watch_record)
        db.session.commit()
        
        return jsonify({
            'video_url': movie.video_url,
            'title': movie.title,
            'message': 'Movie started playing'
        }), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@movies_bp.route('/favorites', methods=['GET'])
@login_required
def get_favorites():
    try:
        user_id = session.get('user_id')
        favorites = UserFavorite.query.filter_by(user_id=user_id).all()
        
        return jsonify({
            'favorites': [{
                'id': fav.movie.id,
                'title': fav.movie.title,
                'description': fav.movie.description,
                'genre': fav.movie.genre,
                'poster_url': fav.movie.poster_url,
                'platform': fav.movie.platform.name
            } for fav in favorites]
        }), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@movies_bp.route('/favorites/<int:movie_id>', methods=['POST'])
@login_required
def add_favorite(movie_id):
    try:
        user_id = session.get('user_id')
        
        # Check if already favorited
        existing_fav = UserFavorite.query.filter_by(
            user_id=user_id, 
            movie_id=movie_id
        ).first()
        
        if existing_fav:
            return jsonify({'message': 'Movie already in favorites'}), 400
        
        favorite = UserFavorite(user_id=user_id, movie_id=movie_id)
        db.session.add(favorite)
        db.session.commit()
        
        return jsonify({'message': 'Movie added to favorites'}), 201
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@movies_bp.route('/favorites/<int:movie_id>', methods=['DELETE'])
@login_required
def remove_favorite(movie_id):
    try:
        user_id = session.get('user_id')
        favorite = UserFavorite.query.filter_by(
            user_id=user_id, 
            movie_id=movie_id
        ).first_or_404()
        
        db.session.delete(favorite)
        db.session.commit()
        
        return jsonify({'message': 'Movie removed from favorites'}), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500