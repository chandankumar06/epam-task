from flask import Blueprint
from flask_restful import Api
from resources.api import *

api_bp = Blueprint('api', __name__)

api = Api(api_bp)

# Routes
api.add_resource(Product, '/Product')
api.add_resource(SearchProduct, '/Product/<search>')
api.add_resource(DeleteProduct, '/DeleteProduct')


api.add_resource(Issue, '/Issue')
api.add_resource(SearchIssue, '/Issue/<search>')
api.add_resource(DeleteIssue, '/DeleteIssue')

api.add_resource(Metric, '/Metric')
api.add_resource(SearchMetric, '/Metric/<search>')
api.add_resource(DeleteMetric, '/DeleteMetric')
