import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-compliance',
  templateUrl: './add-update-compliance.component.html',
  styleUrls: ['./add-update-compliance.component.scss']
})
export class AddUpdateComplianceComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Failed'
  responseDetails: string = `{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/add-update-compliance" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"dataList\": [ { \"address\": \"string\", \"bvn\": \"string\",
   \"doc\": \"string\", \"id\": 0, \"nin\": \"string\" } ], \"id\": 0, \"merchant\": \"string\"}"`;
  // content: string = `"dataList": [
  //   {
  //     "address": "string",
  //     "bvn": "string",
  //     "doc": "string",
  //     "id": 0,
  //     "nin": "string"
  //   }
  // ],
  // "id": 0,
  // "merchant": "string"`
  constructor() { }


  ngOnInit(): void {
  }

}
