import { Component, Input, OnInit } from '@angular/core';
import { faCoffee, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
})
export class SectionTwoComponent implements OnInit {
  // faCoffee = faCoffee;
  faLightbulb = faLightbulb;
  @Input() heading: string = 'Feature Availability';
  @Input() paragraph: string = 'This feature is only available to businesses in Nigeria and Ghana.';
  constructor() {}
  

  

  ngOnInit(): void {}
}