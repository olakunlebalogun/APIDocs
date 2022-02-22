import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss']
})
export class FileDownloadComponent implements OnInit {

  One: string = `
  {
    "file": "Olaoluwa_Lawrence_Dapo_Admission_Letter.PDF",
    "merchantid": "898965953867317248",
    "types": "testing",
  }`;

  
  constructor() { }

  ngOnInit(): void {
  }

}
