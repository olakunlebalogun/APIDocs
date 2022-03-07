import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  response: string = `{
    "message": "Success",
    "code": 200,
    "data": "Great, your password has been changed successfully",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  headOne: string = `Update Password`;
  contOne: string = `{
      "accountid": 33776,
      "newpassword": "12345",
      "oldpassword": "12345",
      "pin": "12345"
}`;
 
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/change-password" -H "accept: */*" -H
  "Content-Type: application/json" -d "{ \"accountid\": 544, \"newpassword\": \"segtek123\",
  \"oldpassword\": \"segtek123\", \"pin\": \"82858\"}"`;
 
  constructor() { }

  ngOnInit(): void {
  }

}
