import { Router } from 'express';
import exampleRoutes from './example.routes';
import todoRoutes from './todo.routes';

const router = Router();

router.use('/examples', exampleRoutes);
router.use('/todos', todoRoutes);

export default router;