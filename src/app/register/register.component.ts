import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder ) {

                this.registerForm = this.formBuilder.group({
                  firstName: [ , [Validators.required, Validators.minLength(10)] ],
                  lastName: [, [Validators.required, Validators.minLength(10)] ],
                  dni: [, [Validators.required, Validators.minLength(9)] ],
                  email: [, [Validators.required, Validators.email] ],
                  phoneNumber: [, [Validators.required, Validators.minLength(10)] ],
                  password: [, [Validators.required, Validators.minLength(10)] ],
                  conFirPass: [, [Validators.required, Validators.minLength(10)] ],
                });
   }

  ngOnInit() {}


  backLogin() {
  this.router.navigate(['auth/login']);
  }


  cancelarForm() {
    this.registerForm.reset();
  }
}
