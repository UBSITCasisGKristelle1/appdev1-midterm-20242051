import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css'
})
export class TaskInfoComponent {
  task: Task | undefined;

  constructor(route: ActivatedRoute, service: TaskService) {
    const id = Number(route.parent?.snapshot.paramMap.get('id'));
    this.task = service.getTaskById(id);
  }
}
