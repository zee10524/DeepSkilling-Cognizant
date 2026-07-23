import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students = [
    { name: 'Alice Johnson', rollNo: 101, course: 'Angular', grade: 'A'  },
    { name: 'Bob Smith',     rollNo: 102, course: 'React',   grade: 'B'  },
    { name: 'Carol White',   rollNo: 103, course: 'Vue.js',  grade: 'A+' }
  ];
}
