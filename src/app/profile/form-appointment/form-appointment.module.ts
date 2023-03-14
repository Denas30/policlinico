import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAppointmentComponent } from './form-appointment.component';
import { FormAppointmentRoutingModule } from './form-appointment-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAppointmentRoutingModule,
    ReactiveFormsModule
   ],
  declarations: [FormAppointmentComponent]
})
export class FormAppoinmentModule {}