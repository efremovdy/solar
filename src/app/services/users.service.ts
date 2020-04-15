import { Injectable } from '@angular/core';
import { users } from 'mock/mates.json';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class UsersService {
  public users$: BehaviorSubject<User[]>;
  private users: User[] = [];

  constructor() {
    const usersArray = users.map(u => u = new User(u));
    this.users = usersArray;
    this.users$ = new BehaviorSubject<User[]>(this.users || []);
  }

  getUserByGuid(guid: string) {
    return this.users.filter(u => u.guid === guid)[0];
  }

  updateUser(user: User) {
    this.users = this.users.map(u => {
      if (u.guid === user.guid) {
        u = user;
      }
      return u;
    });
    this.users$.next(this.users);
  }

  createUser(user: User) {
    this.users.push(user);
    this.users$.next(this.users);
  }

  deleteUser(guid: string) {
    this.users = this.users.filter(u => u.guid !== guid);
    this.users$.next(this.users);
  }
}
