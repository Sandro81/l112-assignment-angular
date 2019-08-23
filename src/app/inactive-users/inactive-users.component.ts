import { Component, OnInit } from '@angular/core';

import { UsersServiceService } from '../services/users-service.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersServiceService) {}

  ngOnInit () {
    this.users = this.userService.activeUsers;
  }

  onSetToActive(id: number) {
    this.userService = this.onSetToActive(id);
  }
}
