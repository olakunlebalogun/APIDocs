import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss'],
})
export class SectionThreeComponent implements OnInit {
  showResponse : any
  @Input() heading: string = '';
  @Input() content: string = '';
  @Input() response: string = '';
  @Input() responseDetails: string = '';

  constructor() {}

  ngOnInit(): void {}
}
