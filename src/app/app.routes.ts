import { Routes } from '@angular/router';

// Eagerly loaded components
import { HomeComponent }       from './components/home/home.component';
import { TaskListComponent }   from './components/task-list/task-list.component';
import { TaskAddComponent }    from './components/task-add/task-add.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskInfoComponent }   from './components/task-info/task-info.component';
import { TaskEditComponent }   from './components/task-edit/task-edit.component';
import { NotFoundComponent }   from './components/not-found/not-found.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    title: 'TaskFlow – Welcome'
  },

  {
    path: 'home',
    component: HomeComponent,
    title: 'TaskFlow – Welcome'
  },

  {
    path: 'tasks',
    component: TaskListComponent,
    title: 'TaskFlow – My Tasks'
  },

  {
    path: 'tasks/new',
    component: TaskAddComponent,
    title: 'TaskFlow – Add Task'
  },

  {
    path: 'about',
    component: HomeComponent,
    title: 'TaskFlow – About'
  },

  {
    path: 'tasks/:id',
    component: TaskDetailComponent,
    title: 'TaskFlow – Task Detail',
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: TaskInfoComponent,
        title: 'TaskFlow – Task Info'
      },
      {
        path: 'edit',
        component: TaskEditComponent,
        title: 'TaskFlow – Edit Task'
      }
    ]
  },

  { path: '404', component: NotFoundComponent, title: 'TaskFlow – Page Not Found'},

  {path: '**', redirectTo: '404'}

];
