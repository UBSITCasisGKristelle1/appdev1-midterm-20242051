import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
    private router: Router
  ) {
    const id = Number(route.parent?.snapshot.paramMap.get('id'));
    this.task = service.getTaskById(id);
  }

  update(): void {
    if (this.task && this.task.title) {
      this.service.updateTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
