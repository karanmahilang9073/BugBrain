import express from 'express';
import cors from 'cors';
import problemRouter from './routes/problemRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend API is running');
});

app.use('/api', problemRouter);

export default app;
