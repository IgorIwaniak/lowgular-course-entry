import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { FooterComponentModule } from './ui/footer/footer.component-module';
import { NavbarComponentModule } from './ui/navbar/navbar.component-module';

const routes: Routes = [
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'create-employee', component: EmployeeFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EmployeeListComponentModule,
    EmployeeServiceModule,
    EmployeeFormComponentModule,
    FooterComponentModule,
    NavbarComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
