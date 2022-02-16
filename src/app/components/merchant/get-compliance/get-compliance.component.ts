import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-compliance',
  templateUrl: './get-compliance.component.html',
  styleUrls: ['./get-compliance.component.scss']
})
export class GetComplianceComponent implements OnInit {
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
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/get-compliance?merchant=30228" -H "accept: */*"`;

  constructor() { }

  ngOnInit(): void {
  }

}
