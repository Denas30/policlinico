
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WalletServiceComponent } from './wallet-service.component';


const routes: Routes = [
  {
    path: '',
    component: WalletServiceComponent,
      
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletServiceRoutingModule {}
