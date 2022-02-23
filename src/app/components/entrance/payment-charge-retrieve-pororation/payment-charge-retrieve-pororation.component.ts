import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-charge-retrieve-pororation',
  templateUrl: './payment-charge-retrieve-pororation.component.html',
  styleUrls: ['./payment-charge-retrieve-pororation.component.scss'],
})
export class PaymentChargeRetrievePororationComponent implements OnInit {
  contOne: string = `{
  "amount": 1000,
  "period": 1
}`;
  headOne: string = `Payment Proration`;

  codeOne: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/charge/retrieve/pororation" -H "accept: */*"
 -H "Content-Type: application/json" -d "{ \"amount\": 1000, \"period\": 1}"`;

  resOne: string = `{
  "message": "Success",
  "code": "200",
  "data": {
    "charges": 150,
    "dataList": [
      {
        "duedate": "Mon, 21 Mar 2022 19:25:39 PM",
        "amount": 1150,
        "transactionAmount": 1000
      }
    ]
  },
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  codeTwo: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/charge/retrieve/pororation" -H "accept: */*"
 -H "Content-Type: application/json" -d "{ \"amount\": 1000, \"period\": 2}"`;
  resTwo: string = `{
  "message": "Success",
  "code": "200",
  "data": {
    "charges": 187.5,
    "dataList": [
      {
        "duedate": "Mon, 21 Mar 2022 17:34:32 PM",
        "amount": 650,
        "transactionAmount": 1000
      },
      {
        "duedate": "Thu, 21 Apr 2022 17:34:32 PM",
        "amount": 537.5,
        "transactionAmount": 1000
      }
    ]
  },
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  codeThree: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/charge/retrieve/pororation" -H "accept: */*"
 -H "Content-Type: application/json" -d "{ \"amount\": 1000, \"period\": 3}"`;
  resThree: string = `
  {
  "message": "Success",
  "code": "200",
  "data": {
    "charges": 217.5,
    "dataList": [
      {
        "duedate": "Mon, 21 Mar 2022 19:34:49 PM",
        "amount": 550,
        "transactionAmount": 1000
      },
      {
        "duedate": "Thu, 21 Apr 2022 19:34:49 PM",
        "amount": 345,
        "transactionAmount": 1000
      },
      {
        "duedate": "Sat, 21 May 2022 19:34:49 PM",
        "amount": 322.5,
        "transactionAmount": 1000
      }
    ]
  },
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  constructor() {}

  ngOnInit(): void {}
}
