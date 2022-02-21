import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-payout',
  templateUrl: './delete-payout.component.html',
  styleUrls: ['./delete-payout.component.scss']
})
export class DeletePayoutComponent implements OnInit {
 
  response: string = `{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  code: string = `
  curl -X DELETE "https://swipe.ng:7000/swipepay/merchant/delete-payout?id=30228&merchant=yyyy" -H "accept: */*"`;


  constructor() { }

  ngOnInit(): void {
  }

}
