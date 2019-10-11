import { Component, OnInit } from '@angular/core';
import { AppService } from '.././app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDetails } from './../interfaces/productDetails.interface';
import { IssueDetails } from './../interfaces/IssueDetails.interface';
import { MetricDetails } from './../interfaces/MetricDetails.interface';
declare var $: any;
@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  model_flag: boolean;
  public productDetails = new ProductDetails();
  public issueDetails = new IssueDetails();
  public metricDetails = new MetricDetails();

  public products: any = [];
  public issues: any = [];
  public metrics: any = [];
  search_query = ''

  private query = "";
  private issue_query = "";
  
  selected_p_id = ""
  selected_i_id = ""

  add_update = "Add Metric"
  constructor(private appService: AppService, private router: Router) {
    console.log("MetricComponent constuctor()")
  }

  ngOnInit() {
    this.fetchproducts();
    this.fetchIssues();
    this.fetchMetrics();
  }

  fetchproducts() {
    this.appService.fetchProducts().subscribe((response: any) => {
      console.log("Result", response);
      if (response.length > 0) {
        this.products = response
        console.log(this.products)
      }

    })
  }
  fetchIssues() {
    this.appService.fetchIssues().subscribe((response: any) => {
      console.log("Result", response);
      if (response.length > 0) {
        this.issues = response
        console.log(this.issues)
      }
    })
  }
  fetchMetrics() {
    this.appService.fetchMetrics().subscribe((response: any) => {
      console.log("Result", response);
      if (response.length > 0) {
        this.metrics = response
      }
    })
  }



  i_value = 0
  showAddMetric() {
    this.model_flag = true
    this.add_update = "Add Metric";
    this.metricDetails = new MetricDetails();
    $("#testmodal").modal('show');
  }

  showUpdateMetric(i, cust_id) {
    this.model_flag = true
    this.i_value = i
    this.add_update = "Update Metric";
    // i = parseInt(i) - 1
    this.metricDetails = this.metrics[i];
    this.query=this.metricDetails.p_title
    
    this.selected_p_id=   this.metricDetails.p_id 
    this.selected_i_id=this.metricDetails.i_id

    this.issue_query=this.metricDetails.i_title
    $("#testmodal").modal('show');
  }

  addOrUpdateMetric() {
    this.model_flag = true
    console.log("addOrUpdateIssue", this.add_update)
    if (this.add_update == "Update Metric") {
      this.updateMetric()
    } else {
      this.addMetric()
    }
  }

  addMetric() {
    this.model_flag = false
    console.log("addIssue",this.selected_p_id)
    var today = Number(new Date())
    this.metricDetails.m_id = today.toString();

    this.metricDetails.p_id = this.selected_p_id
    this.metricDetails.i_id = this.selected_i_id

    this.metricDetails.p_title=this.query
    this.metricDetails.i_title=this.issue_query
    this.appService.addMetric(this.metricDetails).subscribe((response) => {
      this.metrics.push(this.metricDetails)
      console.log("response==adedd", response)
      this.metricDetails = new MetricDetails();
      $("#testmodal").modal('hide');
    })
  }

  updateMetric() {
    this.model_flag = false
    $("#testmodal").modal('hide');

    this.metricDetails.p_id = this.selected_p_id
    this.metricDetails.i_id = this.selected_i_id
    this.appService.updateMetric(this.metricDetails).subscribe((response) => {
      if (response != null) {
        this.metrics[this.i_value] = this.metricDetails;
        this.metricDetails = new MetricDetails();
        this.fetchMetrics();
      }
    })
  }


  deleteMetric(i, _m_id) {
    if (window.confirm('It may Affect the other tables..Are you sure! Still you want to delete this Product ?')) {
      //put your delete method logic here

      console.log("deleteissue", i, _m_id)
      var m_id = { m_id: _m_id }
      this.appService.deleteMetric(m_id).subscribe((response) => {
        if (response != null) {
          console.log(this.metrics[i])
          this.metrics.splice(i, 1);
        }

      })
    }
  }

  selectedProduct(id, title) {
    console.log("selectedProduct id==========>>>>>>>>>>>>>>>", id)
    this.selected_p_id = id
    this.query = title;
  }

  selectedIssue(id, title) {
    console.log("id==========", id)
    this.selected_i_id = id
    this.issue_query= title;
  }


  search() {
    this.appService.searchMetric(this.search_query).subscribe((response: any) => {
      console.log("Result", response);
      if (response.length > 0) {
        this.metrics = response
       
      }
    })
  }


  onKeyUp() {
    console.log("onKeyUp", this.search_query)
    if (this.search_query == "") {
      this.fetchMetrics();
    }
  }

}



