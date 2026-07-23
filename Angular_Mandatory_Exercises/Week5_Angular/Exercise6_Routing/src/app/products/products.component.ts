import { Component } from '@angular/core';
@Component({
  selector: 'app-products',
  template: `
    <div class="page">
      <h1>📦 Products</h1>
      <div class="product-grid">
        <div class="product-card" *ngFor="let p of products">
          <div class="product-icon">{{ p.icon }}</div>
          <h3>{{ p.name }}</h3>
          <p class="price">₹{{ p.price | number }}</p>
          <button class="btn-add">Add to Cart</button>
        </div>
      </div>
    </div>`,
  styles: [`.page{animation:fadeIn .3s ease;} @keyframes fadeIn{from{opacity:0}to{opacity:1}} h1{color:#3f51b5;} .product-grid{display:flex;flex-wrap:wrap;gap:16px;} .product-card{border:1px solid #e0e0e0;border-radius:8px;padding:20px;width:160px;text-align:center;box-shadow:0 2px 4px rgba(0,0,0,0.08);} .product-icon{font-size:40px;} h3{margin:8px 0;color:#333;font-size:14px;} .price{color:#e91e63;font-weight:bold;} .btn-add{padding:6px 14px;background:#4caf50;color:white;border:none;border-radius:4px;cursor:pointer;}`]
})
export class ProductsComponent {
  products = [
    { name: 'Laptop',     price: 75000, icon: '💻' },
    { name: 'Phone',      price: 25000, icon: '📱' },
    { name: 'Headphones', price: 3500,  icon: '🎧' },
    { name: 'Camera',     price: 45000, icon: '📷' },
    { name: 'Tablet',     price: 35000, icon: '📟' },
    { name: 'Smartwatch', price: 18000, icon: '⌚' }
  ];
}
