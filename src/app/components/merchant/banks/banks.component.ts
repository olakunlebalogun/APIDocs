import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  response: string = `{
    "message": "Success",
    "code": null,
    "data": "{\n  \"message\" : \"Success\",\n  \"code\" : null,\n  \"data\" : [ {\n    \"id\" : 16926,\n    \"bankname\" : \"First Bank\",\n    \"bankcode\" : \"011\",\n    \"datecreated\" : \"2022-02-21 15:13:19\",\n    \"accountid\" : 33776,\n    \"accountnumber\" : \"3088134957\",\n    \"accountname\" : \"MORONFOLA FUNSO SEGUN\",\n    \"trankey\" : \"RCP_cuowkyd0fhz8nbz\",\n    \"status\" : true\n  } ],\n  \"meta\" : { }\n}",
    "error": null,
    "error_description": null,
    "meta": {}
  }`
  headOne: string = `Update Password`;
  contOne: string = `{
      "accountid": 33776,
      
}`;
  code: string = `
  curl -X GET "https://swipe.ng:7000/swipepay/merchant/banks?accountid=33776" -H "accept: */*"`;

  constructor() { }

  ngOnInit(): void {
  }

}
