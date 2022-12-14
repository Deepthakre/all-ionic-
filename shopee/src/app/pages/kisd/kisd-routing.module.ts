import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KisdPage } from './kisd.page';

const routes: Routes = [
  {
    path: '',
    component: KisdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KisdPageRoutingModule {}
