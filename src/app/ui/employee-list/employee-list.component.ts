import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: 'employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'Tekst który pojawi się w HTML';
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>(
    'assets/data/employees.json'
  );
  data = [{ name: 'Jacek' }, { name: 'Wojtek' }];
  constructor(private _client: HttpClient) {}
}
