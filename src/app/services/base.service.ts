import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  static readonly API_URL = 'http://141.98.152.255:8001';
  constructor(private http: HttpClient) {}

  public post(
    endpoint: string,
    body: any,
    needSession: boolean = false
  ): Observable<any> {
    let headers = new HttpHeaders({});
    if (needSession) {
      headers = headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('sessionToken')
      );
    }
    let options = {
      headers: headers,
    };
    return this.http
      .post<any>(BaseService.API_URL + endpoint, body, options)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(false);
        })
      );
  }

  public get(
    endpoint: string,
    body: any,
    needSession: boolean = false
  ): Observable<any> {
    let headers = new HttpHeaders({});
    if (needSession) {
      headers = headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('sessionToken')
      );
    }
    console.log(headers);

    let options = {
      headers: headers,
    };
    return this.http.get<any>(BaseService.API_URL + endpoint, options).pipe(
      catchError((err) => {
        console.log(err);
        return of(false);
      })
    );
  }

  public getFile(
    endpoint: string,
    body: any,
    needSession: boolean = false
  ): Observable<any> {
    let headers = new HttpHeaders({ 'content-type': 'application/pdf' });
    if (needSession) {
      headers = headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('sessionToken')
      );
    }
    console.log(headers);

    let options = {
      headers: headers,
    };
    return this.http.get<any>(BaseService.API_URL + endpoint, options).pipe(
      catchError((err) => {
        console.log(err);
        return of(false);
      })
    );
  }
}
