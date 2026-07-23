import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  template: `
    <div class="page">
      <h1>🏠 Welcome Home!</h1>
      <p>This is the <strong>Home Page</strong> of our Angular Routing demo.</p>
      <div class="cards">
        <div class="card"><h3>📦 Products</h3><a routerLink="/products" class="btn">Go to Products</a></div>
        <div class="card"><h3>📞 Contact</h3><a routerLink="/contact" class="btn">Contact Us</a></div>
        <div class="card"><h3>ℹ️ About</h3><a routerLink="/about" class="btn">About Us</a></div>
      </div>
    </div>`,
  styles: [`.page{animation:fadeIn .3s ease;} @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}} h1{color:#3f51b5;} .cards{display:flex;gap:20px;flex-wrap:wrap;margin-top:20px;} .card{flex:1;min-width:180px;border:1px solid #e0e0e0;border-radius:8px;padding:20px;box-shadow:0 2px 4px rgba(0,0,0,0.08);} h3{color:#e91e63;margin-top:0;} .btn{display:inline-block;padding:8px 16px;background:#3f51b5;color:white;text-decoration:none;border-radius:4px;margin-top:8px;}`]
})
export class HomeComponent { }
