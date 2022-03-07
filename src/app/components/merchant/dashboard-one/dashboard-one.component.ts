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
      "walletBalance": 156410,
      "transactionVolume": 34,
      "totalCashout": 60,
      "pendingCashout": 43011
    },
    "recentIncome": [
      {
        "description": "898965953867317248",
        "ref": "945601618746806272",
        "amount": 1000,
        "trandate": 1645530953000,
        "name": null
      },
      {
        "description": "898965953867317248",
        "ref": "936576939801448448",
        "amount": 40000,
        "trandate": 1643367892000,
        "name": null
      },
      {
        "description": "898965953867317248",
        "ref": "936562798323830784",
        "amount": 2000,
        "trandate": 1643364670000,
        "name": null
      },
      {
        "description": "898965953867317248",
        "ref": "930767567271759872",
        "amount": 10,
        "trandate": 1643120620000,
        "name": null
      },
      {
        "description": "898965953867317248",
        "ref": "920295666187505664",
        "amount": 500,
        "trandate": 1639487011000,
        "name": null
      },
      {
        "description": "898965953867317248",
        "ref": "920273178850234368",
        "amount": 1000,
        "trandate": 1639480754000,
        "name": null
      }
    ],
    "recentCashout": [
      {
        "description": null,
        "ref": null,
        "amount": 30,
        "trandate": null,
        "name": null
      },
      {
        "description": null,
        "ref": "0909",
        "amount": 30,
        "trandate": null,
        "name": null
      }
    ],
    "available": null,
    "recentTransaction": [
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
      {
        "name": "CHISOM IJEOMAH",
        "description": "Mobile phone (infinix)",
        "reference": "936576939801448448",
        "amount": 40000,
        "trandate": 1643367892000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 47700,
        "balanceAfter": 1700
      },
      {
        "name": "CHISOM IJEOMAH",
        "description": "Airpod",
        "reference": "936562798323830784",
        "amount": 2000,
        "trandate": 1643364670000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 50000,
        "balanceAfter": 47700
      },
      {
        "name": "CHISOM IJEOMAH",
        "description": "string",
        "reference": "930767567271759872",
        "amount": 10,
        "trandate": 1643120619000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 770,
        "balanceAfter": 758.5
      },
      {
        "name": "CHISOM IJEOMAH",
        "description": "also for testing",
        "reference": "920295666187505664",
        "amount": 500,
        "trandate": 1639487011000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 5000,
        "balanceAfter": 4425
      },
      {
        "name": "CHISOM IJEOMAH",
        "description": "testing",
        "reference": "920273178850234368",
        "amount": 1000,
        "trandate": 1639480754000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 9425,
        "balanceAfter": 8275
      },
      {
        "name": "CHISOM IJEOMAH",
        "description": "Testing",
        "reference": "920264847641284608",
        "amount": 500,
        "trandate": 1639479113000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 10000,
        "balanceAfter": 9425
      },
      {
        "name": "CHISOM IJEOMAH",
        "description": "Another testing",
        "reference": "919885967361314816",
        "amount": 1000,
        "trandate": 1639389041000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 4425,
        "balanceAfter": 3275
      },
      {
        "name": "CHISOM IJEOMAH",
        "description": "this is a testing thing",
        "reference": "919877111478489088",
        "amount": 500,
        "trandate": 1639386962000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 5000,
        "balanceAfter": 4425
      },
      {
        "name": "CHISOM IJEOMAH",
        "description": "still testing",
        "reference": "915543529909915648",
        "amount": 2000,
        "trandate": 1638353234000,
        "trantype": null,
        "status": "Active",
        "email": "chisomije92@gmail.com",
        "balanceBefore": 3390,
        "balanceAfter": 1090
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

  headOne: string = `Update Password`;
  contOne: string = `{
    "accountid": 33776,
    "accountnumber": "3893332222",
    "bankcode": "011",
    "bankname": "First Bank",
    "bvn": "22334455222"
}`;
 
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
