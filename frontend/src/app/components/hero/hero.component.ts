import { Component, OnInit, OnDestroy, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  private overlay: HTMLElement | null = null;
  private ticking = false;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.overlay = this.el.nativeElement.querySelector('.background-overlay');
      if (this.overlay) {
        this.updateParallax();
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateParallax();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  updateParallax() {
    if (isPlatformBrowser(this.platformId) && this.overlay) {
      const scrollY = window.scrollY;
      this.renderer.setStyle(this.overlay, 'transform', `translateY(${scrollY * 0.2}px)`);
    }
  }

  ngOnDestroy() {
    // Cleanup if needed
  }
}
