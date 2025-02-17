import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateModel } from '../model/create.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<PersonModel[]> {
    return this._httpClient
      .get<ApiResponse<EmployeeResponse[]>>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              name: employeeResponse.employee_name,
              personalNumber: employeeResponse.id,
              img: employeeResponse.profile_image,
              surname: '',
              mail: employeeResponse.employee_name + '@lowgular.io',
            };
          });
        })
      );
  }

  create(employee: CreateModel): Observable<any> {
    return this._httpClient.post(
      'https://dummy.restapiexample.com/api/v1/create',
      employee
    );
  }

  delete(id: string): Observable<void> {
    return this._httpClient
      .delete(`https://dummy.restapiexample.com/api/v1/delete/` + id)
      .pipe(map((_) => void 0));
  }
}
