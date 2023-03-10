
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { WalletServiceComponent } from './wallet-service.component';
import { WalletServiceRoutingModule } from './wallet-service-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletServiceRoutingModule
   ],
  declarations: [WalletServiceComponent]
})
export class WalletServiceModule {}
