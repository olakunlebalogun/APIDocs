import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.component.html',
  styleUrls: ['./initiate.component.scss']
})
export class InitiateComponent implements OnInit {

  code : string = `curl -X POST "https://swipe.ng:7000/swipepay/transactions/initiate" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"accountno\": \"1\", \"amount\": 10, \"description\": \"testing\", \"merchantid\": \"1\", \"tranpin\": \"090\"}"`
  response : string = `
  {
    "message": "Failed",
    "code": "404",
    "data": "It looks like the Merchant is not authorised. Please ensure that the merchant is an authorised Swipe merchant to continue",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  
  constructor() { }

  ngOnInit(): void {
  }

}
