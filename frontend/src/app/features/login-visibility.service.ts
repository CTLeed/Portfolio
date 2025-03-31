import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginVisibilityService {
  isLoginVisible = signal(false); // Signal to track the visibility of the login form

  showLogin() {
    this.isLoginVisible.set(true); // Set the signal to true to show the login form
  }

  hideLogin() {
    this.isLoginVisible.set(false); // Set the signal to false to hide the login form
  }

}
