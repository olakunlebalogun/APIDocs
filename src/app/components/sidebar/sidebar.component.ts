import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public show: boolean = false;
  public show_1: boolean = false;
  public show_2: boolean = false;
  public show_3: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggle() {
    this.show = !this.show;
  }

  toggle_1() {
    this.show_1 = !this.show_1;
  }
  toggle_2() {
    this.show_2 = !this.show_2;
  }
  toggle_3() {
    this.show_3 = !this.show_3;
  }
}
