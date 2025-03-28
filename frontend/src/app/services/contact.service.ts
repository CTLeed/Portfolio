import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact'; // Example API endpoint

  constructor(private http: HttpClient) { }

  submitForm(formData: { name: string, email: string, message: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
