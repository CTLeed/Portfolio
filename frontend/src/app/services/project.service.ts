import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  role: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects';

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

  private getFallbackProjects(): Project[] {
    return [
      {
        name: "MustWants",
        description: "Integration of MLS listings to the MongoDB database, integration of Stripe for payment processing, and integration of Geoapify for location services.",
        imageUrl: "MW.jpg",
        projectUrl: 'https://mustwants.com',
        role: "Full Stack Developer",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Vercel", "AWS", "Geoapify", "Tailwind CSS", "Docker"],
      },
      {
        name: "Portfolio Website",
        description: "Personal portfolio website showcasing projects and skills.",
        imageUrl: "portfolio.jpg",
        projectUrl: "",
        role: "Full Stack Developer",
        technologies: ["Angular", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL"],
      },
      {
        name: "Movie Theater Group",
        description: "A website for a movie theater to allow moviegoers to reserve seats and purchase tickets.",
        imageUrl: "theater3.jpg",
        projectUrl: "",
        role: "full stack developer",
        technologies: ["React", "Java", "Spring Boot", "MySQL", "GitHub"],
      },
    ];
  }
}
