import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './address.component';
import { AddressRoutingModule } from './address-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressRoutingModule
  ],
  declarations: [AddressComponent]
})
export class AddressModule {}