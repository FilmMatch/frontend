import { Observable, catchError, of } from 'rxjs';
import { SessionToken } from '../../objects/Session';
import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private baseService: BaseService) {}

  login(
    username: string,
    password: string
  ): Observable<SessionToken | boolean> {
    return this.baseService
      .post('/login', {
        email: username,
        password: password,
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(false);
        })
      );
  }
  register(
    username: string,
    password: string
  ): Observable<SessionToken | boolean> {
    return this.baseService
      .post('/register', {
        email: username,
        password: password,
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(false);
        })
      );
  }
}
