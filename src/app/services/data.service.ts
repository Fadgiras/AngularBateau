import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

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
  owner: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  public products: Product[] = [
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
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
      owner: "tig"
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getProducts(): Product[] {
    return this.products
  }
  public getProductById(id: number): Product {
    for (const prod of this.products) {
      if (prod.id == id) {
        return prod;
      }
    }
    return this.products[id];
  }
}
