import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [EmployeeFormComponent],
  providers: [],
  exports: [EmployeeFormComponent],
})
export class EmployeeFormComponentModule {}
