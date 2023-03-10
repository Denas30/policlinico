import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePacienteComponent } from './profile-paciente.component';
import { ProfilePacienteRoutingModule } from './profile-paciente-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePacienteRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilePacienteComponent]
})
export class ProfilePacienteModule {}
