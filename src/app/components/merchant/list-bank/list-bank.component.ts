import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.scss']
})
export class ListBankComponent implements OnInit {

  response: string = `{
    "message": "Banks retrieved",
    "code": null,
    "data": "{\n  \"status\" : true,\n  \"message\" : \"Banks retrieved\",\n  \"data\" : [ {\n    \"name\" : \"Abbey Mortgage Bank\",\n    \"slug\" : \"abbey-mortgage-bank\",\n    \"code\" : \"801\",\n    \"longcode\" : \"\",\n    \"gateway\" : null,\n    \"active\" : true,\n    \"is_deleted\" : \"false\",\n    \"id\" : 174,\n    \"createdAt\" : 1607357949000,\n    \"updatedAt\" : 1607357959000\n  }, {\n    \"name\" : \"Above Only MFB\",\n    \"slug\" : \"above-only-mfb\",\n    \"code\" : \"51204\",\n    \"longcode\" : \"\",\n    \"gateway\" : null,\n    
  }`
  headOne: string = `Update Password`;
  contOne: string = `{
      "accountid": 33776,
      
}`;
 
  code: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/bank/list" -H "accept: */*"`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
