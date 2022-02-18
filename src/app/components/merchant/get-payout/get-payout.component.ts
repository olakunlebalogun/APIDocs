import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-payout',
  templateUrl: './get-payout.component.html',
  styleUrls: ['./get-payout.component.scss']
})
export class GetPayoutComponent implements OnInit {
  heading: string = 'curl';
  responseFailed : string = 'Failed'
  responseSucess : string = 'Success'
  responseDetails1: string = `{
      "message": "Success",
      "code": null,
      "data": [],
      "error": null,
      "error_description": null,
      "meta": {}
    }`
  content: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/get-payout?merchant=30228" -H "accept: */*"`;

  constructor() { }

  ngOnInit(): void {
  }

}
