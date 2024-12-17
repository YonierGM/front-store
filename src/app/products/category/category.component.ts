import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  
  categories: any[] = [];

  constructor(
    private service: ProductService,
    private filterService: FilterService
  ){

  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.service.getCategories().subscribe({
      next: (res: any) =>{
        this.categories = res;
        console.log(this.categories)
      },
      error: (res: any) => {
        console.log("error: "+res)
      }
    })
  }

  onCategoryChange(event: any): void {
    const category = event.target.value;
    console.log("categoria: "+category)
    this.filterService.categorySelected.emit(category);
  }

}
