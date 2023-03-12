import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntranetPage } from './intranet.page';

const routes: Routes = [
  {
    path: '',
    component: IntranetPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../profile/profile.module').then( m => m.ProfileModule)
      },
      {
        path: 'address',
        loadChildren: () => import('../../home/components/address/address.module').then( m => m.AddressModule)
      },
      {
        path: 'paciente',
        loadChildren: () => import('../../home/components/profile-paciente/profile-paciente.module').then( m => m.ProfilePacienteModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../../home/components/history/history.module').then( m => m.HistoryModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('../../home/components/wallet-service/wallet-service.module').then( m => m.WalletServiceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntranetPageRoutingModule {}
