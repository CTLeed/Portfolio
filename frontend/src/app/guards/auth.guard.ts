import { inject } from '@angular/core'; // Import inject to use dependency injection in a function
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if the code is running in a browser environment
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('token'); // Retrieve the token from local storage

    if (token) {
      return true;
    }
  }
  
  const router = inject(Router); // Inject the Router to navigate if not authenticated
  router.navigate(['/login']);
  return false
};
