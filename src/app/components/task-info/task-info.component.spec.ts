import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { TaskInfoComponent } from './task-info.component';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

const mockTask: Task = {
  id: 1,
  title: 'Study Angular',
  description: 'Review Angular docs.',
  dueDate: '2026-03-25',
  status: 'Pending',
  priority: 'High'
};

describe('TaskInfoComponent', () => {
  let component: TaskInfoComponent;
  let fixture: ComponentFixture<TaskInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInfoComponent, RouterTestingModule],
      providers: [
        TaskService,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: { snapshot: { paramMap: { get: () => '1' } } }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load task with id 1 from the service', () => {
    expect(component.task).toBeDefined();
    expect(component.task?.id).toBe(1);
  });

  it('should display the task title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(mockTask.title);
  });

  it('should display the task status badge', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Pending');
  });

  it('should display the task priority badge', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('High');
  });

  it('should show not-found alert when task is undefined', () => {
    component.task = undefined;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.alert-warning')).toBeTruthy();
  });
});
