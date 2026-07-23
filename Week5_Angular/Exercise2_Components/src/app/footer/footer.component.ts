import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  template: `<footer class="footer"><p>&copy; {{ year }} Angular Exercise 2</p></footer>`,
  styles: [`.footer{background:#333;color:white;text-align:center;padding:10px;position:fixed;bottom:0;width:100%;}`]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
