import { Component } from '@angular/core';

interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  gender: string;
  course: string;
  agreeTerms: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  formData: RegistrationForm = {
    firstName: '', lastName: '', email: '',
    phone: '', password: '', confirmPassword: '',
    gender: '', course: '', agreeTerms: false
  };
  submittedData: RegistrationForm | null = null;
  courses = ['Angular', 'React', 'Vue.js', 'Node.js', 'Java', 'Python'];

  onSubmit(form: any): void {
    this.submitted = true;
    if (form.valid && this.formData.password === this.formData.confirmPassword && this.formData.agreeTerms) {
      this.submittedData = { ...this.formData };
    }
  }

  resetForm(form: any): void {
    form.resetForm();
    this.submitted = false;
    this.submittedData = null;
    this.formData = {
      firstName: '', lastName: '', email: '',
      phone: '', password: '', confirmPassword: '',
      gender: '', course: '', agreeTerms: false
    };
  }
}
