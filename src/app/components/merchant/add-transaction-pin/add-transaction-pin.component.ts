import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction-pin',
  templateUrl: './add-transaction-pin.component.html',
  styleUrls: ['./add-transaction-pin.component.scss']
})
export class AddTransactionPinComponent implements OnInit {
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
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/add/transaction-pin" -H
   "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"string\", 
   \"name\": \"string\", \"newpin\": \"string\"}"`;
   content1: string = `
    {
      "email": "string",
      "name": "string",
      "newpin": "string"
    }`

  constructor() { }

  ngOnInit(): void {
  }

}
