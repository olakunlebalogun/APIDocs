import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss']
})
export class DashboardOneComponent implements OnInit {
  heading: string = 'curl';
  responseFailed : string = 'Failed'
  responseSucess : string = 'Success'
  responseDetails1: string = `{
      "message": "Failed",
      "code": null,
      "data": "Record not found",
      "error": null,
      "error_description": null,
      "meta": {}
  }`
  responseDetailsFailed : string =`{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": 
  }`
  content: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/dashboard?merchantid=30228" -H "accept: */*"`;

  // content1: string = `
  // {
  //   "accountid": 0,
  //   "newpassword": "string",
  //   "oldpassword": "string",
  //   "pin": "string"
  // }
  // `
  constructor() { }

  ngOnInit(): void {
  }

}
