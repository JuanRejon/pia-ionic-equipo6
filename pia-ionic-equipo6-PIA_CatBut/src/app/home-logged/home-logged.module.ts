import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLoggedPageRoutingModule } from './home-logged-routing.module';

import { HomeLoggedPage } from './home-logged.page';
import { PeliculaComponent } from '../components/pelicula/pelicula.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLoggedPageRoutingModule
  ],
  declarations: [HomeLoggedPage, PeliculaComponent]
})
export class HomeLoggedPageModule {}
