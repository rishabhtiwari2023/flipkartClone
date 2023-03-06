import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login-jwt',
  templateUrl: './login-jwt.component.html',
  styleUrls: ['./login-jwt.component.css']
})
export class LoginJWTComponent {
  constructor(private http: HttpClient, private api: ApiService) { }
  userLogin(data: any) {
    this.api.login(data)
  }
}
