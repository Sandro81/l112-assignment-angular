import { Component, OnInit } from '@angular/core';

import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersServiceService) {}

  ngOnInit () {
    this.users = this.userService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

}
