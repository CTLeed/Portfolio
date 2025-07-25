import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginCredentials, LoginResponse, AuthUser } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Initialize user from localStorage if available
    this.loadUserFromStorage();
  }

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    const url = `${this.apiUrl}/login`;
    console.log('🌐 Making login request to:', url);
    console.log('📤 Sending credentials:', credentials);
    
    return this.http.post<LoginResponse>(url, credentials).pipe(
      tap(response => {
        if (response.token && typeof window !== 'undefined') {
          localStorage.setItem('token', response.token);
          // You might want to decode the JWT to get user info
          // For now, just set a basic user object
          const user: AuthUser = {
            id: 1,
            username: credentials.username
          };
          this.currentUserSubject.next(user);
          if (window.localStorage) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }
      })
    );
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    const token = localStorage.getItem('token');
    return !!token;
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  private loadUserFromStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userStr = localStorage.getItem('currentUser');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          this.currentUserSubject.next(user);
        } catch {
          localStorage.removeItem('currentUser');
        }
      }
    }
  }
}
