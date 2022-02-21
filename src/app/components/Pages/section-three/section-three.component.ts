import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss'],
})
export class SectionThreeComponent implements OnInit {
  @Input() heading: string = '';
  @Input() content: string = '';

  constructor() {}

  ngOnInit(): void {}
}
