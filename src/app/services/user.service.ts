import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstname: 'Bob',
        lastname: 'Ross',
        email: 'bob@gmail.com',
        isActive: true,
        registered: new Date('03/05/2014 04:00:25'),
        hide: false
      },
      {
        firstname: 'John',
        lastname: 'Smith',
        email: 'john@gmail.com',
        isActive: false,
        registered: new Date('03/06/1914 07:34:20'),
        hide: true
      },
      {
        firstname: 'Jane',
        lastname: 'Ode',
        email: 'jane@outlook.com',
        isActive: true,
        registered: new Date('07/10/2010 14:40:12'),
        hide: true
      }
    ];
  }

  //makes it async
  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }
}
