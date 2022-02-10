import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {

  constructor() { }
  heading: string = 'MERN STACK';
  content: string = `"meta": {
  "total": 2,
  "skipped": 0,
  "perPage": 50,
   "total": 2,
  "skipped": 0,
  "perPage": 50,
   "total": 2,
  "skipped": 0,
  "perPage": 50,
}`;

  ngOnInit(): void {
  }

}
