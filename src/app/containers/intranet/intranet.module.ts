import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntranetPageRoutingModule } from './intranet-routing.module';

import { IntranetPage } from './intranet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntranetPageRoutingModule
  ],
  declarations: [IntranetPage]
})
export class IntranetPageModule {}
