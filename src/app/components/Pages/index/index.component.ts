import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor() {}

  title: string = 'Feature Availability';
  para: string = 'This feature is only available to businesses in Nigeria.';

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

  ngOnInit(): void {}
}
