import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaslistadoPageRoutingModule } from './consultaslistado-routing.module';

import { ConsultaslistadoPage } from './consultaslistado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaslistadoPageRoutingModule
  ],
  declarations: [ConsultaslistadoPage]
})
export class ConsultaslistadoPageModule {}
