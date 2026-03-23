import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  task: Partial<Task> = {
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Medium'
  };

  constructor(private service: TaskService, private router: Router) {}

  submit(): void {
    if (!this.task.title) return;
    this.service.addTask(this.task as Task);
    this.router.navigate(['/tasks']);
  }
}
