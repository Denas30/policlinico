
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule {}