# TaskFlow - Personal Task Manager

A lightweight, responsive browser-based Task Manager built with Angular 19+ and Bootstrap 5. TaskFlow allows users to create, edit, delete, and manage tasks with priority levels and status tracking.

## Project Overview

**TaskFlow** is a modern web application for managing personal tasks efficiently. The application features a clean, intuitive interface and comprehensive task management capabilities including task creation, editing, status updates, and priority management.

### Key Features

 **Add Tasks** - Create new tasks with title, description, due date, status, and priority  
 **Edit Tasks** - Modify existing task details  
 **Delete Tasks** - Remove tasks with confirmation dialog  
 **Mark Status** - Toggle task status between Pending, In Progress, and Completed  
 **View Tasks** - Browse all tasks in a responsive table format  
**Task Details** - View full task information on a dedicated detail page  
 **Responsive Design** - Fully functional on mobile, tablet, and desktop devices  

## 🛠 Tech Stack

- **Framework**: Angular 19+ with standalone components
- **Language**: TypeScript
- **Styling**: Bootstrap 5, Custom CSS
- **Routing**: Angular Router with child routes
- **State Management**: Angular Service with in-memory storage
- **Build Tool**: Angular CLI

##  Application Structure

```
src/app/
├── components/
│   ├── navbar/                  # Navigation bar with routing links
│   ├── task-list/               # Display all tasks in a table
│   ├── task-add/                # Add new task form
│   ├── task-detail/             # Task detail page with child routes
│   ├── task-info/               # Display task information
│   ├── task-edit/               # Edit existing task form
│   └── not-found/               # 404 page
├── services/
│   └── task.service.ts          # CRUD operations for tasks
├── models/
│   └── task.model.ts            # Task interface definition
├── app.routes.ts                # Route configuration
├── app.config.ts                # Application configuration
├── app.component.ts             # Root component
└── app.component.html           # Root template
```

##  Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd appdev1-midterm-20242051
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200/`

##  Usage

### Adding a Task

1. Click the **"➕ New Task"** button in the navbar
2. Fill in the task details:
   - Title (required)
   - Description (optional)
   - Due Date (optional)
   - Status (Pending, In Progress, Completed)
   - Priority (Low, Medium, High)
3. Click **"✓ Add Task"** to save

### Viewing Tasks

- Navigate to the **"📋 Tasks"** page to see all tasks in a table
- View task count and status overview
- Each task displays title, status, priority, and due date

### Editing a Task

1. Click **"View"** on any task in the task list
2. Navigate to the **" Edit"** tab
3. Modify the task details
4. Click **" Save Changes"** to update

### Deleting a Task

1. Click **"Delete"** button next to any task
2. Confirm the deletion in the confirmation dialog
3. Task will be removed from the list

### Toggling Task Status

1. Click **"Toggle"** button next to any task to cycle through statuses
2. Status updates immediately: Pending → In Progress → Completed → Pending

##  UI Components

### Navbar
- Responsive Bootstrap navbar with hamburger menu on mobile
- Quick access to Tasks and Add Task pages
- Active link highlighting

### Task List Table
- Bootstrap striped/hover table
- Color-coded status badges (Warning: Pending, Primary: In Progress, Success: Completed)
- Priority badges with color coding
- Action buttons for View, Toggle, and Delete

### Forms
- Bootstrap form controls and selects
- Two-way data binding with ngModel
- Form validation
- Responsive layout on mobile devices

### Task Detail Page
- Bootstrap card layout with header
- Navigation tabs for Info and Edit sub-views
- Child routes for switching between views
- Alert for invalid task IDs

## 🔄 Routing

```
/                   → Redirect to /tasks
/tasks              → Task list page
/tasks/new          → Add new task page
/tasks/:id          → Task detail page
/tasks/:id/info     → Task information (child route)
/tasks/:id/edit     → Edit task (child route)
/404                → Page not found
**                  → Wildcard redirect to /404
```

## 📦 Data Model

### Task Interface (7 properties)

```typescript
interface Task {
  id: number;                          
  title: string;                      
  description: string;                 
  dueDate: string;                      
  status: 'Pending' | 'In Progress' | 'Completed';  
  priority: 'Low' | 'Medium' | 'High';              
  createdAt?: Date;                    
}
```

### Seed Data

The application includes 4 sample tasks with:
- Varied status values (Pending, In Progress, Completed)
- All three priority levels (Low, Medium, High)
- Different descriptions and due dates

## 🔧 Service Methods (TaskService)

```typescript
getTasks(): Task[]                      
getTaskById(id: number): Task | undefined 
addTask(task: Partial<Task>): void     
updateTask(id: number, updatedTask: Partial<Task>): void  
deleteTask(id: number): void           
toggleStatus(id: number): void          
```

## 🏗 Building for Production

Build the application for production:

```bash
npm run build
```

The compiled output will be stored in the `dist/` directory.

### Production Server

Run the production build locally:

```bash
npm start -- --configuration=production
```

## 📱 Responsive Design

- **Mobile (375px)**: Hamburger menu, stacked forms, mobile-optimized tables
- **Tablet (768px)**: Responsive grid layout, tablet-friendly navigation
- **Desktop (1200px+)**: Full-featured layout with optimal spacing

## 🧪 Testing

Run unit tests:

```bash
npm test
```

Watch mode for development:

```bash
ng test --watch
```

## 📝 Code Standards

- TypeScript strict mode enabled
- Standalone components with proper imports
- Bootstrap utility classes for styling
- Responsive mobile-first approach
- Clean code with descriptive naming conventions

## 🌐 Live Deployment

**Live URL**: [To be deployed]

The application is ready for deployment to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📄 License

This project is part of an Angular development course assignment.

## 👨‍💻 Author

Created as an Angular midterm project demonstration.

---

**Last Updated**: March 2025  
**Angular Version**: 19.2.0+  
**Bootstrap Version**: 5.3.0+

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
