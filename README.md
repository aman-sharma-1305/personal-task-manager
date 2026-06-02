Personal Task Manager
A full-stack task management application built with React, Node.js, Express, and JSON file storage. This project allows users to create, view, edit, delete, search, filter, and reorder personal tasks through an intuitive and responsive interface. Tasks are persisted in a JSON file, ensuring data remains available after server restarts. The application was developed as a complete CRUD-based full-stack exercise with a focus on clean architecture, usability, and modern UI design.

Exercise Chosen
Exercise 1: Personal Task Manager
The objective was to build a task management application where a user can manage personal tasks without authentication. The application supports task creation, updates, deletion, filtering, search, task completion tracking, overdue detection, JSON-based persistence, and drag-and-drop reordering.

Live Demo
Frontend
Personal Task Manager Frontend
Backend API
Personal Task Manager Backend API

Features
Core Features
Create new tasks
View all tasks
Edit existing tasks
Delete tasks with confirmation
Mark tasks as complete/incomplete
Filter tasks by:
All
Active
Completed
Search tasks by title
Active vs Completed task statistics
Advanced Features
Overdue task highlighting
Drag-and-drop task reordering
JSON file persistence
Responsive mobile-friendly design
Success and error notifications
Loading states
Modern dark-themed UI

Tech Stack
Frontend

Backend

Deployment

Vercel is used to host the React frontend, while Render hosts the Node.js backend API. Both platforms provide automatic deployments from GitHub repositories.

Project Structure

personal-task-manager/

├── backend/
│
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── data/
│   │   └── tasks.json
│   │
│   ├── utils/
│   │   └── fileHelper.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend/
│
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── FilterBar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── .env
│   └── package.json
│
├── README.md
└── .gitignore


How To Run Locally
Prerequisites
Install:
Node.js (v18 or later)
npm

Clone Repository

git clone https://github.com/aman-sharma-1305/personal-task-manager.git

cd personal-task-manager


Backend Setup

cd backend

npm install

npm run dev

Backend runs on:

http://localhost:5001


Frontend Setup
Open a second terminal:

cd frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173


Environment Variables
Create:

frontend/.env

Add:

VITE_API_URL=http://localhost:5001/api/tasks

For production:

VITE_API_URL=https://personal-task-manager-api-cpnt.onrender.com/api/tasks


API Documentation
Base URL
Local

http://localhost:5001/api/tasks

Production

https://personal-task-manager-api-cpnt.onrender.com/api/tasks


Get All Tasks
Request

GET /api/tasks

Response

[
  {
    "id": "123",
    "title": "Learn React",
    "description": "Practice Hooks",
    "dueDate": "2026-06-10",
    "completed": false
  }
]


Create Task
Request

POST /api/tasks

Body

{
  "title": "Learn React",
  "description": "Practice Hooks",
  "dueDate": "2026-06-10"
}

Response

{
  "id": "123",
  "title": "Learn React",
  "description": "Practice Hooks",
  "dueDate": "2026-06-10",
  "completed": false
}


Update Task
Request

PUT /api/tasks/:id

Body

{
  "title": "Learn Advanced React",
  "description": "Context API",
  "dueDate": "2026-06-12",
  "completed": true
}

Response

{
  "message": "Task updated successfully"
}


Delete Task
Request

DELETE /api/tasks/:id

Response

{
  "message": "Task deleted successfully"
}


Reorder Tasks
Request

PUT /api/tasks/reorder

Body

{
  "tasks": [
    {
      "id": "1",
      "order": 0
    },
    {
      "id": "2",
      "order": 1
    }
  ]
}

Response

{
  "message": "Tasks reordered successfully"
}


Key Design Decisions
JSON File Storage
A JSON file was chosen instead of a database to keep the project lightweight and aligned with the assignment requirements.
Component-Based Frontend
The React application is divided into reusable components:
TaskForm
TaskList
TaskCard
SearchBar
FilterBar
This improves maintainability and scalability.
RESTful API
The backend follows REST principles for task management operations.

Testing Checklist
The application was tested for:
Task creation
Task editing
Task deletion
Task completion toggling
Search functionality
Filtering functionality
Drag-and-drop reordering
Responsive layout
Data persistence after refresh
Production deployment

Challenges Faced
Managing state updates after task modifications
Implementing drag-and-drop functionality
Persisting reordered tasks
Connecting deployed frontend and backend services
Handling asynchronous API requests gracefully

Future Improvements
If additional time were available, the following features would be added:
User authentication and authorization
MongoDB or PostgreSQL database integration
Task categories and labels
Priority levels
Due date reminders
Email notifications
User profiles
Dashboard analytics
Dark/Light mode toggle
Real-time updates with WebSockets

Author
Aman Sharma
GitHub:
Aman Sharma GitHub Profile

Submission Links
Repository
GitHub Repository
Live Application
Frontend Deployment (Vercel)
Backend API
Backend Deployment (Render)
This project satisfies all required, recommended, and bonus requirements of the Personal Task Manager exercise.



