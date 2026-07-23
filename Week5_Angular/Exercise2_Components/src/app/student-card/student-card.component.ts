import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-student-card',
  template: `
    <div class="card">
      <h3>{{ name }}</h3>
      <p><strong>Roll No:</strong> {{ rollNo }}</p>
      <p><strong>Course:</strong> {{ course }}</p>
      <p><strong>Grade:</strong> {{ grade }}</p>
    </div>`,
  styles: [`.card{border:1px solid #ddd;border-radius:8px;padding:16px;margin:10px;width:220px;display:inline-block;box-shadow:2px 2px 6px rgba(0,0,0,0.1);} h3{color:#3f51b5;margin-top:0;}`]
})
export class StudentCardComponent {
  @Input() name: string = '';
  @Input() rollNo: number = 0;
  @Input() course: string = '';
  @Input() grade: string = '';
}
