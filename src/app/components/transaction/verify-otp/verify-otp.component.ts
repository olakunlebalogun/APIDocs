import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  One: string = `
  {
    "otp": "798965",
    "reference": "945601618746806272"
  }`;


  codeOne: string = `curl -X POST "https://swipe.ng:7000/swipepay/transactions/verify" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"otp\": \"798965\", \"reference\": \"945601618746806272\"}"`
  responseOne: string = `
  {
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
    }
  }`

  codeTwo: string = `curl -X POST "https://swipe.ng:7000/swipepay/transactions/verify" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"otp\": \"55332\", \"reference\": \"945601618746806272\"}"`
  responseTwo: string = `
  {
    "message": "Failed",
    "code": "404",
    "data": "Please provide a valid OTP to complete the transaction",
    "error": null,
    "error_description": null,
    "meta": {}
  }`

  constructor() { }

  ngOnInit(): void {
  }

}
