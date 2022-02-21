import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-photograph',
  templateUrl: './upload-photograph.component.html',
  styleUrls: ['./upload-photograph.component.scss']
})
export class UploadPhotographComponent implements OnInit {
 
  response: string = `{
      "message": "Success",
      "code": 200,
      "data": "Profile Picture Updated Successfully",
      "error": null,
      "error_description": null,
      "meta": {}
  }`
  code: string = `
  curl -X POST "https://swipe.ng:7000/swipepay/merchant/transactionpin/create" -H "accept: */*" -H
   "Content-Type: application/json" -d "{ \"accountid\": 0, \"answer\": \"string\", \"pin\": \"string\",
    \"question\": \"string\"}"`;

  constructor() { }

  ngOnInit(): void {
  }

}
