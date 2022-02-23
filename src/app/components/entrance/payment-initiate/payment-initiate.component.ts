import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-initiate',
  templateUrl: './payment-initiate.component.html',
  styleUrls: ['./payment-initiate.component.scss'],
})
export class PaymentInitiateComponent implements OnInit {
  constructor() {}
  contOne: string = `{
  "accountno": "chisomije92@gmail.com",
  "amount": 1000,
  "description": "just trying to test this endpoint",
  "merchantid": "898965953867317248",
  "tranpin": "44444"
}`;
  headOne: string = `Initiate Payment`;

  codeOne: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/initiate" -H "accept: */*" -H "Content-Type: application/json"
-d "{ \"accountno\": \"chisomije92@gmail.com\", \"amount\": 1000, \"description\": \"just trying to test this endpoint\", \"merchantid\":
\"898965953867317248\", \"tranpin\": \"44444\"}"`;
  resOne: string = `{
  "message": "Success",
  "code": "200",
  "data": {
    "ref": "945601618746806272",
    "message": "Great, OTP successfully sent to the registered Email/Phone",
    "email": "chisomije92@gmail.com",
    "phone": "08135069250",
    "amount": 1000,
    "name": "CHISOM IJEOMAH",
    "link": null
  },
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  codeTwo: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/initiate" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"accountno\": \"chisomije92@gmail.com\", \"amount\": 1000, \"description\": \"just trying to test this endpoint\", \"merchantid\": \"89896595387317248\", \"tranpin\": \"44444\"}"`;

  resTwo: string = `{
  "message": "Failed",
  "code": "404",
  "data": "It looks like the Merchant is not authorised. Please ensure that the merchant is an authorised Swipe merchant to continue",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  ngOnInit(): void {}
}
