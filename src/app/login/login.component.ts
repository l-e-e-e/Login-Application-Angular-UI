import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: number;
  password: string;
  isLoggedIn: boolean = false;

  

  constructor(private modalService: NgbModal) { 
    // this.username = 0; 
  this.password = ''; 

  }
  
  login() {
    // Implement your login logic here
    // Check the login credentials
    if (this.username === 12345 && this.password === 'admin') {
      // Set isLoggedIn to true
      this.isLoggedIn = true;
      console.log("Admin LoggedIn");

  }
}
}
