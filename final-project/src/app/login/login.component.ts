import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// https://www.youtube.com/watch?v=sv76HcgjLZM
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
// username="";
// password="";
errorMsg="";
constructor(private auth:AuthService,private router:Router){}
ngOnInit():void{

} 



login(username:any,password:any){
  if(username.value.trim().length === 0){
    this.errorMsg="username is required";
  }
  else if(password.value.trim().length ===0){
    this.errorMsg="password is required";
  }
  else{
    this.errorMsg="";
    let res=this.auth.login(username.value,password.value);
    if(res===200){
      this.router.navigate(["home"])
    }
    if(res==403){
      this.errorMsg="Invalid credentials";
    }
  }
}
}
