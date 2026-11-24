import { Component, signal, computed } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { SummaryBar, SummaryItem } from '../../shared/components/summary-bar/summary-bar';
import { TaskCard, Task } from '../../shared/components/task-card/task-card';
import { DayCard, AgendaDay } from '../../shared/components/day-card/day-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, SummaryBar, TaskCard, DayCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  userName = signal('José');
  fullName = signal('José M.');
  role = signal('Empleados');

  currentDate = signal('Miércoles, 17 de junio');

  // Datos de prueba mientras se integra la API.
  tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Boda — Salón Primavera',
      time: '9:00 AM',
      address: 'Av. Reforma 120, Centro',
      equipment: '40 sillas Tiffany · 5 mesas redondas',
      type: 'delivery',
      completed: false
    },
    {
      id: 2,
      title: 'Evento — Familia Torres',
      time: '12:30 PM',
      address: 'Calle Robles 44, Jardines',
      equipment: '1 toldo blanco · 60 sillas plegables',
      type: 'delivery',
      completed: false
    },
    {
      id: 3,
      title: 'Convención — Grupo Origen',
      time: '4:00 PM',
      address: 'Hotel Alameda, Av. Juárez 82',
      equipment: '12 mesas redondas · 96 sillas Tiffany',
      type: 'pickup',
      completed: false
    },
    {
      id: 4,
      title: 'Fiesta — Laura Méndez',
      time: '7:30 PM',
      address: 'Paseo del Lago 18, Norte',
      equipment: '2 salas lounge · 4 mesas rectangulares',
      type: 'pickup',
      completed: false
    }
  ]);

  // Separamos las actividades según su tipo y estado.
  deliveries = computed(() =>
    this.tasks().filter(task =>
      task.type === 'delivery' && !task.completed
    )
  );

  pickups = computed(() =>
    this.tasks().filter(task =>
      task.type === 'pickup' && !task.completed
    )
  );

  completedTasks = computed(() =>
    this.tasks().filter(task => task.completed)
  );

  pendingTasks = computed(() =>
    this.tasks().filter(task => !task.completed).length
  );

  // Los contadores se actualizan cuando cambia el arreglo.
  summary = computed<SummaryItem[]>(() => [
    {
      label: 'entregas',
      value: this.deliveries().length
    },
    {
      label: 'recolecciones',
      value: this.pickups().length
    },
    {
      label: 'completadas',
      value: this.completedTasks().length
    }
  ]);


  // Agenda de prueba, después se consultará desde el backend.
  weeklyAgenda = signal<AgendaDay[]>([
    {
      id: 1,
      date: '15 JUN',
      day: 'Lunes',
      status: 'Completado',
      isPast: true,
      tasks: [
        {
          id: 101,
          time: '10:00 AM',
          address: 'Salón Magnolia, Centro',
          equipment: '50 sillas · 6 mesas',
          type: 'delivery'
        }
      ]
    },
    {
      id: 2,
      date: '16 JUN',
      day: 'Martes',
      status: 'Completado',
      isPast: true,
      tasks: [
        {
          id: 102,
          time: '6:30 PM',
          address: 'Av. Universidad 320',
          equipment: '1 toldo · 40 sillas',
          type: 'pickup'
        }
      ]
    },
    {
      id: 3,
      date: '18 JUN',
      day: 'Jueves',
      status: 'Mañana',
      isPast: false,
      tasks: [
        {
          id: 103,
          time: '8:30 AM',
          address: 'Club Campestre, Sur',
          equipment: '80 sillas Tiffany · 10 mesas',
          type: 'delivery'
        },
        {
          id: 104,
          time: '5:00 PM',
          address: 'Calle Fresno 90',
          equipment: '2 salas lounge',
          type: 'pickup'
        }
      ]
    },
    {
      id: 4,
      date: '19 JUN',
      day: 'Viernes',
      status: '1 tarea',
      isPast: false,
      tasks: [
        {
          id: 105,
          time: '11:00 AM',
          address: 'Hotel Central, Reforma',
          equipment: '12 mesas · 100 sillas',
          type: 'delivery'
        }
      ]
    },
    {
      id: 5,
      date: '20 JUN',
      day: 'Sábado',
      status: '2 tareas',
      isPast: false,
      tasks: [
        {
          id: 106,
          time: '9:00 AM',
          address: 'Hacienda Los Pinos',
          equipment: '3 toldos blancos',
          type: 'delivery'
        },
        {
          id: 107,
          time: '8:00 PM',
          address: 'Jardín Las Flores',
          equipment: '8 mesas redondas',
          type: 'pickup'
        }
      ]
    },
    {
      id: 6,
      date: '21 JUN',
      day: 'Domingo',
      status: 'Sin tareas',
      isPast: false,
      tasks: []
    }
  ]);

  completeTask(id: number): void {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: true }
          : task
      )
    );
  }

}

