import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
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
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/change-password" -H "accept: */*" -H
  "Content-Type: application/json" -d "{ \"accountid\": 544, \"newpassword\": \"segtek123\",
  \"oldpassword\": \"segtek123\", \"pin\": \"82858\"}"`;

  constructor() { }

  ngOnInit(): void {
  }

}
