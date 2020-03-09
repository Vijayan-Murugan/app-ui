import { Component, OnInit } from '@angular/core';
import { SimpleHttpConncetionService } from '../../../src/app/service/simple-http-conncetion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public message: any;
  constructor(public apicall:SimpleHttpConncetionService) { 
    this.simpleapicall();
  }

  ngOnInit(): void {

  }


  simpleapicall() {
    // this.apicall.simpleAPICalls().subscribe((data: {
      
    // }) => {
      this.message = "dsfgsdgidfhgfgiuhsd"
    //   console.log("::::::::::::::::::",data)
    //   this.message = data;
    // })
  }

}
