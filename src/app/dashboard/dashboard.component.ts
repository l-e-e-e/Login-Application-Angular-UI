import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  showCreateUserForm: boolean = false;
  users: User[] = [];

  openCreateUserForm() {
    this.showCreateUserForm = true;
  }

  onUserCreated(user: User) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.showCreateUserForm = false;
    
  }
 
 
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  deleteAllUsers(): void {
    this.userService.deleteAllUsers();
    this.users = [];
  }
  // updateUsers() {
  //   this.users = this.userService.getUsers();
  // }

 
}
