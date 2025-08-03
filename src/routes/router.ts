import express from 'express';
import itemRoutes from '../Day9/item.route';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../docs/swagger';

const app = express();

app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/items', itemRoutes);

export default app;
