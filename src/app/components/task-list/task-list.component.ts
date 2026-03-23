import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[];

  constructor(private service: TaskService) {
    this.tasks = this.service.getTasks();
  }

  toggle(id: number): void {
    this.service.toggleStatus(id);
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.service.deleteTask(id);
      this.tasks = this.service.getTasks();
    }
  }
}
