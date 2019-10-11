import { Component, OnInit } from '@angular/core';
import { AppService } from '.././app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDetails } from './../interfaces/productDetails.interface';
import { IssueDetails } from './../interfaces/IssueDetails.interface';
declare var $: any;
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  model_flag:boolean;
  public productDetails = new ProductDetails();
  public issueDetails = new IssueDetails();
  public products: any = [];
  public issues: any = [];
  search_query = ''

  private query = "";
  selected_p_id = ""

  add_update = "Add Issue"
  constructor(private appService: AppService, private router: Router) {
    console.log("IssueComponent constuctor()")
  }

  ngOnInit() {
    this.fetchproducts();
    this.fetchIssues();
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



  i_value = 0
  showAddIssue() {
    this.model_flag=true
    this.add_update = "Add Issue";
    this.issueDetails = new IssueDetails();
    $("#testmodal").modal('show');
  }

  showUpdateIssue(i, cust_id) {
    this.model_flag=true
    this.i_value = i
    this.add_update = "Update Issue";
    // i = parseInt(i) - 1
    this.issueDetails = this.issues[i];
    this.selected_p_id=this.issueDetails.p_id
    this.query=this.issueDetails.p_title
    $("#testmodal").modal('show');
  }

  addOrUpdateIssue() {
    this.model_flag=true
    console.log("addOrUpdateIssue", this.add_update)
    if (this.add_update == "Update Issue") {
      this.updateIssue()
    } else {
      this.addIssue()
    }
  }

  addIssue() {
    this.model_flag=false
    console.log("addIssue")
    var today = Number(new Date())
    this.issueDetails.i_id = today.toString();
    this.issueDetails.p_id = this.selected_p_id;

    this.issueDetails.p_title=this.query
    this.appService.addIssue(this.issueDetails).subscribe((response) => {
      this.issues.push(this.issueDetails)
      console.log("response==adedd", response)
      this.issueDetails = new IssueDetails();
      $("#testmodal").modal('hide');
    })

  }

  updateIssue() {
    this.model_flag=false
    $("#testmodal").modal('hide');
    // this.issueDetails.p_title=this.query
    this.issueDetails.p_id = this.selected_p_id;
    this.appService.updateIssue(this.issueDetails).subscribe((response) => {
      if (response != null) {
        this.issues[this.i_value] = this.issueDetails;
        this.issueDetails = new IssueDetails();
        this.fetchIssues();
      }
    })
  }


  deleteIssue(i, _i_id) {
    if (window.confirm('It may Affect the other tables..Are you sure! Still you want to delete this Product ?')) {
      //put your delete method logic here

      console.log("deleteissue", i, _i_id)
      var i_id = { i_id: _i_id }
      this.appService.deleteIssue(i_id).subscribe((response) => {
        if (response != null) {
          console.log(this.issues[i])
          this.issues.splice(i, 1);
        }

      })
    }
  }

  selectedProduct(id, title) {
    console.log("id==========",id)
    this.selected_p_id = id
    this.query = title;
  }

  search(){
    this.appService.searchIssue(this.search_query).subscribe((response: any) => {
      console.log("Result", response);
      if (response.length > 0) {
        this.issues = response
        console.log(this.products)
      }
    })
  }


  onKeyUp(){
    console.log("onKeyUp",this.search_query)
    if(this.search_query==""){
      this.fetchIssues();
    }
  }

}



