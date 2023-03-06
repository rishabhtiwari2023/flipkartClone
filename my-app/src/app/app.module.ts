import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDataComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
