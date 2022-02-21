import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-pin-create',
  templateUrl: './transaction-pin-create.component.html',
  styleUrls: ['./transaction-pin-create.component.scss']
})
export class TransactionPinCreateComponent implements OnInit {
  response: string =`{
      "message": "Success",
      "code": 200,
      "data": "Yay! Your transaction PIN has been successfully created. Now, let's get started..",
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
