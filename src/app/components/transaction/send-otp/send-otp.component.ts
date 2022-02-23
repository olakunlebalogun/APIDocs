import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.scss']
})
export class SendOtpComponent implements OnInit {

  One: string = `
  {
    "ref": "945601618746806272"
  }`;

  codeOne: string = `curl -X POST "https://swipe.ng:7000/swipepay/transactions/otp/send" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"ref\": \"945601618746806272\"}"`
  responseOne: string = `
  {
    "message": "Success",
    "code": "200",
    "data": "Great, OTP successfully sent to the registered Email/Phone",
    "error": null,
    "error_description": null,
    "meta": {}
  }`

  codeTwo: string = `curl -X POST "https://swipe.ng:7000/swipepay/transactions/otp/send" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"ref\": \"945601606272\"}"`
  responseTwo: string = `
  {
    "message": "Failed",
    "code": "404",
    "data": "Oops! Unable to verify transaction at the moment. Please try again",
    "error": null,
    "error_description": null,
    "meta": {}
  }`


  constructor() { }

  ngOnInit(): void {
  }

}
