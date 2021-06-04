import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaslistadoPage } from './consultaslistado.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaslistadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaslistadoPageRoutingModule {}
