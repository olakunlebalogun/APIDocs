import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-photo',
  templateUrl: './preview-photo.component.html',
  styleUrls: ['./preview-photo.component.scss']
})
export class PreviewPhotoComponent implements OnInit {
  headOne: string = `Update Password`;
  contOne: string = `{
    923169181303779328
}`;
response: string = `{
  "message": "Success",
  "code": null,
  "data": [
    {
      "id": 1,
      "bankname": "First BAnk",
      "accountnumber": "4087134957",
      "accountname": "Andrew Bola A."
    },
    {
      "id": 2,
      "bankname": "First Bank",
      "accountnumber": "7508134957",
      "accountname": "Adebisi Desmond Abba"
    }
  ],
  "error": null,
  "error_description": null,
  "meta": {}
}`
 
  // response: string = `{
  //   "message": "Failed",
  //   "code": "404",
  //   "data": "Your account is invalid",
  //   "error": null,
  //   "error_description": null,
  //   "meta": {}
  // }`
  code: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/preview/photo?merchantid=898965953867317248" -H "accept: */*"`;

  codeTwo: string = `curl -X GET "https://swipe.ng:7000/swipepay/merchant/preview/photo?merchantid=898965953867317248" -H "accept: */*"`;
  resTwo: string = `{
    "timestamp": 1647202546962,
    "status": 500,
    "error": "Internal Server Error",
    "path": "/swipepay/merchant/preview/photo"
}`;


  constructor() { }

  ngOnInit(): void {
  }

}
