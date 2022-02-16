import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
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
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/bank/list" -H "accept: */*"`;

  constructor() { }

  ngOnInit(): void {
  }

}
