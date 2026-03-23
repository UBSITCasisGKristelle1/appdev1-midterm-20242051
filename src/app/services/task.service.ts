import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Project Documentation',
      description: 'Write comprehensive documentation for the TaskFlow application including API docs and user guide.',
      dueDate: '2025-04-15',
      status: 'In Progress',
      priority: 'High',
      createdAt: new Date('2025-03-10')
    },
    {
      id: 2,
      title: 'Review Code Changes',
      description: 'Review pull requests from the development team and provide feedback on code quality.',
      dueDate: '2025-03-30',
      status: 'Pending',
      priority: 'Medium',
      createdAt: new Date('2025-03-15')
    },
    {
      id: 3,
      title: 'Deploy to Production',
      description: 'Deploy the latest version of TaskFlow to the production server and verify all features are working correctly.',
      dueDate: '2025-04-01',
      status: 'Completed',
      priority: 'High',
      createdAt: new Date('2025-03-01')
    },
    {
      id: 4,
      title: 'Update Dependencies',
      description: 'Update Angular and other npm packages to the latest stable versions.',
      dueDate: '2025-04-20',
      status: 'Pending',
      priority: 'Low',
      createdAt: new Date('2025-03-18')
    }
  ];

  private nextId = 5;

  constructor() {}

  getTasks(): Task[] {
    return [...this.tasks];
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  addTask(task: Partial<Task>): void {
    const newTask: Task = {
      id: this.nextId++,
      title: task.title || '',
      description: task.description || '',
      dueDate: task.dueDate || '',
      status: (task.status as 'Pending' | 'In Progress' | 'Completed') || 'Pending',
      priority: (task.priority as 'Low' | 'Medium' | 'High') || 'Medium',
      createdAt: new Date()
    };
    this.tasks.push(newTask);
  }

  updateTask(id: number, updatedTask: Partial<Task>): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.title = updatedTask.title || task.title;
      task.description = updatedTask.description || task.description;
      task.dueDate = updatedTask.dueDate || task.dueDate;
      task.status = updatedTask.status || task.status;
      task.priority = updatedTask.priority || task.priority;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleStatus(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      if (task.status === 'Pending') {
        task.status = 'In Progress';
      } else if (task.status === 'In Progress') {
        task.status = 'Completed';
      } else {
        task.status = 'Pending';
      }
    }
  }
}
