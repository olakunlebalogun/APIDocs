import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bvn-verify',
  templateUrl: './bvn-verify.component.html',
  styleUrls: ['./bvn-verify.component.scss']
})
export class BvnVerifyComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Success'
  responseDetails: string = `{
    "message": "Success",
    "code": null,
    "data": "Verification Completed",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  content: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/bvn/check" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 544, \"auth\": \"string\"}"`;

  constructor() { }

  ngOnInit(): void {
  }

}
