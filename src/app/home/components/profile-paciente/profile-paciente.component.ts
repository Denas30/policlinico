import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-paciente',
  templateUrl: './profile-paciente.component.html',
  styleUrls: ['./profile-paciente.component.scss'],
})
export class ProfilePacienteComponent implements OnInit {

  perfilForm: FormGroup;
  changePassword: FormGroup;

  segmentModel = "editar";

  constructor(private router: Router,
              private formBuilder: FormBuilder,
             ) {


                this.perfilForm = this.formBuilder.group({
                  name: [, [Validators.required, Validators.minLength(20)] ],
                  lastName: [ , [Validators.required, Validators.maxLength(20)] ],
                  email: [ , [Validators.required, Validators.email] ],
                  phone: [ , [ Validators.required, Validators.maxLength(9) ]]
                });

                this.changePassword = this.formBuilder.group({
                  passworActual: [, [Validators.required, Validators.maxLength(10)]],
                  newPassword: [, Validators.required, Validators.maxLength(10)],
                  repeatPassword: [, Validators.required, Validators.maxLength(10)]
                });

              }

  ngOnInit() {

  }

  backHome() {
   this.router.navigate(['intranet/home']);
  }

  segmentChanged(event: any) {
    console.log(this.segmentModel);
    console.log(event);
  }

  changePhoto() {
    console.log('smile');

  }


}
