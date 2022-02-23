import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-link',
  templateUrl: './payment-link.component.html',
  styleUrls: ['./payment-link.component.scss'],
})
export class PaymentLinkComponent implements OnInit {
  contOne: string = `
  {
    "merchantId" : "2989649031603174318"
  }`;
  headOne: string = `Payment Link`;

  codeOne: string = `curl -X GET "https://swipe.ng:7000/swipepay/entrance/payment/link?merchantId=2989649031603174318" -H "accept: */*"`;
  resOne: string = `
  {
  "message": "Success",
  "code": "404",
  "data": {
    "link": "http://localhost:4200/payment/2989649031603174318",
    "logo": "profile_30228konga.png",
    "name": "SmithRowe Nig Ltd",
    "accountType": "MERCHANT",
    "contactEmail": "smithrowe@gmail.com",
    "merchantid": "2989649031603174318",
    "bussinessname": "Konga Nig Ltd"
  },
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  codeTwo: string = `curl -X GET "https://swipe.ng:7000/swipepay/entrance/payment/link?merchantId=8989659538673172" -H "accept: */*"`;
  resTwo: string = `{
  "message": "Failed",
  "code": "404",
  "data": "It looks like the Merchant is not authorised. Please ensure that the merchant is an authorised Swipe merchant to continue",
  "error": null,
  "error_description": null,
  "meta": {}
}`;
  constructor() {}

  ngOnInit(): void {}
}
