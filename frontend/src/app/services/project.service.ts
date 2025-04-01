import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'; // Adjust the import based on your environment setup

export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl)
      .pipe(
        map((projects: Project[]) => projects.map((project: Project) => ({
          id: project.id,
          name: project.name,
          role: project.role,
          description: project.description,
          imageUrl: project.imageUrl,
          projectUrl: project.projectUrl,
          technologies: project.technologies,
        }))),
        catchError(() => {
          console.warn("Backend not available, using fallback data.");
          return of(this.getFallbackProjects());
        })
      );
  }

  private getFallbackProjects(): Project[] {
    return [
      {
        id: "MW",
        name: "MustWants",
        role: "Full Stack Developer",
        description: "Integration of MLS listings to the MongoDB database, integration of Stripe for payment processing, and integration of Geoapify for location services.",
        imageUrl: "MW.jpg",
        projectUrl: 'https://mustwants.com',
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Vercel", "AWS", "Geoapify", "Tailwind CSS", "Docker", "GitLab"],
      },
      {
        id: "portfolio",
        name: "Portfolio Website",
        role: "Full Stack Developer",
        description: "Personal portfolio website showcasing projects and technologies.",
        imageUrl: "portfolio.jpg",
        projectUrl: "",
        technologies: ["Angular", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL", "GitHub"],
      },
      {
        id: "theater3",
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
