import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ContactForm, ContactFormResponse } from '../models/contact.models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) { }

  submitForm(formData: ContactForm): Observable<ContactFormResponse> {
    return this.http.post<ContactFormResponse>(this.apiUrl, formData);
  }

  getContactForms(): Observable<ContactForm[]> {
    return this.http.get<ContactForm[]>(this.apiUrl);
  }

  deleteContactForm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
