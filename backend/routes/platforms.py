from flask import request, jsonify
from models import db, Platform, Movie
from . import platforms_bp

@platforms_bp.route('/platforms', methods=['GET'])
def get_platforms():
    try:
        platforms = Platform.query.all()
        
        return jsonify({
            'platforms': [{
                'id': platform.id,
                'name': platform.name,
                'base_url': platform.base_url,
                'movie_count': len(platform.movies)
            } for platform in platforms]
        }), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@platforms_bp.route('/platforms', methods=['POST'])
def create_platform():
    try:
        data = request.get_json()
        
        platform = Platform(
            name=data['name'],
            base_url=data.get('base_url'),
            api_key=data.get('api_key')
        )
        
        db.session.add(platform)
        db.session.commit()
        
        return jsonify({
            'message': 'Platform created successfully',
            'platform': {
                'id': platform.id,
                'name': platform.name,
                'base_url': platform.base_url
            }
        }), 201
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@platforms_bp.route('/platforms/<int:platform_id>/movies', methods=['POST'])
def add_movie_to_platform(platform_id):
    try:
        data = request.get_json()
        
        platform = Platform.query.get_or_404(platform_id)
        
        movie = Movie(
            title=data['title'],
            description=data.get('description'),
            genre=data.get('genre'),
            release_year=data.get('release_year'),
            duration=data.get('duration'),
            rating=data.get('rating'),
            poster_url=data.get('poster_url'),
            video_url=data.get('video_url'),
            platform_movie_id=data.get('platform_movie_id'),
            platform_id=platform_id
        )
        
        db.session.add(movie)
        db.session.commit()
        
        return jsonify({
            'message': 'Movie added successfully',
            'movie': {
                'id': movie.id,
                'title': movie.title,
                'platform': platform.name
            }
        }), 201
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500