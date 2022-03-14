import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-payout',
  templateUrl: './delete-payout.component.html',
  styleUrls: ['./delete-payout.component.scss']
})
export class DeletePayoutComponent implements OnInit {
  headOne: string = `Update Password`;
  contOne: string = `{
    30228
    923169181303779328
}`;
  code: string = `
  curl -X DELETE "https://swipe.ng:7000/swipepay/merchant/delete-payout?id=30228&merchant=923169181303779328" -H "accept: */*"`;

  response: string = `{
    "message": "Success",
    "code": null,
    "data": "Great, transaction proccesed successfully",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  
  codeTwo: string = `curl -X DELETE "https://swipe.ng:7000/swipepay/merchant/delete-payout?id=30228&merchant=823169181303779328" -H "accept: */*"`;
  resTwo: string = `{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": {}
}`;
  constructor() { }

  ngOnInit(): void {
  }

}
