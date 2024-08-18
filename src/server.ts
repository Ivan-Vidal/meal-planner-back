import express from 'express';
import mealRoutes from './routes/mealRoutes';
import { initializeDb } from './database';
import helmet from 'helmet';
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(helmet());

app.use(cors());

initializeDb().then((db) => {
  app.use((req, res, next) => {
    (req as any).db = db;
    next();
  });

  app.use('/api', mealRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
