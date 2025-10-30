from flask import Blueprint

# Create blueprints
auth_bp = Blueprint('auth', __name__)
movies_bp = Blueprint('movies', __name__)
platforms_bp = Blueprint('platforms', __name__)

# Import routes
from . import auth, movies, platforms