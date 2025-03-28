import { inject } from '@angular/core'; // Import inject to use dependency injection in a function
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  if (token) {
    return true;
  }
  
  const router = inject(Router); // Inject the Router to navigate if not authenticated
  router.navigate(['/login']);
  return false
};
