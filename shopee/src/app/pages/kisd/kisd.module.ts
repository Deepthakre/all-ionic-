import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KisdPageRoutingModule } from './kisd-routing.module';

import { KisdPage } from './kisd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KisdPageRoutingModule
  ],
  declarations: [KisdPage]
})
export class KisdPageModule {}
