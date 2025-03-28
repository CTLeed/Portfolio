import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  technologyLogos: { [key: string]: string } = {
    "Angular": "/logos/angular-icon.svg",
    "React": "/logos/react.svg",
    "Node.js": "/logos/node-js.svg",
    "Stripe": "/logos/stripe.svg",
    "MongoDB": "/logos/mongodb.svg",
    "Vercel": "/logos/vercel.svg",
    "AWS": "/logos/aws.svg",
    "Tailwind CSS": "/logos/tailwind.svg",
    "Docker": "/logos/docker.svg",
    "Java": "/logos/java.svg",
    "Spring Boot": "/logos/spring-boot.svg",
    "PostgreSQL": "/logos/postgresql.svg",
    "Express": "/logos/express.svg",
    "GitHub": "/logos/github.svg",
    "MySQL": "/logos/mysql.svg",
    "Geoapify": "/logos/geoapify.svg",
    "GitLab": "/logos/gitlab.svg"
  };
  
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}
