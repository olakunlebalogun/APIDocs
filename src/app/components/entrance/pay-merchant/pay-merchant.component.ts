import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-merchant',
  templateUrl: './pay-merchant.component.html',
  styleUrls: ['./pay-merchant.component.scss']
})
export class PayMerchantComponent implements OnInit {

  contOne: string = `
  {
    "accountname": "string",
    "accountnumber": "string",
    "amount": 0,
    "bankname": "string",
    "itemname": "string",
    "merchantEmail": "string",
    "phone": "string",
    "tranpin": "string",
    "userEmail": "string"
  }`;

  headOne: string = 'Pay Merchant Request';

  curlOne: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/onboard" -H "accept: */*" -H "Content-Type: application/json"
-d "{ \"businessType\": \"Clothing\", \"companyName\": \"SmithRowe\", \"contactemail\": \"smithrowe@gmail.com\", \"contactmobile\": \"09088881111\",
\"gender\": \"male\", \"id\": 0, \"name\": \"Smith Rowe\", \"password\": \"rowey\", \"rcno\": \"090221\", \"referral\": \"Mark Mason\"}"`;
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
  curl -X POST "https://swipe.ng:7000/swipepay/entrance/onboard" -H "accept: */*" -H "Content-Type: application/json"
-d "{ \"businessType\": \"Clothing\", \"companyName\": \"SmithRowe\", \"contactemail\": \"smithrowe@gmail.com\",
\"contactmobile\": \"09088881111\", \"gender\": \"male\", \"id\": 1, \"name\": \"Smith Rowe\", \"password\": \"rowey\", \"rcno\": \"090221\",
 \"referral\": \"Mark Mason\"}"`;
  resTwo: string = `{
  "message": "Failed",
  "code": "400",
  "data": "Oops, email/phone number already in use. Please try again using another email/phone number",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
