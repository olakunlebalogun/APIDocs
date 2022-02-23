import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-installment',
  templateUrl: './payment-installment.component.html',
  styleUrls: ['./payment-installment.component.scss'],
})
export class PaymentInstallmentComponent implements OnInit {
  countOne: string = `{"ref":"945601618746806272",
  " selectedInstallment":2}`;
  headOne: string = 'Payment plan request';

  curlSuc: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/installment" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"ref\": \"945601618746806272\", \"selectedInstallment\": 2}"`;
  resSuc: string = `{
    "message": "Success",
    "code": "200",
    "data": {
      "status": null,
      "message": null,
      "ref": null,
      "amount": 1000,
      "charges": 0,
      "trandate": null,
      "payer": null,
      "email": null,
      "merchant": null,
      "merchantNumber": null
    },
    "error": null,
    "error_description": null,
    "meta": {}
  } `;

  curlErr: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/installment" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"ref\": \"945601618744506272\", \"selectedInstallment\": 4}"`;
  resErr: string = `{
  "message": "Failed",
  "code": "404",
  "data": "Oops! Unable to verify transaction at the moment. Please try again",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  constructor() {}

  ngOnInit(): void {}
}
