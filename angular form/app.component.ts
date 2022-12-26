import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  // userLogin(items:any){
  //   console.log("userlogin",items)
  // }
  loginForm= new FormGroup(
    {
      user:new FormControl(''),
      password:new FormControl(''),

    }
  )
  loginUser(){
    console.log(this.loginForm.value);
  }
}
