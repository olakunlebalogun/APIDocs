import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-photo',
  templateUrl: './preview-photo.component.html',
  styleUrls: ['./preview-photo.component.scss']
})
export class PreviewPhotoComponent implements OnInit {
  cont:string=`{
    "photo": "string"
     }`;
  head:string = `Preview Photo`;
  curlSuccess:string = `curl -X GET "https://swipe.ng:7000/swipepay/entrance/preview/photo?photo=gettyimage" -H "accept: */*"`;
  responseSuccess :string= `{
    "message": "Success",
    "code": 200,
    "data": "photo successfully prviewed",
    "meta": {}
  }`;
  curlError:string=`curl -X GET "https://swipe.ng:7000/swipepay/entrance/preview/photo?photo=gettyimage" -H "accept: */*"`;
  responseError:string=`{
    "timestamp": 1645612986551,
    "status": 500,
    "error": "Internal Server Error",
    "path": "/swipepay/entrance/preview/photo"
  }`;
  constructor() { }

  ngOnInit(): void {
  }

}
