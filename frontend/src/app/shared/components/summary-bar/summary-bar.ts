import { Component, input } from '@angular/core';

// Estructura de cada indicador del resumen.
export interface SummaryItem {
  label: string;
  value: number;
}

@Component({
  selector: 'app-summary-bar',
  standalone: true,
  imports: [],
  templateUrl: './summary-bar.html',
  styleUrl: './summary-bar.css'
})
export class SummaryBar {

  items = input<SummaryItem[]>([]);

}
