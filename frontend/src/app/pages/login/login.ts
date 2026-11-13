import { Component } from '@angular/core';

// Componentes reutilizables de RentFlow Systems.
import { Input } from '../../shared/components/input/input';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-login',
  standalone: true,

  // Componentes que podemos utilizar en login.html.
  imports: [Input, Button],

  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // Aquí agregaremos posteriormente la lógica del formulario.
}
