import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import propertyRoutes from './routes/property.routes';
import financialRoutes from './routes/financial.routes';
import leadRoutes from './routes/lead.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/financial', financialRoutes);
app.use('/api/leads', leadRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Iki Property API running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
