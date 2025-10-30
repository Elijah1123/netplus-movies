import requests
from models import db, Movie, Platform

def fetch_movies_from_platform(platform_name, api_key=None):
    """
    Helper function to fetch movies from different platforms
    This is a template - you'll need to implement actual API calls
    based on each platform's documentation
    """
    try:
        platform = Platform.query.filter_by(name=platform_name).first()
        if not platform:
            return {'error': 'Platform not found'}
        
        # Example structure - replace with actual API calls
        if platform_name == 'Netflix':
            # Netflix API integration would go here
            pass
        elif platform_name == 'Amazon Prime':
            # Amazon Prime API integration
            pass
        # Add more platforms as needed
        
        return {'message': f'Fetching from {platform_name}', 'data': []}
    
    except Exception as e:
        return {'error': str(e)}

def validate_video_url(url):
    """
    Validate if the video URL is accessible
    """
    try:
        response = requests.head(url, timeout=5)
        return response.status_code == 200
    except:
        return False