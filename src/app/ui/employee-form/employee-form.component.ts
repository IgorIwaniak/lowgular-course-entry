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
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(18), Validators.required]),
    salary: new FormControl(null, [Validators.required]),
  });

  onButtonClicked(form: { name: string; age: string; salary: string }) {
    alert(
      'user was successfully added to the database  ' +
        'Name:' +
        form.name +
        'Age:' +
        form.age +
        'Salary:' +
        form.salary
    );
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {}
}
