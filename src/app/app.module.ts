import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesFacesComponentModule } from './ui/employees-faces/employees-faces.component-module';
import { FacesComponentModule } from './ui/faces/faces.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { ProjectServiceModule } from './services/project.service-module';
import { ProjectService } from './services/project.service';
import { EmployeeService } from './services/employee.service';
import { ProjectComponentModule } from './ui/project/project.component-module';

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
    ProjectServiceModule,
    ProjectComponentModule,
  ],

  providers: [ProjectService, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
