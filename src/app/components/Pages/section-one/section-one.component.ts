import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit {
  @Input() heading: string = '';
  @Input() paragraph: string = '';

  constructor() {}

  ngOnInit(): void {}
}
