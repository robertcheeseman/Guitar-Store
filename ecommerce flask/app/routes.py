from app import app
from flask import request
from . models import User, Guitars, db
from werkzeug.security import check_password_hash

@app.route('/api/signup', methods=['POST'])
def sendSignUpInfo():

    data = request.json

    username = data['username']
    email = data['email']
    password = data['password']

    user = User(username, email, password)

    db.session.add(user)
    db.session.commit()

    return {
        'status': 'ok',
        'message': f'Successfully created account {username}'
    }


@app.route('/api/login', methods=['POST'])
def sendLoginInfo():

    data = request.json

    username = data['username']
    password = data['password']

    user = User.query.filter_by(username=username).first()

    if user:
        if check_password_hash(user.password, password):
            return {
                'status': 'ok',
                'message': 'Successfully logged in!',
                'data': user.to_dict()
            }
        else:
            return {
                'status': 'failed',
                'message': 'Invalid Credentials'
            }
    else:
        return {
            'status': 'failed',
            'message': 'User does not exist in our database'
        }

# @app.route('/api/product/<int:product_id>')
# def getProduct(product_id):
#     product = Guitars.query.all(product_id)

#     if product:
#         return {
#             'status': 'product ok',
#             'data': product.to_dict()
#         }