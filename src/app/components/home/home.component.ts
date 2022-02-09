import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // homeOne: string = 'Webhooks';
  // homeOnePara: string =
  //   'Learn how to listen to events whenever certain actions occur on your integration.';

  // contentOne: string =
  //   "We recommend that you use webhook to provide value to your customers over using a callback. Callbacks can fail if the network connection on a customer's device fails or is weak or if the device goes off after a transaction and several other situations that are outside both our and your control.";
  constructor() {}

  ngOnInit(): void {}
}
