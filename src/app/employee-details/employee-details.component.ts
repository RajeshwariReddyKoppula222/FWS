import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{
  empdetails: Employee;
  id: number;
  constructor(private route: ActivatedRoute,
    private empservice: EmployeeService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empservice.getEmployeeById(this.id).subscribe(data=>
      {
        console.log(data);
        this.empdetails = data;}
    )
  }


  // this.emp = 
}
