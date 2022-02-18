import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bvn-check',
  templateUrl: './bvn-check.component.html',
  styleUrls: ['./bvn-check.component.scss']
})
export class BvnCheckComponent implements OnInit {
  heading: string = 'curl';
  responseFailed : string = 'Failed'
  responseSucess : string = 'Success'
  responseDetails1: string = `{
    "message": "Success",
    "code": "404",
    "data": "Your account is invalid",
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
    "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/bvn/check" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 544, \"auth\": \"string\"}"`;

  content1: string = `
  {
    "accountid": 0,
    "auth": "string"
  }`

  constructor() { }

  ngOnInit(): void {
  }

}
