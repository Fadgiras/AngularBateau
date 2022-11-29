import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Product {
  id: number,
  name: string,
  category: number,
  price: number,
  unit: string,
  availability: boolean,
  sale: boolean,
  discount: number,
  comments: string,
  owner: string,
  amount: number
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  public data: Product[] = [
    {
      id: 12,
      name: "Aile de raie",
      category: 0,
      price: 10.0,
      unit: "kg",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Pêche à la corde",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 9,
      name: "Araignées",
      category: 2,
      price: 7.0,
      unit: "kg",
      availability: false,
      sale: false,
      discount: 0.0,
      comments: "Hors saison,  pêche aux casiers",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 3,
      name: "Bar de ligne",
      category: 0,
      price: 30.0,
      unit: "kg",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Plus de 1.5kg le poisson",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 2,
      name: "Bar de ligne portion",
      category: 0,
      price: 10.0,
      unit: "pièce",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Environ 550-700g la pièce",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 10,
      name: "Bouquets cuits",
      category: 1,
      price: 8.0,
      unit: "100g",
      availability: false,
      sale: false,
      discount: 0.0,
      comments: "Hors saison, pêche à l'épuisette",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 1,
      name: "Filet Bar de ligne",
      category: 0,
      price: 7.0,
      unit: "2 filets",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "environ 300g",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 5,
      name: "Filet Julienne",
      category: 0,
      price: 19.0,
      unit: "kg",
      availability: false,
      sale: false,
      discount: 0.0,
      comments: "Pêche à la corde",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 7,
      name: "Huitres N°2 St Vaast",
      category: 1,
      price: 9.5,
      unit: "Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 8,
      name: "Huitres N°2 St Vaast",
      category: 1,
      price: 38.0,
      unit: "4 Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 13,
      name: "Huîtres N°2 OR St Vaast",
      category: 1,
      price: 12.0,
      unit: "Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or Salon Agriculture",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 14,
      name: "Huîtres N°2 OR St Vaast",
      category: 1,
      price: 24.0,
      unit: "2 Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or salon agriculture",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 15,
      name: "Huîtres N°2 OR St Vaast",
      category: 1,
      price: 48.0,
      unit: "4 Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or salon agriculture",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 16,
      name: "Huîtres N°2 St Vaast",
      category: 1,
      price: 19.0,
      unit: "2 Dz",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 4,
      name: "Lieu jaune de ligne",
      category: 0,
      price: 12.0,
      unit: "kg",
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Environ 550-700g la portion",
      owner: "tig",
      amount: 0.0
    },
    {
      id: 6,
      name: "Moules de pêche",
      category: 1,
      price: 7.0,
      unit: "kg",
      availability: true,
      sale: true,
      discount: 5.0,
      comments: "",
      owner: "tig",
      amount: 0.0
    }
  ];

  private cart: Product[] = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts(): Product[] {
    return this.data;
  }

  getCart(): Product[] {
    console.log("this.cart: ", this.cart);
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  addProduct(product: Product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
      console.log(`product ${product.name} pushed to cart`);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product: Product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product: Product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
