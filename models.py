from sqlalchemy import Column, Integer, String
from datetime import datetime
from MAIA import db


class Experiment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    environment = db.Column(db.String(20), unique=True, nullable=False)
    gridDivision = db.Column(db.Integer, nullable=False)
    heuristic  = db.Column(db.String(20),nullable=False)
    operations = db.Column(db.Integer, nullable=False)
    time = db.Column(db.Integer, nullable=False) 

    def __repr__(self):
        return f"experiment('{self.environment}', '{self.gridDivision}', '{self.heuristic}', \
            '{self.operations}','{self.time}')"

