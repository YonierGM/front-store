import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get<Product[]>(`${this.apiUrl}products`);
  }

  getCategories(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}categories`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl+'products'}/${id}`);
  }
}
