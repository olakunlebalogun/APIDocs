import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-authentication-password',
  templateUrl: './update-authentication-password.component.html',
  styleUrls: ['./update-authentication-password.component.scss'],
})
export class UpdateAuthenticationPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/auth_update/passwords" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"olakunle22@gmail.com\", \"newpassword\": \"olaoluwa\", \"tokens\": \"23456\"}"`;
  response: string = `{
  "message": "Failed",
  "code": null,
  "data": "Record not found",
  "error": null,
  "error_description": null,
  "meta": {}
}`;
}
