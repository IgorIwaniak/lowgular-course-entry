import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesFacesComponentModule } from './ui/employees-faces/employees-faces.component-module';
import { FacesComponentModule } from './ui/faces/faces.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeesFacesComponentModule,
    FacesComponentModule,
    EmployeeServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
