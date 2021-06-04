import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesglosePageRoutingModule } from './desglose-routing.module';

import { DesglosePage } from './desglose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesglosePageRoutingModule
  ],
  declarations: [DesglosePage]
})
export class DesglosePageModule {}
