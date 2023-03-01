import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

import { RestaurantsPage } from './restaurants.page';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsPageRoutingModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [RestaurantsPage]
})
export class RestaurantsPageModule { }
