import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstname: '',
    lastname: '',
    email: ''
  }
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any; //same name as our form in the HTML

  constructor(private userService: UserService) { //injected the service

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    })

  }

  toggleHide(user: User){
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: NgForm){
    //console.log(value)
    if(!valid){
      console.log("Form somehow not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);

      this.form.reset();
    }
  }
}
