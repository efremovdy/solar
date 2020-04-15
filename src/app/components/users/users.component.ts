import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: 'users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(
    public usersService: UsersService,
    private router: Router
  ) { }

  public edit(guid: string) {
    this.router.navigate(['/user/', guid]);
  }

  ngOnInit() { }
  ngOnDestroy() { }

  /* private getUsers() {
    this.subscription = this.usersService.getUsers().subscribe();
  } */
}
