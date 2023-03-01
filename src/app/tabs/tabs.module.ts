import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            // loadChildren: '../tab1/tab1.module#Tab1PageModule',
            loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
          },
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            // loadChildren: '../tab2/tab2.module#Tab2PageModule',
            loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
          },
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            // loadChildren: '../tab3/tab3.module#Tab3PageModule',
            loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
export { TabsPage };

