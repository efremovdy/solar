import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class UsersService {
  private SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.SERVER_URL}/users`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.SERVER_URL}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.SERVER_URL}/users/${user.guid}`, user);
  }
}
