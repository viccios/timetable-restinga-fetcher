import express from 'express';
import process from 'node:process';
import timetableRouter from './routes/timetable.route.js';

const app = express();

app.use('/api/', timetableRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => `🚀 Server is listening on http://localhost:${PORT}.`);
