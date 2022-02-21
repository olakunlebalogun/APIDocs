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
  code: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/bank/list" -H "accept: */*"`;
 

  constructor() { }

  ngOnInit(): void {
  }

}
