import express, { Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRoutes, userRoutes } from './routes';
import { verifyToken } from './middlewares';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', verifyToken, userRoutes);

app.get('/', (_, res: Response) => {
  return res.json('Hello world');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT} 🚀🚀🚀`);
});
