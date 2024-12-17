import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
      id: number,
      name: string,
      image: string,
      creationAt: Date,
      updatedAt: Date
  };
  images: [];
}

@Injectable({
  providedIn: 'root', // No requiere módulos con la nueva sintaxis.
})
export class ProductService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}products`).pipe(
      map((products: any[]) =>
        products.filter(product =>
          ['Clothes', 'Electronics', 'Change title', 'Shoes', 'Miscellaneous'].includes(product.category.name)
        )
      )
    );
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}categories`).pipe(
      map((categories: any[]) =>
        categories.filter(category =>
          ['Clothes', 'Electronicss', 'Change title', 'Shoes', 'Miscellaneous'].includes(category.name)
        )
      )
    );
  }
  
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl+'products'}/${id}`);
  }
  
  getProductsByCategory(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}products?categoryId=${id}`);
  }

  getPaginatedProducts(offset: number, limit: number): Observable<Product[]> {
    const url = `${this.apiUrl}products?offset=${offset}&limit=${limit}`;
    return this.http.get<Product[]>(url);
  }
  
}
