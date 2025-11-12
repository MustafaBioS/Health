from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from dotenv import load_dotenv
import os

# Initialization

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"

load_dotenv()
secret = os.getenv("secret_key")
app.config['SECRET_KEY'] = secret

db = SQLAlchemy

# Database

class Users(db.Model, UserMixin):
    pass

# Routes

@app.route('/')
def home():
    return render_template('index.html')

# Run

if __name__ == '__main__':
    app.run(debug=True)