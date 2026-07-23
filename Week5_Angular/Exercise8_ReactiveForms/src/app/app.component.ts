import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName:  ['', Validators.required],
        email:     ['', [Validators.required, Validators.email]],
        phone:     ['', [Validators.required, Validators.pattern('[6-9][0-9]{9}')]]
      }),
      accountInfo: this.fb.group({
        username:        ['', [Validators.required, Validators.minLength(4)]],
        password:        ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, { validators: passwordMatchValidator }),
      preferences: this.fb.group({
        course:     ['', Validators.required],
        experience: ['Beginner'],
        newsletter: [false]
      })
    });
  }

  get pi() { return this.registrationForm.get('personalInfo') as FormGroup; }
  get ai() { return this.registrationForm.get('accountInfo') as FormGroup; }
  get pr() { return this.registrationForm.get('preferences') as FormGroup; }

  hasError(group: FormGroup, field: string, error: string): boolean {
    const ctrl = group.get(field);
    return !!(ctrl?.touched && ctrl.errors?.[error]);
  }

  onSubmit(): void {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.valid) {
      this.submittedData = this.registrationForm.value;
    }
  }

  reset(): void {
    this.registrationForm.reset({ preferences: { experience: 'Beginner', newsletter: false } });
    this.submittedData = null;
  }
}
