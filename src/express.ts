import express from 'express';
import fingerprintRoutes from './routes/fingerprintRoutes';
import path from 'path';
import fs from 'fs';

const app = express();

app.use(express.json({ limit: '10mb' }));

// Garante que a pasta exista
const fingerprintDir = path.join(__dirname, 'fingerprints');
if (!fs.existsSync(fingerprintDir)) {
  fs.mkdirSync(fingerprintDir);
}

app.use('/api', fingerprintRoutes);

export default app;
