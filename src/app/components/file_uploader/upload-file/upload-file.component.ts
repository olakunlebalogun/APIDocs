import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  One: string = `
{
  "file": "Olaoluwa_Lawrence_Dapo_Admission_Letter.PDF",
  "merchantid": "898965953867317248",
  "types": "testing",
}`;

  curlOne: string = `
curl -X POST "https://swipe.ng:7000/swipepay/uploader/upload/files?merchantid=898965953867317248&types=test" -H "accept: */*" -H "Content-Type: multipart/form-data" -F "file=@Olaoluwa_Lawrence_Dapo_Admission_Letter.PDF;type=application/pdf"`;

  resOne: string = `
{
  "message": "Success",
  "code": null,
  "data": "files Upload Successfully",
  "error": null,
  "error_description": null,
  "meta": {}
}`;

  curlTwo: string = `curl -X POST "https://swipe.ng:7000/swipepay/uploader/upload/files?merchantid=22&types=test" -H "accept: */*" -H "Content-Type: multipart/form-data" -F "file=@Olaoluwa_Lawrence_Dapo_Admission_Letter.PDF;type=application/pdf"`;

  resTwo: string = `
{
  "message": "Failed",
  "code": null,
  "data": "Record not found",
  "error": null,
  "error_description": null,
  "meta": {}
}`;





  constructor() { }

  ngOnInit(): void {
  }

}
