import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-update-password',
  templateUrl: './authentication-update-password.component.html',
  styleUrls: ['./authentication-update-password.component.scss']
})
export class AuthenticationUpdatePasswordComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Failed'
  responseDetails: string = `{
    "message": "Failed",
    "code": null,
    "data": "Oops, record not found. Sorry",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/auth_update/password" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"email\": \"string\", \"newpassword\": \"string\",
   \"tokens\": \"string\"}"`;

  constructor() { }

  ngOnInit(): void {
  }

}
