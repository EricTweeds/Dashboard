from flask import Flask, jsonify, make_response
import forecastio
import json

api_key = "961d00284ae951c12d1d465857950732"
lat = 43.477
lng = -80.537


app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/weather')
def weather():
    forecast = forecastio.load_forecast(api_key, lat, lng)
    response = {
        "current": {
            "name":'Current',
            "temp": forecast.currently().temperature,
            "state": forecast.currently().summary,
            "pop": forecast.currently().precipProbability
        },
        "tomorrow": {
            "name": 'Tomorrow',
            "temp": forecast.daily().data[1].temperatureHigh,
            "state": forecast.daily().data[1].summary,
            "pop": forecast.daily().data[1].precipProbability
        }
    }
            
    return json.dumps(response)
