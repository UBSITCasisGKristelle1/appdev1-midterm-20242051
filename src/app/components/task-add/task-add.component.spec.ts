import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskAddComponent } from './task-add.component';
import { TaskService } from '../../services/task.service';

describe('TaskAddComponent', () => {
  let component: TaskAddComponent;
  let fixture: ComponentFixture<TaskAddComponent>;
  let taskService: TaskService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAddComponent, RouterTestingModule, FormsModule],
      providers: [TaskService]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise with default values', () => {
    expect(component.task.status).toBe('Pending');
    expect(component.task.priority).toBe('Medium');
    expect(component.task.title).toBe('');
  });

  it('should NOT submit when title is empty', () => {
    spyOn(taskService, 'addTask');
    component.task.title = '';
    component.submit();
    expect(taskService.addTask).not.toHaveBeenCalled();
  });

  it('should call addTask and navigate when title is provided', () => {
    spyOn(taskService, 'addTask');
    spyOn(router, 'navigate');
    component.task.title = 'Test Task';
    component.submit();
    expect(taskService.addTask).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/tasks']);
  });

  it('should render all form fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')).toBeTruthy();
    expect(compiled.querySelector('#description')).toBeTruthy();
    expect(compiled.querySelector('#dueDate')).toBeTruthy();
    expect(compiled.querySelector('#status')).toBeTruthy();
    expect(compiled.querySelector('#priority')).toBeTruthy();
  });
});
