import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersKey = 'users';

  constructor() { }

  getUsers(): any[] {
    const usersString = localStorage.getItem(this.usersKey);
    if (usersString) {
      return JSON.parse(usersString);
    }
    return [];
  }

  saveUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  deleteAllUsers() {
    localStorage.clear();
  }
  
}
