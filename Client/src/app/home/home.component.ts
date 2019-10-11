import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '.././app.service';
// import { UserTransactionDetails } from './../interfaces/userTransactionDetails.interface';
// import { UserDetails } from './../interfaces/userDetails.interface';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // userTransactionDetails = new UserTransactionDetails();
  // userDetails = new UserDetails();

  constructor(private appService: AppService, private router: Router) {
    console.log("HomeComponent constuctor()")
  }


  ngOnInit() {
 
  }




}
