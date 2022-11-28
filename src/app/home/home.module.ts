import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { SharedComponentsModule } from "../components/shared-components.module";
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';

@NgModule({
    declarations: [HomePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MessageComponentModule,
        HomePageRoutingModule,
        TabsPageRoutingModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        SharedComponentsModule
    ]
})
export class HomePageModule { }
export class TabsPageModule { }
