import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-payout',
  templateUrl: './add-update-payout.component.html',
  styleUrls: ['./add-update-payout.component.scss']
})
export class AddUpdatePayoutComponent implements OnInit {
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
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/add-update-payout" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"dataList\": [ { \"accountname\": \"string\",
   \"accountnumber\": \"string\", \"bankname\": \"string\", \"id\": 0 } ], \"merchant\": \"string\"}"`;

   content1: string = `
   {
    "dataList": [
      {
        "accountname": "string",
        "accountnumber": "string",
        "bankname": "string",
        "id": 0
      }
    ],
    "merchant": "string"
  }`;


  constructor() { }

  ngOnInit(): void {
  }

}
