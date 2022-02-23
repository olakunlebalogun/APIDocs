import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss']
})
export class DashboardOneComponent implements OnInit {
 
  response: string = `{
    "message": "Success",
    "code": "200",
    "data": {
      "topReport": {
        "walletBalance": 100,
        "transactionVolume": 1,
        "totalCashout": null,
        "pendingCashout": 101
      },
      "recentIncome": [
        {
          "description": "923169181303779328",
          "ref": "929017744814247936",
          "amount": 100,
          "trandate": 1641565681000,
          "name": null
        }
      ],
      "recentCashout": [],
      "available": null,
      "recentTransaction": [
        {
          "name": "CHISOM IJEOMAH",
          "description": "testing",
          "reference": "929017744814247936",
          "amount": 100,
          "trandate": 1641565681000,
          "trantype": null,
          "status": "Active",
          "email": "chisomije92@gmail.com",
          "balanceBefore": 1000,
          "balanceAfter": 885
        }
      ],
      "totalWalletBalance": null,
      "totalTransaction": 0,
      "totalwithdrawal": null,
      "availableBalance": null,
      "recentIncomeGrandTotal": null,
      "grandRecentCashout": null,
      "recentIncomeList": null,
      "recentCashoutList": null
    },
    "error": null,
    "error_description": null,
    "meta": {}
  }`
 
  code: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/dashboard?merchantid=30228" -H "accept: */*"`;

  // content1: string = `
  // {
  //   "accountid": 0,
  //   "newpassword": "string",
  //   "oldpassword": "string",
  //   "pin": "string"
  // }
  // `
  constructor() { }

  ngOnInit(): void {
  }

}
