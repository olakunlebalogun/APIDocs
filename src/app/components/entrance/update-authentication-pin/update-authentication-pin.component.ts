import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-authentication-pin',
  templateUrl: './update-authentication-pin.component.html',
  styleUrls: ['./update-authentication-pin.component.scss'],
})
export class UpdateAuthenticationPinComponent implements OnInit {
  cont:string=`{
    "email": "string",
    "newpin": "string",
    "secretanswer": "string",
    "secretquestion": "string",
    "tokens": "string"
  }`;
  head:string = `Update Authentication Pin`;
  curlSuccess:string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/auth_updates/pin" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"olakunlogun247@gmail.com\", \"newpin\": \"24079\", \"secretanswer\": \"zxtlem\", \"secretquestion\": \"what is the name of your primary school\", \"tokens\": \"24hhe7373\"}"`;
  responseSuccess :string= `{
    "message": "Success",
    "code": 200,
    "data": "pin successfully updated",
    "meta": {}
  }`;
  curlError:string=`curl -X POST "https://swipe.ng:7000/swipepay/entrance/auth_updates/pin" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"email\": \"olakunlebalog47@gmail.com\", \"newpin\": \"24079\", \"secretanswer\": \"folem\", \"secretquestion\": \"what is the name of your primary school\", \"tokens\": \"24hh895373\"}"`;
  responseError:string=`{
    "message": "Failed",
    "code": null,
    "data": "Record not found",
    "error": null,
    "error_description": null,
    "meta": {}
  }`;
  constructor() {}

  ngOnInit(): void {}
}
