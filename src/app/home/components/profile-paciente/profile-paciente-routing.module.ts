import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePacienteComponent } from './profile-paciente.component';


const routes: Routes = [
  {
    path: '',
    component: ProfilePacienteComponent,
    
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePacienteRoutingModule {}