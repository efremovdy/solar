import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public users: User[] = [];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getUsers() {
    this.subscription = this.usersService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }
}
