import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HOMEPageRoutingModule } from './home-routing.module';

import { HOMEPage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HOMEPageRoutingModule
  ],
  declarations: [HOMEPage]
})
export class HOMEPageModule {}
