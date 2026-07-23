import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1>{{ appTitle }}</h1>
      <nav><a href="#">Home</a> | <a href="#">About</a></nav>
    </header>`,
  styles: [`.header{background:#3f51b5;color:white;padding:15px 20px;} h1{margin:0;} a{color:white;text-decoration:none;margin:0 8px;}`]
})
export class HeaderComponent {
  appTitle = 'Angular Components Demo';
}
