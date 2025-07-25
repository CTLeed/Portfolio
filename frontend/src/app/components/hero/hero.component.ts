import { Component, OnInit, OnDestroy, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
  private overlay: HTMLElement | null = null;
  private ticking = false;
  private typingInterval?: ReturnType<typeof setInterval>;
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  // Typing animation properties
  displayText = '';
  currentText = '';
  hasResume = true; // Set to true when you have a resume.pdf in public folder
  
  private texts = [
    'Software Developer',
    'Full-Stack Engineer', 
    'Backend Specialist',
    'Problem Solver'
  ];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.overlay = this.el.nativeElement.querySelector('.background-overlay');
      if (this.overlay) {
        this.updateParallax();
      }
      this.startTypingAnimation();
    }
  }

  private startTypingAnimation() {
    this.typingInterval = setInterval(() => {
      this.typeText();
    }, 100);
  }

  private typeText() {
    const currentFullText = this.texts[this.currentIndex] ?? '';

    if (!this.isDeleting) {
      // Typing forward
      this.displayText = currentFullText.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentFullText.length) {
        // Finished typing, wait then start deleting
        setTimeout(() => {
          this.isDeleting = true;
        }, 2000);
      }
    } else {
      // Deleting
      this.displayText = currentFullText.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        // Finished deleting, move to next text
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      }
    }

    this.currentText = this.displayText;
    this.cdr.markForCheck();
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
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  onResumeClick(event: Event) {
    // Prevent the default link behavior to avoid double download
    event.preventDefault();
    
    if (isPlatformBrowser(this.platformId)) {
      try {
        // Programmatic download method
        fetch('resume.pdf')
          .then(response => {
            if (!response.ok) {
              throw new Error('Resume file not found');
            }
            return response.blob();
          })
          .then(blob => {
            // Check if the blob has content
            if (blob.size === 0) {
              alert('Resume file appears to be empty. Please contact me directly.');
              return;
            }
            
            // Create download link
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Colby_Leed_Resume.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
          })
          .catch(error => {
            // Fallback: try direct download
            window.open('resume.pdf', '_blank');
          });
      } catch (error) {
        // Fallback: try direct download
        window.open('resume.pdf', '_blank');
      }
    }
  }
}
