import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.scss']
})
export class BankAddComponent implements OnInit {
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
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/bank/add" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 0, \"accountnumber\": \"string\", 
  \"bankcode\": \"string\", \"bankname\": \"string\"}"`;
  content1: string = `
  {
    "accountid": 0,
    "accountnumber": "string",
    "bankcode": "string",
    "bankname": "string"
  }`

  constructor() { }

  ngOnInit(): void {
  }

}
