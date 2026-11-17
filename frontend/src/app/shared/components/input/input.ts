import {
  Component,
  input,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',

  // Registramos nuestro componente como un control de formulario.
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Input),
      multi: true
    }
  ]
})
export class Input implements ControlValueAccessor {

  // Propiedades que ya teníamos.
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');
  name = input<string>('');
  icon = input<'user' | 'lock' | 'none'>('none');

  // Valor actual del campo.
  value = '';

  // Indica si el campo está deshabilitado.
  disabled = false;

  // Angular asignará estas funciones.
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Angular utiliza este método para escribir un valor en el campo.
  writeValue(value: string | null): void {
    this.value = value ?? '';
  }

  // Registra la función que notificará cambios de valor.
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Registra la función que notificará cuando se toque el campo.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Permite habilitar o deshabilitar el campo.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Se ejecutará cuando el usuario escriba.
  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.value = inputElement.value;
    this.onChange(this.value);
  }

}
