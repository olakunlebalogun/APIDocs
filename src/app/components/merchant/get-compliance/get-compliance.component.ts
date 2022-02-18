import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-compliance',
  templateUrl: './get-compliance.component.html',
  styleUrls: ['./get-compliance.component.scss']
})
export class GetComplianceComponent implements OnInit {
  heading: string = 'curl';
  responseFailed : string = 'Failed'
  responseSucess : string = 'Success'
  responseDetails1: string = `{
    "message": "Success",
    "code": null,
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
  content: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/get-compliance?merchant=30228" -H "accept: */*"`;

  constructor() { }

  ngOnInit(): void {
  }

}
