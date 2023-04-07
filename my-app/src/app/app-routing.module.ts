import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { StudentDataComponent } from './student-data/student-data.component';
// import { LoginComponent } from './dashboard/login/login.component';
import { LoginComponent } from './dashboard/login/login.component';


const routes: Routes = [{
  path: "",

  pathMatch: 'full',
  component: LoginComponent
},
{ path: "login", component: LoginComponent },
{ path: "dashboard", component: StudentDataComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
