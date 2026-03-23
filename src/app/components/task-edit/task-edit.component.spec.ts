import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskEditComponent } from './task-edit.component';
import { TaskService } from '../../services/task.service';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;
  let taskService: TaskService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditComponent, RouterTestingModule, FormsModule],
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

    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the task with id 1', () => {
    expect(component.task).toBeDefined();
    expect(component.task?.id).toBe(1);
  });

  it('should render all edit form fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#editTitle')).toBeTruthy();
    expect(compiled.querySelector('#editDescription')).toBeTruthy();
    expect(compiled.querySelector('#editDueDate')).toBeTruthy();
    expect(compiled.querySelector('#editStatus')).toBeTruthy();
    expect(compiled.querySelector('#editPriority')).toBeTruthy();
  });

  it('should pre-populate the title field with the existing task title', () => {
    const titleInput = fixture.nativeElement.querySelector('#editTitle') as HTMLInputElement;
    expect(titleInput.value).toBe(component.task?.title ?? '');
  });

  it('should call updateTask and navigate on update()', () => {
    spyOn(taskService, 'updateTask');
    spyOn(router, 'navigate');
    component.update();
    expect(taskService.updateTask).toHaveBeenCalledWith(component.task!);
    expect(router.navigate).toHaveBeenCalledWith(['/tasks']);
  });

  it('should NOT call updateTask when title is empty', () => {
    spyOn(taskService, 'updateTask');
    component.task!.title = '';
    component.update();
    expect(taskService.updateTask).not.toHaveBeenCalled();
  });

  it('should show not-found alert when task is undefined', () => {
    component.task = undefined;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.alert-warning')).toBeTruthy();
  });
});
