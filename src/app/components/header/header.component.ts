import { CartService, Product } from './../../services/cart.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../../pages/cart-modal/cart-modal.page';

import { Router } from '@angular/router';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Message } from '../../services/data.service';
import '../../../zone-flags';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public appHeaders = [
    {
      title: 'Accueil',
      url: '/src/app/home',
      loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule),
      icon: 'home'
    },
    // {
    //   title: 'Log In',
    //   url: '/auth/login',
    //   ionicIcon: 'log-in-outline'
    // },
    // {
    //   title: 'Sign Up',
    //   url: '/auth/signup',
    //   ionicIcon: 'person-add-outline'
    // },
    {
      title: 'Nos Produits',
      url: '/src/app/produits',
      ionicIcon: 'log-in-outline'
    },
    {
      title: 'Nos Bateaux',
      url: '/src/app/bateaux',
      ionicIcon: 'person-add-outline'
    },
    {
      title: 'Nos Restaurants',
      url: '/src/app/restaurants',
      ionicIcon: 'log-in-outline'
    },
    {
      title: 'Nos Recettes',
      url: '/src/app/recettes',
      ionicIcon: 'person-add-outline'
    },
    {
      title: 'Contact',
      url: '/src/app/contact',
      ionicIcon: 'person-add-outline'
    }
  ];

  cart: Product[] = [];
  products: Product[] = [];
  cartItemCount!: BehaviorSubject<number>;

  @ViewChild('cart', { static: false, read: ElementRef })
  fab!: ElementRef;

  @Input() title!: string;
  @Input() color: string = 'primary';
  @Input() isModal: boolean = false;
  constructor(private cartService: CartService, private modalCtrl: ModalController, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  addToCart(product: Product) {
    console.log(`add ${product.name} to cart`)
    this.animateCSS('jello');
    this.cartService.addProduct(product);
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  // copied from animate.css github page: https://github.com/daneden/animate.css
  animateCSS(animationName: string, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);


    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }

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
