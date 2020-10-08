from datetime import datetime
from flask import Flask, render_template, request
from flask_assets import Bundle, Environment
from MAIA import app

js = Bundle('js/classes.js','js/funcoes.js','js/brown.js',output='js/main.js')
assets = Environment(app)
assets.register('main_js',js)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/maiastart", methods=['GET'])
def maiaStart():
    env = request.args.get('environment')
    ngrid = request.args.get('grid')
    heuristic = request.args.get('heuristic')
    interactive = request.args.get('interactive')
    nagents = request.args.get('nagents')
    return render_template("maiastart.html",environment=env, ngrid=ngrid, \
        heuristic=heuristic,nagents=nagents,interactive=interactive)

@app.route("/agent")
def agent():
    pass

@app.route("/about/")
def about():
    return render_template("about.html")

@app.route("/contact/")
def contact():
    return render_template("contact.html")

@app.route("/hello/")
@app.route("/hello/<name>")
def hello_there(name = None):
    return render_template(
        "hello_there.html",
        name=name,
        date=datetime.now()
    )

@app.route("/api/data")
def get_data():
    return app.send_static_file("data.json")
