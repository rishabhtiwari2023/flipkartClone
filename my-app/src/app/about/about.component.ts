import { Component } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private service: StudentDataService) { }

  width1 = 0;
  ngOnInit(): void {
    this.width1 = this.service.getData();
    console.log(this.width1)
  }
}
