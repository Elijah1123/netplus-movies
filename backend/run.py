import os
from app import create_app
from models import db

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        # Create tables
        db.create_all()
        
        # Insert sample platforms if they don't exist
        from models import Platform
        
        if not Platform.query.first():
            platforms = [
                Platform(name='Netflix', base_url='https://netflix.com'),
                Platform(name='Amazon Prime', base_url='https://primevideo.com'),
                Platform(name='Disney+', base_url='https://disneyplus.com'),
                Platform(name='HBO Max', base_url='https://hbomax.com'),
                Platform(name='Hulu', base_url='https://hulu.com')
            ]
            
            for platform in platforms:
                db.session.add(platform)
            
            db.session.commit()
            print("Sample platforms added!")
    
    app.run(debug=True, host='0.0.0.0', port=5000)