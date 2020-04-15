import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: 'users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(
    public usersService: UsersService
  ) { }

  ngOnInit() { }
  ngOnDestroy() { }

  /* private getUsers() {
    this.subscription = this.usersService.getUsers().subscribe();
  } */
}
