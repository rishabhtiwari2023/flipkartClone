import { Component, EventEmitter, Output } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private service: StudentDataService) { }
  btnStyle2 = 'btn-default1';
  btnStyle = 'btn-default';
  a = 1


  closeNav() {
    if (this.btnStyle == 'btn-change') {
      this.btnStyle = 'btn-default';
    } else {
      this.a = 2
      this.btnStyle = 'btn-change';
    }
    this.passData1();
    this.passData(4);
  }
  openNav() {
    this.a = 1
    this.btnStyle = "btn-default";
  }
  ab: any;
  @Output()
  notify: EventEmitter<number> = new EventEmitter<number>();
  passData(a: number) {
    this.notify.emit(a);
    this.ab = a;
    this.passData1();
  }
  passData1() {
    this.service.passData1(this.ab);
  }
}
