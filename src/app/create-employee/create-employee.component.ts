import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent  implements OnInit{

  employee: Employee = new Employee();
  

  constructor( private router: Router,
    private employeeService : EmployeeService
  ){
    
  }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  saveEmployee(){
    this.employeeService.createmployee(this.employee)
    .subscribe(data=> 
      { 
        console.log(data);
        this.ShowEmployeList();
      },
      error => console.error(error));
  }

  ShowEmployeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
 }



}
function ShowEmployeList() {
  throw new Error('Function not implemented.');
}

