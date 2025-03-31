import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { authGuard } from './guards/auth.guard'; // Import the auth guard if needed for other routes
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin',
    loadChildren: () => import('./features/admin-dashboard/admin-dashboard.routes').then(m => m.ADMIN_ROUTES),
    canActivate: [authGuard]
  }
];
