import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-charge-retrieve',
  templateUrl: './payment-charge-retrieve.component.html',
  styleUrls: ['./payment-charge-retrieve.component.scss'],
})
export class PaymentChargeRetrieveComponent implements OnInit {
  contOne: string = `{
  "amount": 1000,
  "period": 2
}`;
  headOne: string = `Payment Charges`;

  resOne: string = `
  {
  "message": "Success",
  "code": "200",
  "data": {
    "charges": 150,
    "dataList": [
      {
        "duedate": "Mon, 21 Mar 2022 17:29:36 PM",
        "amount": 1150,
        "transactionAmount": 1000
      }
    ]
  },
  "error": null,
  "error_description": null,
  "meta": {}
}
`;
  codeOne: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/charge/retrieve" -H "accept: */*"
-H "Content-Type: application/json" -d "{ \"amount\": 1000, \"period\": 2}"`;
  constructor() {}

  ngOnInit(): void {}
}
