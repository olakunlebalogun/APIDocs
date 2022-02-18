import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  heading: string = 'curl';
  responseFailed : string = 'Failed'
  responseSucess : string = 'Success'
  responseDetails1: string = `{
      "message": "Failed",
      "code": null,
      "data": "Record not found",
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
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/bank/list" -H "accept: */*"`;
  content1: string = `
  {
    "accountid": 0,
    "contactaddress": "string",
    "contactmobile": "string",
    "gender": "string",
    "lga": "string",
    "name": "string",
    "stateorigin": "string"
  }`

  constructor() { }

  ngOnInit(): void {
  }

}
