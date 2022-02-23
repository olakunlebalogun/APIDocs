import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-pin-verify',
  templateUrl: './transaction-pin-verify.component.html',
  styleUrls: ['./transaction-pin-verify.component.scss']
})
export class TransactionPinVerifyComponent implements OnInit {

  response: string = `{
      "message": "Success",
      "code": 200,
      "data": "Your pin is successfully verified",
      "error": null,
      "error_description": null,
      "meta": {}
  }`
 
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/transactionpin/create" -H "accept: */*" -H
   "Content-Type: application/json" -d "{ \"accountid\": 0, \"answer\": \"string\", \"pin\": \"string\",
    \"question\": \"string\"}"`;
  constructor() { }

  ngOnInit(): void {
  }

}
