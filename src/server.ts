import express from 'express';
import mealRoutes from './routes/mealRoutes';
import { initializeDb } from './database';
import helmet from 'helmet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger.json';


const app = express();
app.use(express.json());

app.use(helmet());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

initializeDb().then((db) => {
  app.use((req, res, next) => {
    (req as any).db = db;
    next();
  });

  app.use('/v1', mealRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
