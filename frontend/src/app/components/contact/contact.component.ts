import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { ContactService } from '../../services/contact.service'; // Ensure you have this service created

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

  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  constructor() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted!', this.contactForm.value);
      
      this.contactService.submitForm(this.contactForm.value).subscribe({
        next: (res) => {
          console.log('Response from server:', res);
          alert(res.message || "Thank you for your message!");
          this.contactForm.reset();
        },
        error: () => {
        alert('Something went wrong. Please try again later.');
        }
      });
    } else {
      alert('Please fill out the form before submitting.');
    }
  }
}
