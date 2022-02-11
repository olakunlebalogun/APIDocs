import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss'],
})
export class SectionFourComponent implements OnInit {
  @Input() code: string = ``;
  @Input() response: string = '';
  check: boolean = false;

  changed(evt: any) {
    this.check = evt.target.checked;
  }
  constructor() {}

  ngOnInit(): void {}
}
