import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-compliance',
  templateUrl: './delete-compliance.component.html',
  styleUrls: ['./delete-compliance.component.scss']
})
export class DeleteComplianceComponent implements OnInit {
  heading: string = 'curl';
  response : string = 'Failed'
  responseDetails: string = `{
    "message": "Failed",
    "code": "404",
    "data": "Your account is invalid",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  content: string = `
  curl -X DELETE "https://swipe.ng:7000/swipepay/merchant/delete-compliance?id=30228&merchant=Konga" -H "accept: */*"`;

  constructor() { }

  ngOnInit(): void {
  }

}
