import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Item } from '../../objects/Item';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private baseService: BaseService, private http: HttpClient) {

   }

   getItems(): Observable<Item[]> {
    return this.baseService.get('/items', {}, true).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    )

   }
   addItem(name: string, description: string, price: number, catalog_id: number): Observable<Item | undefined> {
    return this.baseService.post('/item', {name, description, price, catalog_id: 1}, true).pipe(
      catchError((err) => {
        console.log(err);
        return of(undefined);
      })
    )
   }
}
