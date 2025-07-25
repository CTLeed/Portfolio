import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Project } from '../models/project.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl)
      .pipe(
        catchError(() => {
          console.warn("Backend not available, using fallback data.");
          return of(this.getFallbackProjects());
        })
      );
  }

  createProject(project: Omit<Project, 'id'>): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  updateProject(id: number, project: Partial<Project>): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private getFallbackProjects(): Project[] {
    return [
      {
        id: 1,
        name: "MustWants",
        role: "Full Stack Developer",
        description: "Integration of MLS listings to the MongoDB database, integration of Stripe for payment processing, and integration of Geoapify for location services.",
        imageUrl: "MW.jpg",
        projectUrl: 'https://mustwants.com',
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Vercel", "AWS", "Geoapify", "Tailwind CSS", "Docker", "GitLab"],
      },
      {
        id: 2,
        name: "Portfolio Website",
        role: "Full Stack Developer",
        description: "Personal portfolio website showcasing projects and technologies.",
        imageUrl: "portfolio.jpg",
        projectUrl: "",
        technologies: ["Angular", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL", "GitHub"],
      },
      {
        id: 3,
        name: "Movie Theater Group",
        role: "Full Stack Developer",
        description: "A website for a movie theater to allow moviegoers to reserve seats and purchase tickets.",
        imageUrl: "theater3.jpg",
        projectUrl: "",
        technologies: ["React", "Java", "Spring Boot", "MySQL", "GitHub"],
      },
    ];
  }
}
