import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  template: `
    <div class="page">
      <h1>ℹ️ About Us</h1>
      <p>We are passionate developers building Angular applications.</p>
      <h2>Our Team</h2>
      <div class="team">
        <div class="member" *ngFor="let m of team">
          <div class="avatar">{{ m.initials }}</div>
          <h3>{{ m.name }}</h3><p>{{ m.role }}</p>
        </div>
      </div>
    </div>`,
  styles: [`.page{animation:fadeIn .3s ease;} @keyframes fadeIn{from{opacity:0}to{opacity:1}} h1{color:#3f51b5;} h2{color:#e91e63;} .team{display:flex;gap:20px;flex-wrap:wrap;} .member{text-align:center;border:1px solid #eee;border-radius:8px;padding:20px;min-width:140px;} .avatar{width:60px;height:60px;background:#3f51b5;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;margin:0 auto 10px;} h3{margin:0;color:#333;} p{color:#666;font-size:13px;}`]
})
export class AboutComponent {
  team = [
    { name: 'Alice Johnson', role: 'Frontend Dev', initials: 'AJ' },
    { name: 'Bob Smith',     role: 'Backend Dev',  initials: 'BS' },
    { name: 'Carol White',   role: 'UI/UX Design', initials: 'CW' }
  ];
}
