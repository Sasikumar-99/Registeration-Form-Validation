import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  onLogin() {
    const regEmailVal = localStorage.getItem('itemsSetEmail')
    const regPassVal = localStorage.getItem('itemsSetPass')
    const loginEmailVal = localStorage.getItem('loginEmailVal')
    const loginPassVal = localStorage.getItem('loginPassVal')
    if(regEmailVal===null){
      window.alert('kindly login to view this page')
      return false
    }
    else if (regEmailVal === loginEmailVal && regPassVal === loginPassVal) {
      console.log(regEmailVal);
      console.log(loginEmailVal);
      console.log(regPassVal);
      console.log(loginPassVal);
      window.alert('login sucessful')
      return true
    } else {
      window.alert('login failed please verify your email or password')
      return false
    }
  }

}
