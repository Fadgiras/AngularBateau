import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { CartService, Product } from './../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../../pages/cart-modal/cart-modal.page';

import { Router } from '@angular/router';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Message } from '../../services/data.service';
import '../../../zone-flags';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

  // toggleDarkMode() {
  //   this.themeService.toggleAppTheme()
  // }
}
