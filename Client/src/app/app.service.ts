import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ProductDetails } from "././interfaces/productDetails.interface";
import { IssueDetails } from "././interfaces/IssueDetails.interface";
import { MetricDetails } from '././interfaces/MetricDetails.interface';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  fetchProducts() {
    console.log("Service fetchProducts")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.baseURL}/api/Product`, { headers: headers })
  }
  addProduct(product:ProductDetails) {
    const body = JSON.stringify(product);
    console.log("service addProduct",body)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}/api/Product`, body, { headers: headers })
  }

  updateProduct(product:ProductDetails) {
    const body = JSON.stringify(product);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseURL}/api/Product`, body, { headers: headers })
  }
  
  deleteProduct(p_id:any) {
    const body = JSON.stringify(p_id);
    console.log("service deleteProduct",body)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}/api/DeleteProduct`, body,{ headers: headers })
  }

  
  searchProduct(search_query) {
    console.log("Service fetchProducts")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.baseURL}/api/Product/`+search_query, { headers: headers })
  }
    
  searchIssue(search_query) {
    console.log("Service fetchProducts")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.baseURL}/api/Issue/`+search_query, { headers: headers })
  }

  searchMetric(search_query) {
    console.log("Service fetchProducts")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.baseURL}/api/Metric/`+search_query, { headers: headers })
  }
  
  
  
  deleteIssue(i_id:any) {
    const body = JSON.stringify(i_id);
    console.log("service deleteIssue",body)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}/api/DeleteIssue`, body,{ headers: headers })
  }
  
  fetchIssues() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.baseURL}/api/Issue`, { headers: headers })
  }
  addIssue(issueDetails:IssueDetails) {
    const body = JSON.stringify(issueDetails);
    console.log("service addIssue",body)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}/api/Issue`, body, { headers: headers })
  }

  updateIssue(issue:IssueDetails) {
    const body = JSON.stringify(issue);
    console.log("Service updateIssue()",body)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseURL}/api/Issue`, body, { headers: headers })
  }

  // Metric Related apis
  fetchMetrics() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.baseURL}/api/Metric`, { headers: headers })
  }

  addMetric(metricDetails:MetricDetails) {
    const body = JSON.stringify(metricDetails);
    console.log("service addIssue",body)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}/api/Metric`, body, { headers: headers })
  }

  updateMetric(metricDetails:MetricDetails) {
    const body = JSON.stringify(metricDetails);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseURL}/api/Metric`, body, { headers: headers })
  }

  deleteMetric(i_id:any) {
    const body = JSON.stringify(i_id);
    console.log("service deleteIssue",body)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseURL}/api/DeleteMetric`, body,{ headers: headers })
  }
}
