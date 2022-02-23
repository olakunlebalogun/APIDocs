import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-pin-change',
  templateUrl: './transaction-pin-change.component.html',
  styleUrls: ['./transaction-pin-change.component.scss']
})
export class TransactionPinChangeComponent implements OnInit {
  
  response: string = `{
      "message": "Success",
      "code": null,
      "data": "Yay! Your transaction PIN has been successfully updated. Now, let's get started..",
      "error": null,
      "error_description": null,
      "meta": {}
  }`
 
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/transaction-pin/change" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 0, \"newpin\": \"string\", \"secretanswer\": \"string\"}"`;
 
  constructor() { }

  ngOnInit(): void {
  }

}
