import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-payout',
  templateUrl: './add-update-payout.component.html',
  styleUrls: ['./add-update-payout.component.scss']
})
export class AddUpdatePayoutComponent implements OnInit {
 
  response: string = `{
      "message": "Success",
      "code": 200,
      "data": "Great, transaction proccesed successfully",
      "error": null,
      "error_description": null,
      "meta": {}
    }`
 
    code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/add-update-payout" -H "accept: */*" -H "Content-Type:
   application/json" -d "{ \"dataList\": [ { \"accountname\": \"Adelabu Mubarak\", \"accountnumber\": \"5481349570\",
    \"bankname\": \"First Bank\", \"id\": 0 } ], \"merchant\": \"923169181303779328 \"}"`;
    headOne: string = `Update Password`;
    contOne: string = `{
      {
        "dataList": [
          {
            "accountname": "Adebisi Diamond Abba",
            "accountnumber": "3088134957",
            "bankname": "First Bank",
            "id": 0
          }
        ],
        "merchant": "923169181303779328"
      }
  }`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
