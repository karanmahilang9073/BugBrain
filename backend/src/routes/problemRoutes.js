import express  from 'express';
import { createProblem, getProblems } from '../controllers/problemController.js';

const problemRouter = express.Router();

problemRouter.post('/create-problem', createProblem)
problemRouter.get('/problems', getProblems)


export default problemRouter;
