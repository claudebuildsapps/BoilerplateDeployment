# Todo List Example Application

This document provides details about the Todo List example application that demonstrates how to use this boilerplate for a simple CRUD application.

## Application Overview

The Todo List application allows users to:
- View a list of todos
- Add new todos
- Mark todos as completed
- Delete todos

## Frontend Implementation

The frontend is built with Next.js and uses the following features:
- Client-side React components with hooks
- Environment variables for API configuration
- CSS modules for component styling
- Fetch API for communication with the backend

The main component is in `src/frontend/app/todos/page.tsx` and includes:
- State management with React hooks
- API integration
- Form handling
- Conditional rendering
- Error handling

## Backend Implementation

The backend is built with Express and includes:
- RESTful API endpoints for CRUD operations
- Route configuration in the Express router
- Controller functions for handling requests
- In-memory data store (could be replaced with a database)

Key files:
- `src/backend/src/controllers/todo.controller.ts`: Implementation of CRUD operations
- `src/backend/src/routes/todo.routes.ts`: Route definitions

## API Endpoints

| Method | Endpoint     | Description           |
|--------|-------------|-----------------------|
| GET    | /api/todos  | Get all todos         |
| GET    | /api/todos/:id | Get a specific todo  |
| POST   | /api/todos  | Create a new todo     |
| PUT    | /api/todos/:id | Update a todo        |
| DELETE | /api/todos/:id | Delete a todo        |

## Running the Example

Start both the frontend and backend:

```bash
make dev
```

Access the Todo application at: http://localhost:3000/todos

## Extending the Example

This example can be extended in several ways:
- Add authentication
- Connect to a database (MongoDB, PostgreSQL, etc.)
- Add filtering and sorting
- Add pagination
- Improve the UI with more advanced components
- Add tests

## Learning Points

This example demonstrates several key concepts:
1. Client-server communication
2. State management
3. Form handling
4. RESTful API design
5. Error handling
6. CSS Modules for styling