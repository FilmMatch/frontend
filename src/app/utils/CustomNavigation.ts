import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CustomNavigation {
  constructor(private router: Router) {}

  public navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
