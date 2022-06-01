import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .auth-card{
      background-color: rgba(255,255,255,0.5);
      
    },


    #register{
      
     
      margin-top: 20px;
    }
    #spacer{
      
      
      height:15px;
      width:10px
    },
    .inputColor{
      background-color: #AA767F;
    },
    .form-control{
      background-color: #AA767F;
      color:white
    },

    
    `
  ]
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;


  buttonDisabled = false;
  buttonState = '';

  constructor(
    private notifications: NotificationsService, private router: Router) { }


  onSubmit(): void {
    if (this.loginForm.valid) {
      if (this.buttonDisabled) {

        this.buttonDisabled = true;
        this.buttonState = 'show-spinner';
        ;
      }
    }
  }
}
