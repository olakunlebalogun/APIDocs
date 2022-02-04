import { Component, Input, OnInit } from '@angular/core';
import { faCoffee, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
})
export class SectionTwoComponent implements OnInit {
  faCoffee = faCoffee;
  faLightbulb = faLightbulb;
  @Input() heading: string = '';
  @Input() paragraph: string = '';
  constructor() {}

  ngOnInit(): void {}
}
