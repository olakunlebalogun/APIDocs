import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss']
})
export class DashboardOneComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Success'
  responseDetails: string = `{
    "message": "Success",
    "code": null,
    "data": "Great, your password has been changed successfully",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  content: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/dashboard?merchantid=30228" -H "accept: */*"`;

  constructor() { }

  ngOnInit(): void {
  }

}
