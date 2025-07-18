import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.service';
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

  updateProject(id: string, project: Partial<Project>): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/projects/${id}`, project);
  }

  deleteProject(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/projects/${id}`);
  }

  // Contact messages CRUD operations
  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contact`);
  }

  deleteMessage(id: string): Observable<void> {
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


// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {
//   private apiUrl = `${environment.apiUrl}/admin`;
//   private httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem('token')}`
//     })
//   };

//   constructor(private http: HttpClient) { }

//   // Project CRUD operations
//   getProjects(): Observable<Project[]> {
//     return this.http.get<Project[]>(`${this.apiUrl}/projects`, this.httpOptions);
//   }

//   createProject(project: Omit<Project, 'id'>): Observable<Project> {
//     return this.http.post<Project>(`${this.apiUrl}/projects`, project, this.httpOptions);
//   }

//   updateProject(id: string, project: Partial<Project>): Observable<Project> {
//     return this.http.put<Project>(`${this.apiUrl}/projects/${id}`, project, this.httpOptions);
//   }

//   deleteProject(id: string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/projects/${id}`, this.httpOptions);
//   }

//   // Contact messages CRUD operations
//   getMessages(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/contact`, this.httpOptions);
//   }

//   deleteMessage(id: string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/contact/${id}`, this.httpOptions);
//   }

//   // About section CRUD operations
//   updateAbout(content: string): Observable<any> {
//     return this.http.put(`${this.apiUrl}/about`, { content }, this.httpOptions);
//   }

//   getAbout(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/about`, this.httpOptions);
//   }
// } 