import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;
  isSubmitting = false;

  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private toastService = inject(ToastService);

  constructor() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      console.log('Form submitted!', this.contactForm.value);
      
      this.contactService.submitForm(this.contactForm.value).subscribe({
        next: (res) => {
          console.log('Response from server:', res);
          this.toastService.showSuccess(res.message || "Thank you for your message! I'll get back to you soon.");
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Contact form error:', error);
          this.toastService.showError('Something went wrong. Please try again later.');
          this.isSubmitting = false;
        }
      });
    } else {
      this.toastService.showError('Please fill out all required fields correctly.');
    }
  }
}
