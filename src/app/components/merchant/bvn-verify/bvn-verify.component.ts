import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bvn-verify',
  templateUrl: './bvn-verify.component.html',
  styleUrls: ['./bvn-verify.component.scss']
})
export class BvnVerifyComponent implements OnInit {
  heading: string = 'curl';
  responseFailed : string = 'Failed'
  responseSucess : string = 'Success'
  responseDetails1: string = `{
    "message": "Success",
    "code": 200,
    "data": "Verification Completed",
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
  "accountnumber": "string",
  "bankcode": "string",
  "bankname": "string",
  "bvn": "string"
}`

  constructor() { }

  ngOnInit(): void {
  }

}
