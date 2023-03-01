import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauxPageRoutingModule } from './bateaux-routing.module';

import { BateauxPage } from './bateaux.page';
import { Route, RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '../components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: BateauxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauxPageRoutingModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [BateauxPage]
})
export class BateauxPageModule { }
