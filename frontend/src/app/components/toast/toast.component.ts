import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container fixed top-4 right-4 z-50 space-y-2">
      <div 
        *ngFor="let toast of toasts$ | async; trackBy: trackByToastId"
        class="toast-item transform transition-all duration-300 ease-in-out"
        [ngClass]="{
          'bg-green-600 border-green-500': toast.type === 'success',
          'bg-red-600 border-red-500': toast.type === 'error',
          'bg-blue-600 border-blue-500': toast.type === 'info'
        }"
      >
        <div class="flex items-center justify-between p-4 rounded-lg shadow-lg border-l-4 text-white min-w-80 max-w-96">
          <div class="flex items-center space-x-3">
            <!-- Success Icon -->
            <svg *ngIf="toast.type === 'success'" class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            
            <!-- Error Icon -->
            <svg *ngIf="toast.type === 'error'" class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
            </svg>
            
            <!-- Info Icon -->
            <svg *ngIf="toast.type === 'info'" class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            
            <span class="text-sm font-medium">{{ toast.message }}</span>
          </div>
          
          <!-- Close Button -->
          <button 
            (click)="removeToast(toast.id)"
            class="ml-4 flex-shrink-0 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .toast-item {
      animation: slideInRight 0.3s ease-out;
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    .toast-container .toast-item:hover {
      transform: scale(1.02);
    }
  `]
})
export class ToastComponent implements OnInit {
  toasts$: Observable<Toast[]>;

  constructor(private toastService: ToastService) {
    this.toasts$ = this.toastService.toasts$;
  }

  ngOnInit() {}

  removeToast(id: string) {
    this.toastService.removeToast(id);
  }

  trackByToastId(index: number, toast: Toast): string {
    return toast.id;
  }
}