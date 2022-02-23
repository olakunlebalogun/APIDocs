import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-merchant-verify',
  templateUrl: './pay-merchant-verify.component.html',
  styleUrls: ['./pay-merchant-verify.component.scss']
})
export class PayMerchantVerifyComponent implements OnInit {

  contOne: string = `
  {
    "merchantId": "898965953867317248",
    "reference": "945601618746806272"
  }`;

  headOne: string = 'Verify Merchant Request';

  curlOne: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/pay-merchant/verify" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"merchantId\": \"898965953867317248\", \"reference\": \"945601618746806272\"}"`;
  resOne: string = `
  {
  "message": "Success",
  "code": null,
  "data": "Success: Email activation sent to the registered email address",
  "error": null,
  "error_description": null,
  "meta": {
    "accountid": 36086,
    "merchantId": "945271723562897408"
  }
}`;

curlTwo: string = `
curl -X POST "https://swipe.ng:7000/swipepay/entrance/pay-merchant/verify" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"merchantId\": \"898965953867317248\", \"reference\": \"945601618746806272\"}"`;
  resTwo: string = `{
    
      "timestamp": 1645530881914,
      "status": 400,
      "error": "Bad Request",
      "path": "/swipepay/entrance/pay-merchant/verify"
    
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
