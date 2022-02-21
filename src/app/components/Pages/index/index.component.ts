import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor() {}

  title: string = 'Feature Availability';
  para: string = 'This feature is only available to businesses in Nigeria.';

  heading: string = 'MERN STACK';
  content: string = `"meta": {
  "total": 2,
  "skipped": 0,
  "perPage": 50,
   "total": 2,
  "skipped": 0,
  "perPage": 50,
   "total": 2,
  "skipped": 0,
  "perPage": 50,
}`;

  cod: string = `curl -X POST
  "https://swipe.ng:7000/swipepay/entrance/payment/otp/send"
  -H "accept: */*"
   -H "Content-Type: application/json" -d "{ \"ref\": \"784853983\"}"`;
  res: string = `{
  "message": "Failed",
  "code": "404",
  "data": "Oops! Unable to verify transaction at the moment. Please try again",
  "error": null,
  "error_description": null,
  "meta": {}
}`;
  ngOnInit(): void {}
}
