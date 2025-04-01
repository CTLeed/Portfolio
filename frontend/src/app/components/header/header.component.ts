import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoginVisibilityService } from '../../features/login-visibility.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private loginVisibility = inject(LoginVisibilityService);

  activeSection: string = 'hero';
  isMenuHidden: boolean = true;
  secretClickCount = 0;
  lastClickTime = 0;
  

  private router = inject(Router);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['hero', 'about', 'projects', 'contact'];

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          this.activeSection = section;
        }
      }
    }
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  handleSecretClick() {
    const now = Date.now();

    if (now - this.lastClickTime < 600) {
      this.secretClickCount++;
      console.log('Secret click detected! Count:', this.secretClickCount);
    } else {
      this.secretClickCount = 1;
    }

    this.lastClickTime = now;

    if (this.secretClickCount >= 5) {
      this.secretClickCount = 0;
      this.router.navigate(['/login']);
    }
  }

  get isLoginVisible(): boolean {
    return this.loginVisibility.isLoginVisible();
  }


}
