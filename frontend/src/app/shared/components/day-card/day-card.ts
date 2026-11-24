import { Component, input } from '@angular/core';

export interface AgendaTask {
  id: number;
  time: string;
  address: string;
  equipment: string;
  type: 'delivery' | 'pickup';
}

// Cada día puede tener varias actividades.
export interface AgendaDay {
  id: number;
  date: string;
  day: string;
  status: string;
  isPast: boolean;
  tasks: AgendaTask[];
}

@Component({
  selector: 'app-day-card',
  standalone: true,
  imports: [],
  templateUrl: './day-card.html',
  styleUrl: './day-card.css'
})
export class DayCard {

  day = input.required<AgendaDay>();

}

