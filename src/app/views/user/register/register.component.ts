import { Component, ContentChild, ViewChild } from '@angular/core';

import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    
    `
    .height{
      height: 40vh;
    }

    .centerPosition{
      text-align:center;
    }
    .registerButton{
      
      margin:15px;
      color: white;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.43);
      border: transparent;
      height: 15vh;
      width: 25vh;
    }
    .nextButton{
      color: #fff;
      background-color: #73236b;
      border-color: #73236b;
      border-radius:50px;
      border: transparent;
      height: 30px;
     
    }

    /* #spacer{
      width:20%;
    } */
    
  
    `
  ]
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm;
  buttonDisabled = false;
  buttonState = '';
  showPassword = false;
  page: number = 0;



  constructor(
    private notifications: NotificationsService,
    private router: Router) { }

  onSubmit(): void {
    if (this.registerForm.valid && !this.buttonDisabled) {

      this.buttonDisabled = true;
      this.buttonState = 'show-spinner';
      this.nextPage();
      this.buttonDisabled = false;
      this.buttonState = '';

    }
  }
  previousPage() {
    if (this.page < 1) {
      return;
    } else {
      this.page = this.page - 1;
    }
  }
  nextPage() {
    if (this.page > 3) {
      return;
    } else {
      this.page = this.page + 1;
    }

  }
}
