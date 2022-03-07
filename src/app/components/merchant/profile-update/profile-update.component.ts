import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
 
  response: string = `{
      "message": "Success",
      "code": 200,
      "data": "Record updated successfully",
      "error": null,
      "error_description": null,
      "meta": {}
  }`
  headOne: string = `Update Password`;
  contOne: string = `{
      "accountid": 33776 ,
      "contactaddress": "Lagelu Estate Ibadan",
      "contactmobile": "08076666211",
      "gender": "Male",
      "lga": "Ido",
      "name": "Adebisi Diamond Abba",
      "stateorigin": "Lagos"
}`;
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/profile/update" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"accountid\": 33776 , \"contactaddress\": \"Lagelu Estate Ibadan\", \"contactmobile\": \"08076666211\", \"gender\": \"Male\", \"lga\": \"Ido\", \"name\": \"Adebisi Diamond Abba\", \"stateorigin\": \"Lagos\"}"`;
 

  constructor() { }

  ngOnInit(): void {
  }

}
