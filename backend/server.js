import express from 'express';
const app = express();
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './db.js';
import cors from 'cors';
dotenv.config();

import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js'

connectDb();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use('/api/users', userRoutes);

app.use('/api/tasks', taskRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
