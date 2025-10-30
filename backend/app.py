from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from config import config
from models import db

def create_app(config_name='default'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    

    db.init_app(app)
    migrate = Migrate(app, db)
    CORS(app, supports_credentials=True)
    
    
    from routes import auth_bp, movies_bp, platforms_bp
    
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(movies_bp, url_prefix='/api')
    app.register_blueprint(platforms_bp, url_prefix='/api')
    
    
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'message': 'Resource not found'}), 404
    
    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({'message': 'Internal server error'}), 500
    
    
    @app.route('/health')
    def health_check():
        return jsonify({'status': 'healthy', 'message': 'NetPlus Movies API is running'})
    
    return app