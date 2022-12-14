import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogingPageRoutingModule } from './loging-routing.module';

import { LogingPage } from './loging.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogingPageRoutingModule
  ],
  declarations: [LogingPage]
})
export class LogingPageModule {}
