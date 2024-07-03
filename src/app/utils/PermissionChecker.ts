

import { Injectable } from '@angular/core';
import { CustomNavigation } from './CustomNavigation';
@Injectable({
  providedIn: 'root',
})
export class PermisionChecker {
  constructor(    public customNavigation: CustomNavigation) {}

 public base() {
    if (localStorage.getItem('sessionToken') === null) {
      this.customNavigation.navigateTo('/login');
      return;
    }

  }
}
