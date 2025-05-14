import { Router } from 'express';
import { getExamples, getExampleById } from '../controllers/example.controller';

const router = Router();

router.get('/', getExamples);
router.get('/:id', getExampleById);

export default router;