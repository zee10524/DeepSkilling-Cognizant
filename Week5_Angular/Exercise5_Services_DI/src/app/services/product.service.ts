import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop Pro',    price: 85000, category: 'Electronics', rating: 4.5, inStock: true  },
    { id: 2, name: 'Wireless Mouse',price: 1500,  category: 'Electronics', rating: 4.2, inStock: true  },
    { id: 3, name: 'Keyboard',      price: 2500,  category: 'Electronics', rating: 4.0, inStock: false },
    { id: 4, name: 'Monitor 27"',   price: 22000, category: 'Electronics', rating: 4.7, inStock: true  },
    { id: 5, name: 'Office Chair',  price: 12000, category: 'Furniture',   rating: 4.3, inStock: true  },
    { id: 6, name: 'Standing Desk', price: 25000, category: 'Furniture',   rating: 4.6, inStock: false }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  addProduct(product: Omit<Product, 'id'>): Product {
    const newProduct = { ...product, id: this.products.length + 1 };
    this.products.push(newProduct);
    return newProduct;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }

  getTotalValue(): number {
    return this.products
      .filter(p => p.inStock)
      .reduce((sum, p) => sum + p.price, 0);
  }
}
