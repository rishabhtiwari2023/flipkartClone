import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  d: any
  VAL: any
  private baseURL = 'http://localhost:3000'
  constructor(private http: HttpClient, private router: Router) { }

  value: any;
  passData1(data: number) {
    this.value = data;

  }
  getData() {
    return this.value;
  }
  postData(data: any): Observable<any> {
    console.log(typeof data)
    return this.http.post(`${this.baseURL}/getAll`, data)
  }
  login(data: any) {
    this.http.post(this.baseURL + "/register", data).subscribe((result: any) => {
      // console.log(result)
      localStorage.setItem("token", result.token)
      this.router.navigate(['dashboard'])
    })
  }
  profile() {
    let headers = new HttpHeaders()
      .set("authentication", `bearer ${localStorage.getItem('token')}`)
    this.http.post(this.baseURL + "/profile", {}, { headers }).subscribe((result: any) => {
      console.log(result)
    })
  }
}
