
from flask_pymongo import PyMongo
from flask import Flask,jsonify
from flask import request
from config import *
app = Flask(__name__)
app.config.from_object('config')
mongo = PyMongo(app,retryWrites=False)

def searchProduct(search):
    print("getProducts()")
    collection=mongo.db.product
    result=collection.find( { "$or": [ { "p_id": search},{ "p_title": search}, { "p_desc": search} ] } )
    docs = []
    for doc in result:
        doc.pop('_id') 
        docs.append(doc)
    return jsonify(docs)



def searchMetric(search):
    print("getProducts()")
    collection=mongo.db.metric
    result=collection.find( { "$or": [{ "p_id": search},{ "i_id": search},{ "p_title": search},{ "i_title": search},  { "m_title": search},{ "m_id": search}, { "m_desc": search} ] } )
    docs = []
    for doc in result:
        doc.pop('_id') 
        docs.append(doc)
    return jsonify(docs)

def searchIssue(search):
    print("getProducts()")
    collection=mongo.db.issue
    result=collection.find( { "$or": [ { "i_id": search},{ "p_title": search},{ "p_id": search},{ "i_title": search}, { "i_category": search} ] } )
    docs = []
    for doc in result:
        doc.pop('_id') 
        docs.append(doc)
    return jsonify(docs)



def addProduct(data):
    print("AddProduct()")
    collection=mongo.db.product
    response=collection.insert(data)
    print(response)
    return jsonify({"status":"True"})

def getProducts():
    print("getProducts()")
    collection=mongo.db.product
    result=collection.find()
    docs = []
    for doc in result:
        doc.pop('_id') 
        docs.append(doc)
    return jsonify(docs)

def deleteProduct(data):
    print("deleteProduct()",data)
    collection=mongo.db.product
    collection2=mongo.db.issue
    collection3=mongo.db.metric
    result=collection.delete_many({"p_id":data['p_id']})
    result=collection2.delete_many({"p_id":data['p_id']})
    result=collection3.delete_many({"p_id":data['p_id']})
    return jsonify({"status":"Deleted"})


def updateProduct(data):
    print("updateProduct()")
    collection=mongo.db.product
    result=collection.update_one({"p_id":data['p_id']},{ "$set":data})
    return jsonify({"status":True})

def addIssue(data):
    print("addIssue()")
    collection=mongo.db.issue
    response=collection.insert(data)
    print(response)
    return jsonify({"status":"True"})

def getIssues():
    print("getIssues()")
    collection=mongo.db.issue
    result=collection.find()
    docs = []
    for doc in result:
        doc.pop('_id') 
        docs.append(doc)
    return jsonify(docs)


def deleteIssue(data):
    print("deleteProduct()",data)
    collection2=mongo.db.issue
    collection3=mongo.db.metric
    result=collection2.delete_many({"i_id":data['i_id']})
    result=collection3.delete_many({"i_id":data['i_id']})
    return jsonify({"status":"Deleted"})

def updateIssue(data):
    print("updateIssue() ============>",data)
    collection=mongo.db.issue
    result=collection.update_one({"i_id":data['i_id']},{ "$set":data})
    return jsonify({"status":True})

def addMetric(data):
    print("addMetric()")
    collection=mongo.db.metric
    response=collection.insert(data)
    print(response)
    return jsonify({"status":"True"})

def getMetrics():
    print("getMetrics()")
    collection=mongo.db.metric
    result=collection.find()
    docs = []
    for doc in result:
        doc.pop('_id') 
        docs.append(doc)
    return jsonify(docs)

def deleteMetric(data):
    print("deleteMetric()")
    collection=mongo.db.metric
    result=collection.delete_one({"m_id":data['m_id']})
    return jsonify({"status":"Deleted"})

def updateMetric(data):
    print("updateMetric()")
    collection=mongo.db.metric
    result=collection.update_one({"m_id":data['m_id']},{ "$set":data})
    return jsonify({"status":True})

