import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bvn-check',
  templateUrl: './bvn-check.component.html',
  styleUrls: ['./bvn-check.component.scss']
})
export class BvnCheckComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Failed'
  responseDetails: string = `{
  "message": "Error",
  "code": null,
  "data": "Unauthorize",
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
