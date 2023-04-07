import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StudentDataComponent } from './student-data/student-data.component'
// import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: Router) { }
  // @ViewChild('container', { read: ViewContainerRef, static: true })
  // container!: ViewContainerRef;
  // title = 'my-app';
  //  getColor(country:string) { (2)
  //     switch (country) {
  //       case 'UK':
  //         return 'green';
  //       case 'USA':
  //         return 'blue';
  //       case 'HK':
  //         return 'red';
  //     }
  //   }

  // people: any[] = [
  //   {
  //     "name": "Douglas  Pace",
  //     "country": 'UK'
  //   },
  //   {
  //     "name": "Mcleod  Mueller",
  //     "country": 'USA'
  //   },
  //   {
  //     "name": "Day  Meyers",
  //     "country": 'HK'
  //   },
  //   {
  //     "name": "Aguirre  Ellis",
  //     "country": 'UK'
  //   },
  //   {
  //     "name": "Cook  Tyson",
  //     "country": 'USA'
  //   }
  // ];
  ProductName: any = {
    about: 'about',
    studentData: 'studentData'
  }
  // createComponent(componentName: string) {
  //   this.container.clear();
  //   const componentType = this.getComponentType(componentName);
  //   this.container.createComponent(AboutComponent);
  // }
  // getComponentType(name: string) {
  //   let type = AboutComponent;
  //   switch (name) {
  //     case this.ProductName.about: {
  //       type = AboutComponent;
  //       break;
  //     }

  //     case this.ProductName.studentData: {
  //       type = StudentDataComponent;
  //       break;
  //     }
  //   }
  //   return type;
  // }
  ChildData = 0;
  ParentMethod(data: any) {
    this.ChildData = data;
    if (this.ChildData === 1) {
      this.say = StudentDataComponent;
    }
    if (this.ChildData === 2) {
      this.say = AboutComponent;
    }
    if (this.ChildData === 3) {

    }
  }
  data = this.ChildData
  say: any;
  ngOnInit() {
    this.say = StudentDataComponent;
  }
  Student() {

    this.say = StudentDataComponent;
  }
  About() {
    this.say = AboutComponent;
  }


}
