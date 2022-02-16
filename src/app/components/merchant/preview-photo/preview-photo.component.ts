import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-photo',
  templateUrl: './preview-photo.component.html',
  styleUrls: ['./preview-photo.component.scss']
})
export class PreviewPhotoComponent implements OnInit {
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
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/bank/list" -H "accept: */*"`;


  constructor() { }

  ngOnInit(): void {
  }

}
