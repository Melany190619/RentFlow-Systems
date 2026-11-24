
import { Routes } from '@angular/router';

// Importamos los componentes de nuestras páginas.
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    // Pantalla de inicio de sesión.
    path: 'login',
    component: Login
  },
  {
    // Pantalla principal compartida por los tres roles.
    path: 'home',
    component: Home
  },
  {
    // Al entrar a la raíz, redirigimos al login.
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
