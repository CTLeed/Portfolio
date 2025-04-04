import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Project } from '../../services/project.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  private adminService = inject(AdminService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  projects: Project[] = [];
  messages: any[] = [];
  aboutContent: string = '';
  selectedTab: 'projects' | 'messages' | 'about' = 'projects';
  tabs: ('projects' | 'messages' | 'about')[] = ['projects', 'messages', 'about'];
  projectForm: FormGroup;
  isEditing: boolean = false;
  selectedProject: Project | null = null;

  constructor() {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [''],
      technologies: ['', Validators.required],
      projectUrl: ['']
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.adminService.getProjects().subscribe(projects => {
      this.projects = projects;
    });

    this.adminService.getMessages().subscribe(messages => {
      console.log("Messages from backend: ", messages);
      this.messages = messages;
    });

    this.adminService.getAbout().subscribe(about => {
      this.aboutContent = about.content;
    });
  }

  onSubmitProject(): void {
    if (this.projectForm.valid) {
      const projectData = {
        ...this.projectForm.value,
        technologies: this.projectForm.value.technologies.split(',').map((tech: string) => tech.trim())
      };

      if (this.isEditing && this.selectedProject) {
        this.adminService.updateProject(this.selectedProject.id, projectData).subscribe(() => {
          this.loadData();
          this.resetForm();
        });
      } else {
        this.adminService.createProject(projectData).subscribe(() => {
          this.loadData();
          this.resetForm();
        });
      }
    }
  }

  editProject(project: Project): void {
    this.selectedProject = project;
    this.isEditing = true;
    this.projectForm.patchValue({
      ...project,
      technologies: project.technologies.join(', ')
    });
  }

  deleteProject(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.adminService.deleteProject(id).subscribe(() => {
        this.loadData();
      });
    }
  }

  deleteMessage(id: string): void {
    if (confirm('Are you sure you want to delete this message?')) {
      this.adminService.deleteMessage(id).subscribe(() => {
        this.loadData();
      });
    }
  }

  updateAbout(): void {
    this.adminService.updateAbout(this.aboutContent).subscribe(() => {
      alert('About section updated successfully!');
    });
  }

  resetForm(): void {
    this.projectForm.reset();
    this.isEditing = false;
    this.selectedProject = null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
