import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.service';
import { CategoryComponent } from '../category/category.component';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  constructor(private service: ProductService) {}

  getProducts() {
    this.service.getProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        console.log("Productos: "+this.products[1])
      },
      error: (err: any) => {
        console.log("error: "+err)
      }
    });
  }
}
