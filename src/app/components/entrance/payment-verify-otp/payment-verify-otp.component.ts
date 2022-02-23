import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-verify-otp',
  templateUrl: './payment-verify-otp.component.html',
  styleUrls: ['./payment-verify-otp.component.scss']
})
export class PaymentVerifyOtpComponent implements OnInit {
 One: string = `
 {
  "body": {},
  "statusCode": "100 CONTINUE",
  "statusCodeValue": 0
}`;

  curlOne: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/installment" -H 
  "accept: */*" -H "Content-Type: application/json" -d 
  "{ \"ref\": \"945601618746806272\", \"selectedInstallment\": 1}"`;

   resOne: string = `
  {
  "message": "Failed",
  "code": "500",
  "data": "Oops! An error occurred. Kindly contact support.",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

curlTwo: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/installment" -H 
  "accept: */*" -H "Content-Type: application/json" -d 
  "{ \"ref\": \"945601618746806272\", \"selectedInstallment\": 1}"`;
  resTwo: string = `
 {
  "message": "Failed",
  "code": "500",
  "data": "Oops! An error occurred. Kindly contact support.",
  "error": null,
  "error_description": null,
  "meta": {}
}`;


  constructor() { }

  ngOnInit(): void {
  }

}
