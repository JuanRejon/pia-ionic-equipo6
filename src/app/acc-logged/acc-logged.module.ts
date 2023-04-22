import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccLoggedPageRoutingModule } from './acc-logged-routing.module';

import { AccLoggedPage } from './acc-logged.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccLoggedPageRoutingModule
  ],
  declarations: [AccLoggedPage]
})
export class AccLoggedPageModule {}
