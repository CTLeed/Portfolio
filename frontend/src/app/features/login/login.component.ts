import { Component, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms'; // Import ReactiveFormsModule for form handling
import { Router } from '@angular/router'; // Import Router for navigation
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder); // Inject FormBuilder for creating the form
  private loginService = inject(LoginService); // Inject LoginService for handling login logic
  private router = inject(Router); // Inject Router for navigation after login
  private platformId = inject(PLATFORM_ID); // Inject PLATFORM_ID to check if the platform is browser

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]], // Username field with validation
    password: ['', [Validators.required, Validators.minLength(6)]] // Password field with validation
  }); // Initialize the login form with FormBuilder

  error: string | null = null; // Variable to store error messages

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response) => { // Handle successful login response
          localStorage.setItem('token', response.token); // Store the token in local storage
          this.router.navigate(['/admin']); // Redirect to the admin page upon successful login
    },
    error: () => {
        // Handle error response from the login service
          this.error = 'Invalid username or password. Please try again.'; // Set error message
          console.error('Login failed'); // Log to console for debugging
        }
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) { // Check if the platform is browser
      setTimeout(() => {
        document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the login section after view initialization
      });
    }
  }
}
