import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskListComponent } from './task-list.component';
import { TaskService } from '../../services/task.service';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let taskService: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComponent, RouterTestingModule],
      providers: [TaskService]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display tasks from the service', () => {
    expect(component.tasks.length).toBeGreaterThan(0);
  });

  it('should render a table row for each task', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(component.tasks.length);
  });

  it('should call toggleStatus when Toggle button is clicked', () => {
    spyOn(taskService, 'toggleStatus');
    const firstTask = component.tasks[0];
    component.toggle(firstTask.id);
    expect(taskService.toggleStatus).toHaveBeenCalledWith(firstTask.id);
  });

  it('should call deleteTask and refresh list when Delete is confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(taskService, 'deleteTask').and.callThrough();
    const firstId = component.tasks[0].id;
    component.delete(firstId);
    expect(taskService.deleteTask).toHaveBeenCalledWith(firstId);
    expect(component.tasks.find(t => t.id === firstId)).toBeUndefined();
  });

  it('should NOT delete when confirm returns false', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    spyOn(taskService, 'deleteTask');
    component.delete(component.tasks[0].id);
    expect(taskService.deleteTask).not.toHaveBeenCalled();
  });
});
