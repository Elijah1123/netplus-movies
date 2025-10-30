import sys
import os
from datetime import datetime, timedelta
import random


sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app import create_app
from models import db, User, Platform, Movie, UserFavorite, WatchHistory


def seed_database():
    """Seed the database with sample data."""
    app = create_app()

    with app.app_context():
        print("\nStarting database seeding...")

        
        db.create_all()

        
        print("Clearing existing data...")
        UserFavorite.query.delete()
        WatchHistory.query.delete()
        Movie.query.delete()
        Platform.query.delete()
        User.query.delete()
        db.session.commit()

        
        print("Creating platforms...")
        platforms_data = [
            {'name': 'Netflix', 'base_url': 'https://netflix.com', 'api_key': 'netflix_sample_key_123'},
            {'name': 'Amazon Prime', 'base_url': 'https://primevideo.com', 'api_key': 'prime_sample_key_123'},
            {'name': 'Disney+', 'base_url': 'https://disneyplus.com', 'api_key': 'disney_sample_key_123'},
            {'name': 'HBO Max', 'base_url': 'https://hbomax.com', 'api_key': 'hbo_sample_key_123'},
            {'name': 'Hulu', 'base_url': 'https://hulu.com', 'api_key': 'hulu_sample_key_123'}
        ]

        platforms = []
        for data in platforms_data:
            platform = Platform(**data)
            db.session.add(platform)
            platforms.append(platform)

        db.session.commit()
        print(f"✅ Created {len(platforms)} platforms")

        
        print("Creating users...")
        users_data = [
            {'username': 'john_doe', 'email': 'john@example.com', 'password': 'password123'},
            {'username': 'jane_smith', 'email': 'jane@example.com', 'password': 'password123'},
            {'username': 'movie_lover', 'email': 'movies@example.com', 'password': 'password123'},
            {'username': 'admin', 'email': 'admin@netplus.com', 'password': 'admin123'}
        ]

        users = []
        for data in users_data:
            user = User(username=data['username'], email=data['email'])
            user.set_password(data['password'])
            db.session.add(user)
            users.append(user)

        db.session.commit()
        print(f"✅ Created {len(users)} users")

        
        print("Creating movies...")
        movies_data = [
            
            {'title': 'Stranger Things: The Movie', 'description': 'A group of kids uncover supernatural mysteries in their small town.', 'genre': 'Sci-Fi, Horror', 'release_year': 2023, 'duration': 138, 'rating': 8.7, 'poster_url': 'https://example.com/posters/stranger_things.jpg', 'video_url': 'https://example.com/videos/stranger_things.mp4', 'platform_movie_id': 'netflix_001', 'platform_id': platforms[0].id},
            {'title': 'The Crown: Final Chapter', 'description': 'The epic conclusion to the royal family saga.', 'genre': 'Drama, History', 'release_year': 2023, 'duration': 125, 'rating': 8.2, 'poster_url': 'https://example.com/posters/crown.jpg', 'video_url': 'https://example.com/videos/crown.mp4', 'platform_movie_id': 'netflix_002', 'platform_id': platforms[0].id},
            {'title': 'Red Notice 2', 'description': 'An Interpol agent tracks the world\'s most wanted art thief.', 'genre': 'Action, Comedy', 'release_year': 2024, 'duration': 118, 'rating': 6.8, 'poster_url': 'https://example.com/posters/red_notice2.jpg', 'video_url': 'https://example.com/videos/red_notice2.mp4', 'platform_movie_id': 'netflix_003', 'platform_id': platforms[0].id},

            
            {'title': 'The Lord of the Rings: The Two Towers', 'description': 'The fellowship continues their quest to destroy the One Ring.', 'genre': 'Fantasy, Adventure', 'release_year': 2002, 'duration': 179, 'rating': 8.8, 'poster_url': 'https://example.com/posters/lotr2.jpg', 'video_url': 'https://example.com/videos/lotr2.mp4', 'platform_movie_id': 'prime_001', 'platform_id': platforms[1].id},
            {'title': 'The Boys: Special', 'description': 'Superheroes abuse their powers rather than use them for good.', 'genre': 'Action, Comedy', 'release_year': 2023, 'duration': 145, 'rating': 8.7, 'poster_url': 'https://example.com/posters/boys.jpg', 'video_url': 'https://example.com/videos/boys.mp4', 'platform_movie_id': 'prime_002', 'platform_id': platforms[1].id},
            {'title': 'Reacher Season 2', 'description': 'Jack Reacher investigates a conspiracy in a small town.', 'genre': 'Action, Crime', 'release_year': 2023, 'duration': 132, 'rating': 8.1, 'poster_url': 'https://example.com/posters/reacher2.jpg', 'video_url': 'https://example.com/videos/reacher2.mp4', 'platform_movie_id': 'prime_003', 'platform_id': platforms[1].id},

            
            {'title': 'Star Wars: The Force Awakens', 'description': 'New heroes join the fight against the First Order.', 'genre': 'Sci-Fi, Action', 'release_year': 2015, 'duration': 138, 'rating': 7.9, 'poster_url': 'https://example.com/posters/starwars7.jpg', 'video_url': 'https://example.com/videos/starwars7.mp4', 'platform_movie_id': 'disney_001', 'platform_id': platforms[2].id},
            {'title': 'Avengers: Endgame', 'description': 'The Avengers take a final stand against Thanos.', 'genre': 'Action, Adventure', 'release_year': 2019, 'duration': 181, 'rating': 8.4, 'poster_url': 'https://example.com/posters/endgame.jpg', 'video_url': 'https://example.com/videos/endgame.mp4', 'platform_movie_id': 'disney_002', 'platform_id': platforms[2].id},
            {'title': 'Frozen III', 'description': 'Elsa and Anna return for another magical adventure.', 'genre': 'Animation, Family', 'release_year': 2024, 'duration': 114, 'rating': 7.8, 'poster_url': 'https://example.com/posters/frozen3.jpg', 'video_url': 'https://example.com/videos/frozen3.mp4', 'platform_movie_id': 'disney_003', 'platform_id': platforms[2].id},

          
            {'title': 'Game of Thrones: Winter is Here', 'description': 'The final battle for the Iron Throne concludes.', 'genre': 'Fantasy, Drama', 'release_year': 2023, 'duration': 156, 'rating': 9.1, 'poster_url': 'https://example.com/posters/got_movie.jpg', 'video_url': 'https://example.com/videos/got_movie.mp4', 'platform_movie_id': 'hbo_001', 'platform_id': platforms[3].id},
            {'title': 'The Last of Us: Beyond', 'description': 'Continuing the journey in a post-apocalyptic world.', 'genre': 'Action, Drama', 'release_year': 2024, 'duration': 142, 'rating': 9.3, 'poster_url': 'https://example.com/posters/last_of_us.jpg', 'video_url': 'https://example.com/videos/last_of_us.mp4', 'platform_movie_id': 'hbo_002', 'platform_id': platforms[3].id},
            {'title': 'Succession: The Movie', 'description': 'The Roy family battles for control of their media empire.', 'genre': 'Drama', 'release_year': 2024, 'duration': 148, 'rating': 8.9, 'poster_url': 'https://example.com/posters/succession.jpg', 'video_url': 'https://example.com/videos/succession.mp4', 'platform_movie_id': 'hbo_003', 'platform_id': platforms[3].id},

          
            {'title': "The Handmaid's Tale: Final Chapter", 'description': 'June\'s fight for freedom reaches its climax.', 'genre': 'Drama, Sci-Fi', 'release_year': 2024, 'duration': 135, 'rating': 8.6, 'poster_url': 'https://example.com/posters/handmaids.jpg', 'video_url': 'https://example.com/videos/handmaids.mp4', 'platform_movie_id': 'hulu_001', 'platform_id': platforms[4].id},
            {'title': 'Only Murders in the Building: The Movie', 'description': 'Three strangers share an obsession with true crime.', 'genre': 'Comedy, Mystery', 'release_year': 2024, 'duration': 122, 'rating': 8.1, 'poster_url': 'https://example.com/posters/only_murders.jpg', 'video_url': 'https://example.com/videos/only_murders.mp4', 'platform_movie_id': 'hulu_002', 'platform_id': platforms[4].id},
            {'title': 'The Bear: Special Episode', 'description': 'A young chef from the fine dining world comes home to Chicago.', 'genre': 'Drama, Comedy', 'release_year': 2023, 'duration': 128, 'rating': 8.6, 'poster_url': 'https://example.com/posters/bear.jpg', 'video_url': 'https://example.com/videos/bear.mp4', 'platform_movie_id': 'hulu_003', 'platform_id': platforms[4].id},
        ]

        movies = [Movie(**data) for data in movies_data]
        db.session.add_all(movies)
        db.session.commit()
        print(f"✅ Created {len(movies)} movies")

        
        print("Creating user favorites...")
        favorites_data = [
            {'user_id': users[0].id, 'movie_id': movies[0].id},
            {'user_id': users[0].id, 'movie_id': movies[3].id},
            {'user_id': users[0].id, 'movie_id': movies[6].id},
            {'user_id': users[1].id, 'movie_id': movies[1].id},
            {'user_id': users[1].id, 'movie_id': movies[4].id},
            {'user_id': users[1].id, 'movie_id': movies[7].id},
            {'user_id': users[2].id, 'movie_id': movies[2].id},
            {'user_id': users[2].id, 'movie_id': movies[5].id},
            {'user_id': users[2].id, 'movie_id': movies[8].id},
            {'user_id': users[2].id, 'movie_id': movies[11].id},
            {'user_id': users[2].id, 'movie_id': movies[14].id}
        ]

        db.session.add_all([UserFavorite(**fav) for fav in favorites_data])
        db.session.commit()
        print(f"✅ Created {len(favorites_data)} user favorites")

        
        print("Creating watch history...")
        watch_history_records = []
        for user in users:
            watched_movies = random.sample(movies, random.randint(3, 8))
            for movie in watched_movies:
                watch_record = WatchHistory(
                    user_id=user.id,
                    movie_id=movie.id,
                    watched_at=datetime.utcnow() - timedelta(days=random.randint(1, 30)),
                    duration_watched=random.randint(300, 1800)
                )
                watch_history_records.append(watch_record)

        db.session.add_all(watch_history_records)
        db.session.commit()
        print(f"✅ Created {len(watch_history_records)} watch history records")

        
        print("\n" + "=" * 50)
        print("🎉 DATABASE SEEDING COMPLETED SUCCESSFULLY! 🎉")
        print("=" * 50)
        print(f"Platforms: {Platform.query.count()}")
        print(f"Users: {User.query.count()}")
        print(f"Movies: {Movie.query.count()}")
        print(f"Favorites: {UserFavorite.query.count()}")
        print(f"Watch History: {WatchHistory.query.count()}")
        print("\nSample Credentials:")
        print(" - john_doe | password123")
        print(" - jane_smith | password123")
        print(" - admin | admin123")
        print("=" * 50)


if __name__ == '__main__':
    seed_database()
