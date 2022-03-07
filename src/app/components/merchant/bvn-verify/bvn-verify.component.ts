import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bvn-verify',
  templateUrl: './bvn-verify.component.html',
  styleUrls: ['./bvn-verify.component.scss']
})
export class BvnVerifyComponent implements OnInit {
 
  response: string = `{
    "message": "Success",
    "code": 200,
    "data": "Verification Completed",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  headOne: string = `Update Password`;
  contOne: string = `{
    "accountid": 33776,
    "accountnumber": "3893332222",
    "bankcode": "011",
    "bankname": "First Bank",
    "bvn": "22334455222"
}`;
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/bvn/check" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"accountid\": 544, \"auth\": \"string\"}"`;
  

  constructor() { }

  ngOnInit(): void {
  }

}
