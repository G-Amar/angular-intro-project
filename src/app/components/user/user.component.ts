import { Component, OnInit } from "@angular/core";

import { User } from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
  //properties (props)
  user!: User; //have to add the !due to strict typing

  //methods
  constructor(){ //use to inject dependencies

  }

  ngOnInit(): void {
    this.user = {
      firstname: 'Bob',
      lastname: 'Ross',
      email: 'bob@ross.com'
    }
  }

  //use onInit for AJAX calls and such

  //can modify the props directly in these methods
}