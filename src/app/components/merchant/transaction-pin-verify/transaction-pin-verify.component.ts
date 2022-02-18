import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-pin-verify',
  templateUrl: './transaction-pin-verify.component.html',
  styleUrls: ['./transaction-pin-verify.component.scss']
})
export class TransactionPinVerifyComponent implements OnInit {
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
    "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/transactionpin/create" -H "accept: */*" -H
   "Content-Type: application/json" -d "{ \"accountid\": 0, \"answer\": \"string\", \"pin\": \"string\",
    \"question\": \"string\"}"`;
    content1: string = `
    {
      "accountid": 0,
      "pin": "string"
    }`
  constructor() { }

  ngOnInit(): void {
  }

}
