import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPanel = true;
  selectedDay = '';
  activeTab = 'ngif';

  products: Product[] = [
    { id: 1, name: 'Laptop',     price: 75000, category: 'Electronics', inStock: true  },
    { id: 2, name: 'Phone',      price: 25000, category: 'Electronics', inStock: false },
    { id: 3, name: 'Headphones', price: 3500,  category: 'Electronics', inStock: true  },
    { id: 4, name: 'Desk',       price: 12000, category: 'Furniture',   inStock: true  },
    { id: 5, name: 'Chair',      price: 8000,  category: 'Furniture',   inStock: false }
  ];

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  getRowClass(product: Product): string {
    return product.inStock ? 'in-stock' : 'out-of-stock';
  }
}
