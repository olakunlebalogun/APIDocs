import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {
  codeOne: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/password/reset" -H "accept: */*"
  -H "Content-Type: application/json" -d "{ \"email\": \"olakunlebalogun247@gmail.com\"}"`;

  resOne: string = `
  {
  "message": "Success",
  "code": null,
  "data": "Awesome, you have initiated password reset, kindly check your email to continue this process",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  contOne: string = `{
  "email": "olakunlebalogun247@gmail.com"
}`;

  headOne: string = `Password Reset`;

  codeTwo: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/password/reset" -H "accept: */*"
   -H "Content-Type: application/json" -d "{ \"email\": \"olakunlebaogun247@gmail.com\"}"`;
  resTwo: string = `
  {
  "message": "Failed",
  "code": null,
  "data": "Oops, record not found. Sorry",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  constructor() {}

  ngOnInit(): void {}
}
