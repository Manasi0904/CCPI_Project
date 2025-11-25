import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => res.send('Hello from .env port!'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});