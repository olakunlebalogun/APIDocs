import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-compliance',
  templateUrl: './get-compliance.component.html',
  styleUrls: ['./get-compliance.component.scss']
})
export class GetComplianceComponent implements OnInit {
 
  response: string = `{
    "message": "Success",
    "code": 200,
    "data": {
      "files": [
        {
          "filesname": "driverscard_001.jpg",
          "types": "address",
          "id": 1
        },
        {
          "filesname": "driverscard_001.jpg",
          "types": "identification",
          "id": 2
        },
        {
          "filesname": "driverscard_001.jpg",
          "types": "identification",
          "id": 3
        }
      ],
      "compliance": [
        {
          "id": 1,
          "nin": "76996342411",
          "address": "Abuja",
          "doc": "string",
          "bvn": "22190955063"
        },
        {
          "id": 2,
          "nin": "76996342411",
          "address": "Abuja",
          "doc": "string",
          "bvn": "22190955063"
        }
      ]
    },
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  headOne: string = `Update Password`;
  contOne: string = `{
    923169181303779328
}`;
  code: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/get-compliance?merchant=923169181303779328" -H "accept: */*"`;

  codeTwo: string = `curl -X GET "https://swipe.ng:7000/swipepay/merchant/get-compliance?merchant=823169181303779328" -H "accept: */*"`;
  resTwo: string = `{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": {}
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
