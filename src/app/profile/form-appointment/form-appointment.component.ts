import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styleUrls: ['./form-appointment.component.scss'],
})
export class FormAppointmentComponent implements OnInit {

  formSchedule: FormGroup;

  constructor(private router: Router,
              private formBuilder : FormBuilder) { 

          this.formSchedule = this.formBuilder.group({
            firstName: [, [Validators.required, Validators.minLength(20)] ],
            lastName: [ , [Validators.required, Validators.maxLength(20)] ],
            dni: [ , [Validators.required, Validators.maxLength(10)] ],
            yearOld: [ , [Validators.required, Validators.maxLength(2)] ],
            address: [, [Validators.required, Validators.minLength(30)] ],
            gender : [, [Validators.required, Validators.required]],
            hours : [, [Validators.required, Validators.required]],
            sure : [, [Validators.required, Validators.required]],
            email: [ , [Validators.required, Validators.email] ],
            phone: [ , [ Validators.required, Validators.maxLength(9) ]]
          }); 
  }

  ngOnInit() {}

  backHome() {
  this.router.navigate(['/intranet/profile']);
  }

  cancelarForm() {
    this.formSchedule.reset();
  }

}
