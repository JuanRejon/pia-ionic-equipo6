import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogLoggedPage } from './catalog-logged.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogLoggedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogLoggedPageRoutingModule {}
