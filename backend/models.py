from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import bcrypt

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def set_password(self, password):
        self.password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password_hash.encode('utf-8'))

class Platform(db.Model):
    __tablename__ = 'platforms'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    base_url = db.Column(db.String(500))
    api_key = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    movies = db.relationship('Movie', backref='platform', lazy=True)

class Movie(db.Model):
    __tablename__ = 'movies'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    genre = db.Column(db.String(100))
    release_year = db.Column(db.Integer)
    duration = db.Column(db.Integer)  # in minutes
    rating = db.Column(db.Float)
    poster_url = db.Column(db.String(500))
    video_url = db.Column(db.String(500))
    platform_movie_id = db.Column(db.String(100))  # Original ID from the platform
    platform_id = db.Column(db.Integer, db.ForeignKey('platforms.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    user_favorites = db.relationship('UserFavorite', backref='movie', lazy=True)

class UserFavorite(db.Model):
    __tablename__ = 'user_favorites'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    __table_args__ = (db.UniqueConstraint('user_id', 'movie_id', name='unique_user_movie'),)

class WatchHistory(db.Model):
    __tablename__ = 'watch_history'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'), nullable=False)
    watched_at = db.Column(db.DateTime, default=datetime.utcnow)
    duration_watched = db.Column(db.Integer)  # in seconds
    
    user = db.relationship('User', backref='watch_history')
    movie = db.relationship('Movie', backref='watch_history')