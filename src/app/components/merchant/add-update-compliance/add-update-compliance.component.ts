import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-compliance',
  templateUrl: './add-update-compliance.component.html',
  styleUrls: ['./add-update-compliance.component.scss']
})
export class AddUpdateComplianceComponent implements OnInit {
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/add-update-compliance" -H "accept: */*" -H 
  "Content-Type: application/json" -d "{ \"dataList\": [ { \"address\": \"string\", \"bvn\": \"string\",
   \"doc\": \"string\", \"id\": 0, \"nin\": \"string\" } ], \"id\": 0, \"merchant\": \"string\"}"`;
   response: string = `{
      "message": "Success",
      "code": null,
      "data": "Great, transaction proccesed successfully",
      "error": null,
      "error_description": null,
      "meta": {}
    }`
  constructor() { }


  ngOnInit(): void {
  }

}
