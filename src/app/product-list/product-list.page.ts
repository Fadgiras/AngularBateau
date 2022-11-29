import { Component, OnInit } from '@angular/core';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor(private data: DataService) {

  }

  ngOnInit() {
  }

  getProducts(): Product[] {
    return this.data.getProducts();
  }

}