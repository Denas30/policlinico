import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAppointmentComponent } from './form-appointment.component';


const routes: Routes = [
  {
    path: '',
    component: FormAppointmentComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormAppointmentRoutingModule {}
