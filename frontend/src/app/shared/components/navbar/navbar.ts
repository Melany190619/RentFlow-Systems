
import { Component, input, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  // Información del usuario recibida desde el componente padre.
  userName = input<string>('José M.');
  role = input<string>('Empleado');

  // Generamos las iniciales automáticamente.
  initials = computed(() =>
    this.userName()
      .trim()
      .split(/\s+/)
      .map(word => word.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase()
  );

  // Opciones de navegación.
  navItems = input([
    { label: 'Inicio', route: '/home', icon: 'home' },
    { label: 'Nueva renta', route: '/nueva-renta', icon: 'plus' },
    { label: 'Pedido', route: '/pedido', icon: 'cart' }
  ]);

}
