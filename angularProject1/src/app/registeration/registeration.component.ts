import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registerationlocalDBVal=localStorage.getItem('itemsSetEmail')
  registerationDetails(form: NgForm) {
    localStorage.setItem('itemsSetEmail',JSON.stringify(form.value.emailInp))
    localStorage.setItem('itemsSetPass',JSON.stringify(form.value.passInp))
    this.registerationlocalDBVal=localStorage.getItem('itemsSetEmail')
  }
  clearDB(){
  localStorage.clear()
  this.registerationlocalDBVal=localStorage.getItem('itemsSetEmail')
}
 constructor() { }  
  
  ngOnInit(): void {
  }

}
