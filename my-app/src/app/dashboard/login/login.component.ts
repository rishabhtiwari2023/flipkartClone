import { Component } from '@angular/core';
import { StudentDataService } from 'src/app/student-data.service';
// import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userservice: StudentDataService) {

  }
  ngOnInit(): void {

  }
  submit(email: HTMLInputElement, password: HTMLInputElement) {
    let Email = email.value;
    let pass = password.value;
    let data = { email: Email, password: pass }


    this.userservice.login(data)
  }
}
