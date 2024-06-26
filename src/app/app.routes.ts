import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'newEmployee', component: CreateEmployeeComponent },
    { path: 'update/:id', component:  UpdateEmployeeComponent},
    { path: 'employee-details/:id', component: EmployeeDetailsComponent}


];
