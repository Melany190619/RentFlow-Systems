import { Component, input, output } from '@angular/core';

// Datos necesarios para mostrar una actividad.
export interface Task {
  id: number;
  title: string;
  time: string;
  address: string;
  equipment: string;
  type: 'delivery' | 'pickup';
  completed: boolean;
}

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCard {

  task = input.required<Task>();

  // Notificamos al componente padre qué tarea se completó.
  taskCompleted = output<number>();

  markAsCompleted(): void {
    if (!this.task().completed) {
      this.taskCompleted.emit(this.task().id);
    }
  }

}
