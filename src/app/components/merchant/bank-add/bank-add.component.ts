import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.scss']
})
export class BankAddComponent implements OnInit {
  response: string = `{
      "message": "Account number resolved",
      "code": 200,
      "data": {
        "account_number": "3322134957",
        "account_name": "Adebisi Diamond Abba"
      },
      "error": null,
      "error_description": null,
      "meta": {}
  }`
 
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/bank/add" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 0, \"accountnumber\": \"string\", 
  \"bankcode\": \"string\", \"bankname\": \"string\"}"`;
  headOne: string = `Update Password`;
  contOne: string = `{
      "accountid": 232,
      "accountnumber": "3022223112",
      "bankcode": "011",
      "bankname": "First Bank"
}`;
  constructor() { }

  ngOnInit(): void {
  }

}
