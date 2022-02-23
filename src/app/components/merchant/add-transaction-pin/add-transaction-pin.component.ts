import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction-pin',
  templateUrl: './add-transaction-pin.component.html',
  styleUrls: ['./add-transaction-pin.component.scss']
})
export class AddTransactionPinComponent implements OnInit {
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/add/transaction-pin" -H
   "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"string\", 
   \"name\": \"string\", \"newpin\": \"string\"}"`;
   response: string = `{
    "message": "Success",
      "code": 200,
      "data": "Pin successfully reset",
      "error": null,
      "error_description": null,
      "meta": {}
    }`
    headOne: string = `Update Password`;
    contOne: string = `{
        "email": "us@ourmail.com",
        "name": "segun",
        "newpin": "12345"
  }`;
  constructor() { }

  ngOnInit(): void {
  }

}
