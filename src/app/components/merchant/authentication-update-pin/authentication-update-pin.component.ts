import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-update-pin',
  templateUrl: './authentication-update-pin.component.html',
  styleUrls: ['./authentication-update-pin.component.scss']
})
export class AuthenticationUpdatePinComponent implements OnInit {
 
  response: string = `{
    "message": "Success",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/auth_update/pin" -H "accept: */*" -H
   "Content-Type: application/json" -d "{ \"email\": \"string\", \"newpin\": \"string\",
    \"secretanswer\": \"string\", \"secretquestion\": \"string\", \"tokens\": \"string\"}"`;
    headOne: string = `Update Password`;
    contOne: string = `{
        "email": "us@ourmail.com",
        "newpin": "12345",
        "secretanswer": "Abuja",
        "secretquestion": "In what town or city was your first full time job?",
        "tokens": "00000"
  }`;
   

  constructor() { }

  ngOnInit(): void {
  }

}
