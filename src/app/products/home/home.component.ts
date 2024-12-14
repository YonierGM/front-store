import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CategoryComponent } from '../category/category.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, CategoryComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
