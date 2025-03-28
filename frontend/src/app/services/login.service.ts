import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // Example API endpoint for login

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<{token: string}> {
    // Send a POST request to the login API with the credentials
    return this.http.post<{token: string }>(this.apiUrl, null, {
      params: credentials
    });
    // The response should include a token or some form of authentication upon successful login
  }
}
