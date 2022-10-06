from secrets import token_hex
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash
from flask_login import UserMixin

db = SQLAlchemy()

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(300), nullable=False)
    token = db.Column(db.String, default=None, nullable=True)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = generate_password_hash(password)
        self.token = token_hex(16)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'token': self.token
            }

class Guitars(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    guitarname = db.Column(db.String(200), nullable=False)
    guitarbrand = db.Column(db.String(100), nullable=False)
    guitardesc = db.Column(db.String(500), nullable=False)
    guitarprice = db.Column(db.String(20), nullable=False)
    guitarimg = db.Column(db.String(500), nullable=False)

    def __init__(self, gname, gbrand, gdesc, gprice, gimg):
        self.guitarname = gname
        self.guitarbrand = gbrand
        self.guitardesc = gdesc
        self.guitarprice = gprice
        self.guitarimg = gimg
