import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center justify-center" [class]="containerClass">
      <div class="animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" 
           [style.width.px]="size" 
           [style.height.px]="size">
      </div>
      <span *ngIf="message" class="ml-3 text-gray-600">{{ message }}</span>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class LoadingComponent {
  @Input() size = 32;
  @Input() message = '';
  @Input() containerClass = 'py-8';
}