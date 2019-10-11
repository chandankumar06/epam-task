from flask import Flask
def create_app(config_filename):
    app = Flask(__name__)
    app.config.from_object(config_filename)
    
    from app import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    from flask_cors import CORS
    CORS(app)
    return app


if __name__ == "__main__":
    app = create_app("config")
    app.run(port="3000",debug=True)
  