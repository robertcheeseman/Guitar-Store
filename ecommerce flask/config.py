import os

basedir = os.path.abspath(os.path.dirname(__name__))

class Config():
    FLASK_APP = os.environ.get('FLASK_APP')
    FLASK_ENV = os.environ.get('FLASK_ENV')
    FLASK_DEBUG = os.environ.get('FLASK_DEBUG')
    SECRET_KEY = os.environ.get('SECRET_KEY')
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_DATABASE_URI = 'postgresql://zjvaoafe:Jhy_mI-piFBWKdX64RpBPkGVz6ViYe45@heffalump.db.elephantsql.com/zjvaoafe'
    SQLALCHEMY_TRACK_MODIFICATIONS = False