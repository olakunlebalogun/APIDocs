import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-payout',
  templateUrl: './get-payout.component.html',
  styleUrls: ['./get-payout.component.scss']
})
export class GetPayoutComponent implements OnInit {
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
  code: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/get-payout?merchant=923169181303779328" -H "accept: */*"`;

  codeTwo: string = `curl -X GET "https://swipe.ng:7000/swipepay/merchant/get-payout?merchant=923169181303779328" -H "accept: */*"`;
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
