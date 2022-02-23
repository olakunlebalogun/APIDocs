import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-by-merchant-email',
  templateUrl: './list-by-merchant-email.component.html',
  styleUrls: ['./list-by-merchant-email.component.scss']
})
export class ListByMerchantEmailComponent implements OnInit {
  One: string = `
  {
    "email": "",
    "merchant_id": ""
  }`;

  codeOne: string = `curl -X GET "https://swipe.ng:7000/swipepay/transactions/list/by-email-merchant?email=chisomije92%40gmail.com&merchant=898965953867317248" -H "accept: */*"`
  responseOne: string = `
  {
    "message": "Success",
    "code": "200",
    "data": [
      {
        "name": "CHISOM IJEOMAH",
        "description": "just trying to test this endpoint",
        "reference": "945601618746806272",
        "amount": 1000,
        "trandate": 1645530953000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 27000,
        "balanceAfter": 25850
      },
    ],
    "error": null,
    "error_description": null,
    "meta": {}
  }`

  constructor() { }

  ngOnInit(): void {
  }

}
