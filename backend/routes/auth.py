from flask import request, jsonify, session
from models import db, User
from . import auth_bp

@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        
        if User.query.filter_by(username=data.get('username')).first():
            return jsonify({'message': 'Username already exists'}), 400
            
        if User.query.filter_by(email=data.get('email')).first():
            return jsonify({'message': 'Email already exists'}), 400
        
        user = User(
            username=data['username'],
            email=data['email']
        )
        user.set_password(data['password'])
        
        db.session.add(user)
        db.session.commit()
        
        # Automatically log in user after registration
        session['user_id'] = user.id
        session['username'] = user.username
        
        return jsonify({
            'message': 'User created successfully',
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email
            }
        }), 201
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        user = User.query.filter_by(username=data.get('username')).first()
        
        if user and user.check_password(data.get('password')):
            session['user_id'] = user.id
            session['username'] = user.username
            
            return jsonify({
                'message': 'Login successful',
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email
                }
            }), 200
        
        return jsonify({'message': 'Invalid credentials'}), 401
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@auth_bp.route('/logout', methods=['POST'])
def logout():
    try:
        session.clear()
        return jsonify({'message': 'Logout successful'}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@auth_bp.route('/profile', methods=['GET'])
def profile():
    try:
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({'message': 'Not authenticated'}), 401
            
        user = User.query.get(user_id)
        
        return jsonify({
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email
            }
        }), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

def login_required(f):
    """Decorator to check if user is logged in"""
    from functools import wraps
    
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('user_id'):
            return jsonify({'message': 'Authentication required'}), 401
        return f(*args, **kwargs)
    return decorated_function