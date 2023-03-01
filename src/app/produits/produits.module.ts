import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsPageRoutingModule } from './produits-routing.module';

import { ProduitsPage } from './produits.page';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '../components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: ProduitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsPageRoutingModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [ProduitsPage]
})
export class ProduitsPageModule { }
