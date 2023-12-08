import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../basic-tasks';
import { User } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
