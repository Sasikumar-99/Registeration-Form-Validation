import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginDetails(form: NgForm) {
    localStorage.setItem('loginEmailVal',JSON.stringify(form.value.emailInp) )
    localStorage.setItem('loginPassVal',JSON.stringify(form.value.passInp) )
  }
  clearDB(){
    localStorage.clear()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
