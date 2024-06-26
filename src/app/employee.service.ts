import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) 
  { }
  
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:8080/api/employees');
  }

  createmployee(employee: Employee): Observable<Employee>
  {
    return this.httpClient.post<Employee>('http://localhost:8080/api/employee', employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>('http://localhost:8080/api/employee/8');
  }

  udateEmployee(id: number, employee:Employee ):Observable<Employee> {
    return this.httpClient.put<Employee>('http://localhost:8080/api/employee/5', employee);
  }

  deleteEmployee(id: number) : Observable<Object>{
    return this.httpClient.delete('http://localhost:8080/api/employee/6')
  }

}


