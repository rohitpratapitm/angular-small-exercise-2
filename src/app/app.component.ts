import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  employee: Employee = {name: 'John', id : 2};

   setEmployee() {  
    this.employee.name = 'new name';
    this.employee.id=22;
    }
}
