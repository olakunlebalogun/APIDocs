import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction-pin',
  templateUrl: './add-transaction-pin.component.html',
  styleUrls: ['./add-transaction-pin.component.scss']
})
export class AddTransactionPinComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Failed'
  responseDetails: string = `{
    "message": "Failed",
  "code": null,
  "data": "Invalid account detail",
  "error": null,
  "error_description": null,
  "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/add/transaction-pin" -H
   "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"string\", 
   \"name\": \"string\", \"newpin\": \"string\"}"`;

  constructor() { }

  ngOnInit(): void {
  }

}
