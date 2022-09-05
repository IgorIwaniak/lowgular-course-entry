import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list-igor',
  template: '<h1>Inaczej</h1>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'Tekst który pojawi się w HTML';
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>(
    'assets/data/employees.json'
  );
  constructor(private _client: HttpClient) {}
}
