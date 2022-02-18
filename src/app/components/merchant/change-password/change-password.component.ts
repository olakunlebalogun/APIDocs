import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  heading: string = 'curl';
  responseFailed : string = 'Failed'
  responseSucess : string = 'Success'
  responseDetails1: string = `{
    "message": "Success",
    "code": 200,
    "data": "Great, your password has been changed successfully",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  responseDetailsFailed : string =`{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/change-password" -H "accept: */*" -H
  "Content-Type: application/json" -d "{ \"accountid\": 544, \"newpassword\": \"segtek123\",
  \"oldpassword\": \"segtek123\", \"pin\": \"82858\"}"`;
  content1: string = `
  {
    "accountid": 0,
    "newpassword": "string",
    "oldpassword": "string",
    "pin": "string"
  }`

  constructor() { }

  ngOnInit(): void {
  }

}
