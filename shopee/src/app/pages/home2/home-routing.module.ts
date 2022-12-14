import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HOMEPage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HOMEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HOMEPageRoutingModule {}
