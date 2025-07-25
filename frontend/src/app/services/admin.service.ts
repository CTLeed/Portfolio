import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.models';
import { environment } from '../../environments/environment'; // Adjust the import based on your environment setup

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = `${environment.apiUrl}/admin`;

  constructor(private http: HttpClient) {}

  // Project CRUD operations
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  createProject(project: Omit<Project, 'id'>): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}/projects`, project);
  }

  updateProject(id: number, project: Partial<Project>): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/projects/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/projects/${id}`);
  }

  // Contact messages CRUD operations
  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contact`);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/contact/${id}`);
  }

  // About section CRUD operations
  updateAbout(content: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/about`, { content });
  }

  getAbout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/about`);
  }
}