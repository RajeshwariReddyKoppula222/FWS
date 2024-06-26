import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { routes } from '../app.routes';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, CreateEmployeeComponent],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  employee : Employee =  new Employee;
  id : number;
  component: CreateEmployeeComponent;
  constructor(private empservice :EmployeeService,
    private activatedRoute : ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.empservice.getEmployeeById(this.id).subscribe(data => 
     { this.employee = data;},
     error=> console.log(error)
    )

  }


  onSubmit() {
    this.updateEmployee(this.employee, this.id)
  }

  updateEmployee(employee: Employee, id: number) {
    this.empservice.udateEmployee(id, employee)
    .subscribe(data => 
      {
        console.log(data);
        alert("updated Successfilly");
        this.router.navigate(['/employees']);
        // this.component.ShowEmployeList();
    }
  )
  }
}
