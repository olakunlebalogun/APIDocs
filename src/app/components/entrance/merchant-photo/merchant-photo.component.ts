import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-photo',
  templateUrl: './merchant-photo.component.html',
  styleUrls: ['./merchant-photo.component.scss'],
})
export class MerchantPhotoComponent implements OnInit {
  headOne: string = 'Upload Photo';
  resSucc: string = ` Lorem enim eius? Cum cumque corrupti vel numquam molestias tempore?`;
  curlSucc:string= `photo uploaded successfully`;
  contOne: string = `{"display":"inline",
  "filename":"konga logo"    
                      }`;
 resErr: string = ` {
                     "timestamp": 1645524621337,
                     "status": 500,
                    "error": "Internal Server Error",
                    "path": "/swipepay/entrance/merchant/photo"
                    }`;

  curlErr:string=` curl -X GET "https://swipe.ng:7000/swipepay/entrance/merchant/photo?display=inline&filename=konga" -H "accept: */*"`;
  constructor() {}

  ngOnInit(): void {}
}
