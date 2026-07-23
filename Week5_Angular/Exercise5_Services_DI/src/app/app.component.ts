import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from './services/product.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  selectedCategory = 'All';
  categories = ['All', 'Electronics', 'Furniture'];
  totalValue = 0;
  showLogs = false;

  newProduct = { name: '', price: 0, category: 'Electronics', rating: 4.0, inStock: true };

  constructor(
    private productService: ProductService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.logger.log('AppComponent initialized');
  }

  loadProducts(): void {
    if (this.selectedCategory === 'All') {
      this.products = this.productService.getAllProducts();
    } else {
      this.products = this.productService.getProductsByCategory(this.selectedCategory);
    }
    this.totalValue = this.productService.getTotalValue();
    this.logger.log(`Loaded ${this.products.length} products`);
  }

  addProduct(): void {
    if (!this.newProduct.name || this.newProduct.price <= 0) return;
    const added = this.productService.addProduct(this.newProduct);
    this.logger.log(`Product added: ${added.name}`);
    this.newProduct = { name: '', price: 0, category: 'Electronics', rating: 4.0, inStock: true };
    this.loadProducts();
  }

  deleteProduct(id: number, name: string): void {
    this.productService.deleteProduct(id);
    this.logger.log(`Product deleted: ${name}`);
    this.loadProducts();
  }

  get logs() { return this.logger.getLogs(); }
  clearLogs() { this.logger.clearLogs(); }
}
