import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(',').map((s) => s.trim()) || true,
    credentials: true,
  })
);

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'backend', ts: new Date().toISOString() });
});

const port = Number(process.env.PORT) || 3001;
app.listen(port, () => {
  // Intentionally no extra logging beyond startup line
  console.log(`Backend listening on http://localhost:${port}`);
});
