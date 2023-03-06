import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  d: any
  VAL: any
  private baseURL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

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
}
