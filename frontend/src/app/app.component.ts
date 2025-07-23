import { Component, inject, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  private router = inject(Router);
  scrollProgress = 0;
  private ticking = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScrollProgress();
    }
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  get isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.ticking && isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => {
        this.updateScrollProgress();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  private updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    this.scrollProgress = Math.min(Math.max(scrollPercent, 0), 100);
  }
}
