
import { Component } from '@angular/core';

// Herramientas para trabajar con formularios reactivos.
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

// Componentes reutilizables.
import { Input } from '../../shared/components/input/input';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Input, Button, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Formulario de inicio de sesión.
  loginForm = new FormGroup({

    // Campo de usuario o correo electrónico.
    usuario: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    // Campo de contraseña.
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })

  });

  // Se ejecutará cuando el usuario intente iniciar sesión.
  onSubmit(): void {

    // Comprobamos si el formulario es inválido.
    if (this.loginForm.invalid) {

      // Marcamos todos los campos como tocados.
      this.loginForm.markAllAsTouched();

      // Detenemos la ejecución.
      return;
    }
  }

}
