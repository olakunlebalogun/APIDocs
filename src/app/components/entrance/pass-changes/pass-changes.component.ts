import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-changes',
  templateUrl: './pass-changes.component.html',
  styleUrls: ['./pass-changes.component.scss']
})
export class PassChangesComponent implements OnInit {
  cont:string=`{
    "email": "string",
    "password":"string"
     }`;
  head:string = `Change Password`;
  curlSuccess:string = `curl -X POST "https://swipe.ng:7000/swipepay/entrance/pass-changes?email=chisomije92%40gmail.com&password=44444" -H "accept: */*"`;
  responseSuccess :string= `{
    "message": "Success",
    "code": null,
    "data": "Pin successfully reset",
    "error": null,
    "error_description": null,
    "meta": {}
  }`;
  curlError:string=`curl -X POST "https://swipe.ng:7000/swipepay/entrance/pass-changes?email=chisomije90%40gmail.com&password=44444" -H "accept: */*"`;
  responseError:string=`{
    "message": "Failed",
    "code": null,
    "data": "Invalid account detail",
    "error": null,
    "error_description": null,
    "meta": {}
  }`;
  constructor() { }

  ngOnInit(): void {
  }

}
