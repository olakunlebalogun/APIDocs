import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.component.html',
  styleUrls: ['./initiate.component.scss']
})
export class InitiateComponent implements OnInit {

  One: string = `
  {
    "accountno": "chisomije92@gmail.com",
    "amount": 10,
    "description": "texting",
    "merchantid": "898965953867317248",
    "tranpin": "44444"
  }`;

  codeOne: string = `curl -X POST "https://swipe.ng:7000/swipepay/transactions/initiate" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"accountno\": \"chisomije92@gmail.com\", \"amount\": 10, \"description\": \"texting\", \"merchantid\": \"898965953867317248\", \"tranpin\": \"44444\"}"`
  responseOne: string = `
  {
    "message": "Success",
    "code": "200",
    "data": {
      "ref": "945618654285795328",
      "message": "Great, OTP successfully sent to the registered Email/Phone",
      "email": "chisomije92@gmail.com",
      "phone": "08135069250",
      "amount": 10,
      "name": "CHISOM IJEOMAH",
      "link": null
    },
    "error": null,
    "error_description": null,
    "meta": {}
  }`

  codeTwo: string = `curl -X POST "https://swipe.ng:7000/swipepay/transactions/initiate" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"accountno\": \"chisomije92@gmail.com\", \"amount\": 10, \"description\": \"texting\", \"merchantid\": \"898965953867317248\", \"tranpin\": \"44444\"}"`
  responseTwo: string = `
  {
    "message": "Failed",
    "code": "404",
    "data": "It looks like the Merchant is not authorised. Please ensure that the merchant is an authorised Swipe merchant to continue",
    "error": null,
    "error_description": null,
    "meta": {}
  }`

  constructor() { }

  ngOnInit(): void {
  }

}
