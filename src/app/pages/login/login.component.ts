import { Component } from '@angular/core';
import { SessionService } from '../../services/Session/session.service';
import { CustomNavigation } from '../../utils/CustomNavigation';
import { SessionToken } from '../../objects/Session';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private sessionService: SessionService,
    public customNavigation: CustomNavigation
  ) {}
  login(email: string, password: string) {
    console.log(email, password);
    this.sessionService
      .login(email, password)
      .subscribe((res: SessionToken | boolean) => {
        if (typeof res !== 'boolean') {
          console.log(res.token);
          localStorage.setItem('sessionToken', res.token);
          this.customNavigation.navigateTo('/home');
        } else {
          // this.toastr.error('Credenciales Incorrectas');
          console.log('error on login');
        }
      });
  }
}
