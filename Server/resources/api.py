from flask_restful import Resource
from flask import Flask, jsonify
from flask import request
from config import *
import os 
from .handler import *

class SearchProduct(Resource):
    # To get all Product by products
    def get(self,search):
        return searchProduct(search)
class SearchIssue(Resource):
    # To get all Product by products
    def get(self,search):
        return searchIssue(search)
class SearchMetric(Resource):
    # To get all Product by products
    def get(self,search):
        return searchMetric(search)

class DeleteProduct(Resource):
    # To get all Product by products
    def post(self):
        body=request.json
        return deleteProduct(body)
class DeleteIssue(Resource):
    # To get all Product by products
    def post(self):
        body=request.json
        return deleteIssue(body)
class DeleteMetric(Resource):
    # To get all Product by products
    def post(self):
        body=request.json
        return deleteMetric(body)
        
class Product(Resource):
    # To get all Product by products
    def get(self):
        return getProducts()
    # To Add single Product
    def post(self):
        body=request.json
        print("ADD post",body)
        return addProduct(body)
    # To Update single Product
    def put(self):
        body=request.json
        return updateProduct(body)
     # To Delete single Product
    def delete(self,p_id):
        body=request.json
        return deleteProduct(p_id)

class Metric(Resource):
    # To get all Product by Metric
    def get(self):
        return getMetrics()
    # To Add single Metric
    def post(self):
        body=request.json
        return addMetric(body)

    # To Update single Metric
    def put(self):
        body=request.json
        return updateMetric(body)

     # To Delete single Metric
    def delete(self):
        body=request.json
        return deleteMetric(body)

class Issue(Resource):
    # To get all Product by Issue
    def get(self):
        return getIssues()
    # To Add single Issue
    def post(self):
        body=request.json
        return addIssue(body)

    # To Update single Issue
    def put(self):
        body=request.json
        return updateIssue(body)

     # To Delete single Issue
    def delete(self):
        body=request.json
        return deleteIssue(body)




################################################################################################



    
   
  
