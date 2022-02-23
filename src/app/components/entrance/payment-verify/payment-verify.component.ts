import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-verify',
  templateUrl: './payment-verify.component.html',
  styleUrls: ['./payment-verify.component.scss']
})
export class PaymentVerifyComponent implements OnInit {

  contOne: string = `
  {
    "otp": "3456",
    "reference": "945601618746806272"
  }`;

  headOne: string = 'Payment verification';

  curlOne: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/verify" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"otp\": \"3456\", \"reference\": \"945601618746806272\"}"`;
  resOne: string = `
  {
    "message": "Failed",
  "code": "404",
  "data": "Please provide a valid OTP to complete the transaction",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

curlTwo: string = `
curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/verify" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"otp\": \"3456\", \"reference\": \"945601618746806272\"}"`;
  resTwo: string = `{
    
    "message": "Failed",
  "code": "404",
  "data": "Please provide a valid OTP to complete the transaction",
  "error": null,
  "error_description": null,
  "meta": {}
    
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
