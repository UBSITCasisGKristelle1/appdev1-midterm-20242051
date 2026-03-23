import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskDetailComponent } from './task-detail.component';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Info tab link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    const infoLink = Array.from(links).find(l => l.getAttribute('routerlink') === 'info');
    expect(infoLink).toBeTruthy();
  });

  it('should render the Edit tab link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    const editLink = Array.from(links).find(l => l.getAttribute('routerlink') === 'edit');
    expect(editLink).toBeTruthy();
  });

  it('should render a back link to /tasks', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    const backLink = Array.from(links).find(l => l.getAttribute('routerlink') === '/tasks');
    expect(backLink).toBeTruthy();
  });

  it('should contain a router-outlet for child routes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
