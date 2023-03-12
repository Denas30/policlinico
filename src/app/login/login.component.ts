import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: [ , [Validators.required, Validators.email] ],
      password: [, [Validators.required, Validators.minLength(10)] ],
    });
    console.log('loginForm');

   }

  ngOnInit() {}

  cerrar() {}
  login() {
    this.router.navigate(['intranet/home']);
  }

  forgotPassword() {}

  registrar() {
   this.router.navigate(['auth/register']);
  }
}
