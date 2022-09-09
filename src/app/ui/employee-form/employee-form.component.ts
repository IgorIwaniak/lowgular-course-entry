import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl('Anna', [Validators.required]),
    age: new FormControl('25', [Validators.min(18), Validators.required]),
    salary: new FormControl('5000', [Validators.required]),
  });

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {}
}
