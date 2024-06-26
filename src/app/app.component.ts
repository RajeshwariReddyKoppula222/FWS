import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EmployeeListComponent]
})
export class AppComponent {
  title = 'Employeee Management';
  id: any = 8;
  constructor(private route: Router) {}

  searchById(){
    this.route.navigate(['employee-details', this.id]);

  }
}
