import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-retrieve',
  templateUrl: './payment-retrieve.component.html',
  styleUrls: ['./payment-retrieve.component.scss']
})
export class PaymentRetrieveComponent implements OnInit {
countOne:string =`{"ref":"945601618746806272"}`;
curlSuc:string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/retrieve?ref=945601618746806272" -H "accept: */*"`
 resSuc:string =`{
  "message": "Success",
  "code": "200",
  "data": {
    "status": null,
    "message": null,
    "ref": null,
    "amount": 1000,
    "charges": 0,
    "trandate": null,
    "payer": null,
    "email": null,
    "merchant": null,
    "merchantNumber": null
  },
  "error": null,
  "error_description": null,
  "meta": {}
}`;
curlErr:string=`curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/retrieve?ref=945601618746804572" -H "accept: */*"`;
resErr:string=`{
  "message": "Failed",
  "code": "404",
  "data": "Oops! Unable to verify transaction at the moment. Please try again",
  "error": null,
  "error_description": null,
  "meta": {}
}`;
headOne: string = 'Retrieve payment request';
constructor() { }

  ngOnInit(): void {
  }

}
