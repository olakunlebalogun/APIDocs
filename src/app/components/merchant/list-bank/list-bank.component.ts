import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.scss']
})
export class ListBankComponent implements OnInit {
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
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/bank/list" -H "accept: */*"`;
  
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
