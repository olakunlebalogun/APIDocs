import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-compliance',
  templateUrl: './delete-compliance.component.html',
  styleUrls: ['./delete-compliance.component.scss']
})
export class DeleteComplianceComponent implements OnInit {
  headOne: string = `Update Password`;
  contOne: string = `{
    30228
    923169181303779328
}`;
 
  response: string = `{
    "message": "Success",
    "code": 200,
    "data": "Great, transaction proccesed successfully",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  code: string = `
  curl -X DELETE "https://swipe.ng:7000/swipepay/merchant/delete-compliance?id=30228&merchant=74990920920222" -H "accept: */*"`;

  codeTwo: string = `curl -X DELETE "https://swipe.ng:7000/swipepay/merchant/delete-compliance?id=30228&merchant=74990920920222" -H "accept: */*"`;
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
