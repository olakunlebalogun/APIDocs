import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-mobile-reset',
  templateUrl: './password-mobile-reset.component.html',
  styleUrls: ['./password-mobile-reset.component.scss']
})
export class PasswordMobileResetComponent implements OnInit {

  contOne: string = `
  {
    "email": "olasunkanmizik@gmail.com",
   
  }`;

  headOne: string = 'Password mobile reset';

  curlOne: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/passwords/mobile_reset" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"olasunkanmizik@gmail.com\"}"`;
  resOne: string = `
  {
    "message": "Success",
    "code": null,
    "data": "Reset initiated",
    "error": null,
    "error_description": null,
    "meta": {}
}`;

curlTwo: string = `
curl -X POST "https://swipe.ng:7000/swipepay/entrance/passwords/mobile_reset" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"olasunkanmiz@gmail.com\"}"`;
  resTwo: string = `{
    
    "message": "Failed",
    "code": null,
    "data": "Record not found",
    "error": null,
    "error_description": null,
    "meta": {}
    
}`;

  constructor() { }

  ngOnInit(): void {
  }
}
