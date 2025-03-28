import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { authGuard } from './guards/auth.guard'; // Import the auth guard if needed for other routes
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin',
    loadComponent: () => 
      import('./features/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent), // Lazy load the admin dashboard component
    canActivate: [authGuard] // Protect the admin route with the auth guard to ensure only authenticated users can access it
    },
];
