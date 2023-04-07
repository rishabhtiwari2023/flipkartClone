import { Component } from '@angular/core';
import { StudentDataService } from 'src/app/student-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private userserevice: StudentDataService) {

  }
  ngOnInit() {
    this.userserevice.profile();
  }
}
