import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-photo',
  templateUrl: './merchant-photo.component.html',
  styleUrls: ['./merchant-photo.component.scss'],
})
export class MerchantPhotoComponent implements OnInit {
  headOne: string = 'This is for cruise';
  resOne: string = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, enim eius? Cum cumque amet nostrum, corrupti vel numquam molestias tempore?`;
  contOne: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  constructor() {}

  ngOnInit(): void {}
}
