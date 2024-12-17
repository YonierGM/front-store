import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.service';
import { CategoryComponent } from '../category/category.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { FilterService } from '../../services/filter.service';


@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  offset: number = 0; // Página inicial
  limit: number = 10; // Número de productos por página
  totalProducts: number = 0; // Total de productos
  currentPage: number = 1;
  totalPages: number = 0;
  pageNumbers: number[] = []; // Array para almacenar números de páginas


  ngOnInit(): void {
    this.getProducts();
    this.getTotalProducts();

    // Escuchar cambios de categoría
    this.filterService.categorySelected.subscribe((category: number) => {
      this.getProductsByCategory(category);
    });
  }

  constructor(
    private service: ProductService,
    private filterService: FilterService
  ) {}

  getTotalProducts(){
    this.service.getProducts().subscribe({
      next: (next)=>{
        this.totalProducts = next.length
        console.log("productos-totales: "+this.totalProducts)

        this.totalPages = Math.ceil(this.totalProducts / this.limit);

        // Generar los números de las páginas
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);

        return this.totalProducts
      },
      error: (error)=>{

      }
    })
  }

  getProducts(): void {
    this.service.getPaginatedProducts(this.offset, this.limit).subscribe({
      next: (res: any) => {
        this.getTotalProducts()
        this.products = res;
        console.log("total: "+this.totalProducts)
        console.log('Productos paginados:', this.products);
      },
      error: (err: any) => {
        console.error('Error al obtener productos paginados:', err);
      }
    });
  }

  goToNextPage(): void {
    if (this.offset + this.limit < this.totalProducts) {
      this.offset += this.limit;
      this.currentPage++;
      this.getProducts();
    }
  }

  goToPreviousPage(): void {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.currentPage--;
      this.getProducts();
    }
  }

  getProductsByCategory(category: number): void {
    console.log("categoria enviada: "+category)
    this.service.getProductsByCategory(category).subscribe({
      next: (res: any) => {
        this.products = res;
        console.log("filtrado: "+this.products[1])
      },
      error: (err: any) => {
        console.log('Error: ' + err);
      }
    });
  }
}
