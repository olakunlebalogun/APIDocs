import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.scss']
})
export class BankAddComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Failed'
  responseDetails: string = `{
    "message": "Failed",
    "code": null,
    "data": "Oops, record not found. Sorry",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/bank/add" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 0, \"accountnumber\": \"string\", 
  \"bankcode\": \"string\", \"bankname\": \"string\"}"`;

  constructor() { }

  ngOnInit(): void {
  }

}
