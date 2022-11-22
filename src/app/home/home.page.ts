import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private router: Router) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  onGoToHome() {
    this.router.navigate(['home']);
  }

  onGoToContact() {
    this.router.navigate(['contact']);
  }

  onGoToProduits() {
    this.router.navigate(['produits']);
  }

  onGoToBateaux() {
    this.router.navigate(['bateaux']);
  }


  onGoToRecettes() {
    this.router.navigate(['recettes']);
  }

  onGoToRestaurants() {
    this.router.navigate(['restaurants']);
  }
}
