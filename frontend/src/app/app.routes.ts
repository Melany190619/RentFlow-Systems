
import { Routes } from '@angular/router';

// Importamos el componente de la pantalla de inicio de sesión.
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    // Dirección que escribiremos en el navegador.
    path: 'login',

    // Componente que Angular mostrará al visitar /login.
    component: Login
  },
  {
    // Si entramos a la raíz, redirigimos al login.
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
