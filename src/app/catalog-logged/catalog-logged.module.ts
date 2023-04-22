import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogLoggedPageRoutingModule } from './catalog-logged-routing.module';

import { CatalogLoggedPage } from './catalog-logged.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogLoggedPageRoutingModule
  ],
  declarations: [CatalogLoggedPage]
})
export class CatalogLoggedPageModule {}
