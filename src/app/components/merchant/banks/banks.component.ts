import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  response: string = `{
    "message": "Failed",
    "code": null,
    "data": "Oops, record not found. Sorry",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/bank/add" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 0, \"accountnumber\": \"string\", 
  \"bankcode\": \"string\", \"bankname\": \"string\"}"`;

  constructor() { }

  ngOnInit(): void {
  }

}
