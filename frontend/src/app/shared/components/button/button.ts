
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  label = input<string>('Aceptar');

  type = input<'button' | 'submit'>('button');

  disabled = input<boolean>(false);

  variant = input<'primary' | 'secondary'>('primary');
}
