import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset-complete',
  templateUrl: './password-reset-complete.component.html',
  styleUrls: ['./password-reset-complete.component.scss'],
})
export class PasswordResetCompleteComponent implements OnInit {
  contOne: string = `{
  "email": "olakunlebalogun247@gmail.com",
  "newpassword": "24079",
  "tokens": "23432"
}`;
  headOne: string = `Password Reset Complete`;

  codeOne: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/password/reset/complete"
  -H "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"olakunlebalogun247@gmail.com\",
   \"newpassword\": \"24079\", \"tokens\": \"23432\"}"`;
  resOne: string = `{
  "message": "Failed",
  "code": null,
  "data": "Oops, record not found. Sorry",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  codeTwo: string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/password/reset/complete"
  -H "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"olakunlebalogun247@gmail.com\",
  \"newpassword\": \"24079\", \"tokens\": \"23432\"}"`;
  resTwo: string = `{
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
