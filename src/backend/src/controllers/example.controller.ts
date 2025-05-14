import { Request, Response } from 'express';

// Mock data
const examples = [
  { id: 1, name: 'Example 1' },
  { id: 2, name: 'Example 2' },
  { id: 3, name: 'Example 3' },
];

export const getExamples = (_req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    data: examples,
  });
};

export const getExampleById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const example = examples.find(ex => ex.id === id);
  
  if (!example) {
    return res.status(404).json({
      success: false,
      message: 'Example not found',
    });
  }

  return res.status(200).json({
    success: true,
    data: example,
  });
};