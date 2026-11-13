import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class Input {
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');
  name = input<string>('');
  icon = input<'user' | 'lock' | 'none'>('none');
}
