import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  template: `
    <div class="page">
      <h1>📞 Contact Us</h1>
      <div *ngIf="!submitted">
        <div class="form-group"><label>Name</label><input [(ngModel)]="name" placeholder="Your name"/></div>
        <div class="form-group"><label>Email</label><input [(ngModel)]="email" type="email" placeholder="Your email"/></div>
        <div class="form-group"><label>Message</label><textarea [(ngModel)]="message" rows="4" placeholder="Your message"></textarea></div>
        <button (click)="submit()" class="btn">Send Message</button>
      </div>
      <div *ngIf="submitted" class="success-msg">
        <h2>✅ Message Sent!</h2>
        <p>Thank you <strong>{{ name }}</strong>! We'll reply to <strong>{{ email }}</strong> soon.</p>
        <button (click)="submitted=false" class="btn">Send Another</button>
      </div>
    </div>`,
  styles: [`.page{animation:fadeIn .3s ease;max-width:500px;} @keyframes fadeIn{from{opacity:0}to{opacity:1}} h1{color:#3f51b5;} .form-group{margin:15px 0;} label{display:block;margin-bottom:5px;color:#555;} input,textarea{width:100%;padding:8px 12px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;} .btn{padding:10px 20px;background:#3f51b5;color:white;border:none;border-radius:4px;cursor:pointer;font-size:15px;} .success-msg{background:#e8f5e9;border-radius:8px;padding:20px;border-left:4px solid #4caf50;} h2{color:#2e7d32;}`]
})
export class ContactComponent {
  name=''; email=''; message=''; submitted=false;
  submit() { if(this.name && this.email) this.submitted=true; }
}
