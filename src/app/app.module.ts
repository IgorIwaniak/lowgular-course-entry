import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesFacesComponentModule } from './ui/employees-faces/employees-faces.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { FooterComponentModule } from './ui/footer/footer.component-module';
import { NavbarComponentModule } from './ui/navbar/navbar.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeesFacesComponentModule,
    EmployeeServiceModule,
    EmployeeFormComponentModule,
    FooterComponentModule,
    NavbarComponentModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
