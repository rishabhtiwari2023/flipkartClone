import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }
  getPrduct() {
    return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  login(data: any) {
    this.http.post("http://localhost:3000/login", data).subscribe((result: any) => {
      localStorage.setItem("token", result.token);
      this.router.navigate(['/profile'])
    })
  }
}
