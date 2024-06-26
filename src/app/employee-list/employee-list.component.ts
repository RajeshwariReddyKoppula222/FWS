import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] ;

  constructor(private empService : EmployeeService,
    private router : Router
  ){

  }
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.empService.getEmployeesList().subscribe(
      data => {
        this.employees = data;
      })
  }

  viewEmployee(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

  deleteEmployee(id: number){
    this.empService.deleteEmployee(id).subscribe(
      data=> {
        console.log("data");
        this.getEmployees();
      }
    )
  }
}
// this.employees=[{
  //    "id": 1,
  //    "email": "xyz@gmail.com",
  //    "fname": "xyz",
  //    "lname": ''
  //  },
  // {
  //   "id": 2,
  //    "email": "abc@gmail.com",
  //    "fname": "abc",
  //    "lname": '.'
  // },
  // {
  //   "id": 3,
  //    "email": "abcd@gmail.com",
  //    "fname": "abc",
  //    "lname": 'd'
  // }]