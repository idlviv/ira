import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../../services/validate.service';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,

  ) {}

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    // validateService перевіряє валідність даних
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show(
        'fill all fields',
        {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show(
        'enter valid email',
        {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      return false;
    }

    // підписка на authService.registerUser для реєстрації
  this.authService.registerUser(user)
    .subscribe(data => {
      if (data.success) {
        this.flashMessage.show(
          'Registration successful',
          {
            cssClass: 'alert-success',
            timeout: 3000
          });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(
          'Registration failed',
          {
            cssClass: 'alert-danger',
            timeout: 3000
          });
        this.router.navigate(['/register']);
      }
    },
    error => {
      if (error.status === 401) {
        this.flashMessage.show(
          'Please login',
          {
            cssClass: 'alert-danger',
            timeout: 3000
          });
        this.router.navigate(['/login']);
      }
    });
  }

}
