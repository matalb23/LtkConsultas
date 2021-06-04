import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesglosePage } from './desglose.page';

const routes: Routes = [
  {
    path: '',
    component: DesglosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesglosePageRoutingModule {}
