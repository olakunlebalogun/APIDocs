import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-send-otp',
  templateUrl: './payment-send-otp.component.html',
  styleUrls: ['./payment-send-otp.component.scss']
})
export class PaymentSendOtpComponent implements OnInit {

  contOne: string = `
  {
    "ref": "945601618746806272"
  }`;

  headOne: string = 'Send Otp';

  curlOne: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/otp/send" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"ref\": \"945601618746806272\"}"`;
  resOne: string = `
  {
    "message": "Success",
    "code": "200",
    "data": "Great, OTP successfully sent to the registered Email/Phone",
    "error": null,
    "error_description": null,
    "meta": {}
}`;

curlTwo: string = `
curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/otp/send" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"ref\": \"94560161874680622\"}"`;
  resTwo: string = `{
    
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
