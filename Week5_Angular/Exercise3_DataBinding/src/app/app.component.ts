import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolation
  title = 'Data Binding in Angular';
  studentName = 'Alice';
  marks = 95;

  // Property Binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled = true;
  btnColor = '#3f51b5';

  // Event Binding
  clickCount = 0;
  message = '';

  // Two-Way Binding
  userName = '';
  email = '';

  // Methods
  onButtonClick(): void {
    this.clickCount++;
    this.message = `Button clicked ${this.clickCount} time(s)!`;
  }

  onMouseOver(): void {
    this.message = 'Mouse is over the box!';
  }

  clearForm(): void {
    this.userName = '';
    this.email = '';
  }
}
