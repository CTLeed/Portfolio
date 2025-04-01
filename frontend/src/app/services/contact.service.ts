import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`; // Example API endpoint

  constructor(private http: HttpClient) { }

  submitForm(formData: { name: string, email: string, message: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
