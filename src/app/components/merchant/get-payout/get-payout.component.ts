import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-payout',
  templateUrl: './get-payout.component.html',
  styleUrls: ['./get-payout.component.scss']
})
export class GetPayoutComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Failed'
  responseDetails: string = `{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
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
