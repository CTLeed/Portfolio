import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  showSuccess(message: string, duration = 5000) {
    this.addToast({
      id: this.generateId(),
      message,
      type: 'success',
      duration
    });
  }

  showError(message: string, duration = 5000) {
    this.addToast({
      id: this.generateId(),
      message,
      type: 'error',
      duration
    });
  }

  showInfo(message: string, duration = 5000) {
    this.addToast({
      id: this.generateId(),
      message,
      type: 'info',
      duration
    });
  }

  private addToast(toast: Toast) {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);

    // Auto remove toast after duration
    if (toast.duration && toast.duration > 0) {
      setTimeout(() => {
        this.removeToast(toast.id);
      }, toast.duration);
    }
  }

  removeToast(id: string) {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next(currentToasts.filter(toast => toast.id !== id));
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}