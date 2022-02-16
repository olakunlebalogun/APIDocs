import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-pin-change',
  templateUrl: './transaction-pin-change.component.html',
  styleUrls: ['./transaction-pin-change.component.scss']
})
export class TransactionPinChangeComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Failed'
  responseDetails: string = `{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/transaction-pin/change" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 0, \"newpin\": \"string\", \"secretanswer\": \"string\"}"`;

  constructor() { }

  ngOnInit(): void {
  }

}
