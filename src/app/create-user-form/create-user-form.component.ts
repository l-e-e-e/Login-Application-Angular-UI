import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent{
  @Output() onUserCreated = new EventEmitter<User>();

  userForm: FormGroup;
  // dashboard: any[] = [];

  users: any[] = [];
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

  onSubmit() {
  //   if (this.userForm.valid) {
  //     const user = this.userForm.value as User;
  //     this.onUserCreated.emit(user);
  //     alert('New User created successfully');
  //     this.userForm.reset();

  //     const user: User = this.userForm.value;
  // this.userService.saveUser(user);
  // this.userForm.reset();
  //   }

  if (this.userForm.invalid) {
    alert("invalid details");
    return;
  }
  const user: User = this.userForm.value;
  this.userService.saveUser(user);
  alert("New user created successfully");
  this.onUserCreated.emit(user);
  // this.dashboard.updateUsers();
  // this.updateUsers();
  


  this.userForm.reset();
  console.log(user);
}



// updateUsers() {
//   this.users = this.userService.getUsers();
// }

  }

