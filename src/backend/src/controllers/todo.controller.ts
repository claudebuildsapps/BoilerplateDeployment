import { Request, Response } from 'express';

// In-memory storage for todos
let todos = [
  { id: '1', title: 'Learn Next.js', completed: false },
  { id: '2', title: 'Build a full-stack app', completed: false },
  { id: '3', title: 'Deploy to production', completed: false }
];

export const getTodos = (_req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    data: todos
  });
};

export const getTodoById = (req: Request, res: Response) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id === id);
  
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found'
    });
  }

  return res.status(200).json({
    success: true,
    data: todo
  });
};

export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({
      success: false,
      message: 'Title is required'
    });
  }
  
  const newTodo = {
    id: Date.now().toString(),
    title,
    completed: false
  };
  
  todos.push(newTodo);
  
  return res.status(201).json({
    success: true,
    data: newTodo
  });
};

export const updateTodo = (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, completed } = req.body;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found'
    });
  }
  
  const updatedTodo = {
    ...todos[todoIndex],
    ...(title !== undefined && { title }),
    ...(completed !== undefined && { completed })
  };
  
  todos[todoIndex] = updatedTodo;
  
  return res.status(200).json({
    success: true,
    data: updatedTodo
  });
};

export const deleteTodo = (req: Request, res: Response) => {
  const id = req.params.id;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found'
    });
  }
  
  todos = todos.filter(todo => todo.id !== id);
  
  return res.status(200).json({
    success: true,
    message: 'Todo deleted successfully'
  });
};