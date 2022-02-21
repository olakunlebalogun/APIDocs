import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-pin-update',
  templateUrl: './transaction-pin-update.component.html',
  styleUrls: ['./transaction-pin-update.component.scss']
})
export class TransactionPinUpdateComponent implements OnInit {

  response: string = `{
      "message": "Success",
      "code": null,
      "data": "Yay! Your transaction PIN has been successfully updated. Now, let's get started..",
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
