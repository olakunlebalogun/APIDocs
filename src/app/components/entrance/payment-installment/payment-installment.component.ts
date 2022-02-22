import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-installment',
  templateUrl: './payment-installment.component.html',
  styleUrls: ['./payment-installment.component.scss']
})
export class PaymentInstallmentComponent implements OnInit {
 One: string = `
  {
    "ref": "945601618746806272",
    "selectedInstallment": 1
  }`;


  curlOne: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/installment" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"ref\": \"945601618746806272\", \"selectedInstallment\": 1}"`;
  resOne: string = `
  {
  "message": "Success",
  "code": "200",
  "data": {
    "status": "Approved",
    "message": "Great, transaction proccesed successfully",
    "ref": "945601618746806272",
    "amount": 1000,
    "charges": 150,
    "trandate": 1645530953408,
    "payer": "CHISOM IJEOMAH",
    "email": "chisomije92@gmail.com",
    "merchant": "Konga Nig Ltd",
    "merchantNumber": "898965953867317248"
  },
  "error": null,
  "error_description": null,
  "meta": {}
}`;


curlTwo: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/installment" -H "accept:
   */*" -H "Content-Type: application/json" -d
   "{ \"ref\": \"9456016187272\", \"selectedInstallment\": 1}"`;
  resTwo: string = `
{
  "message": "Failed",
  "code": "404",
  "data": "Oops! Unable to verify transaction at the moment. Please try again",
  "error": null,
  "error_description": null,
  "meta": {}
}`;
  constructor() { }

  ngOnInit(): void {
  }

}
