import express from 'express';
import process from 'node:process';
import cors from 'cors';
import timetableRouter from './routes/timetable.route.js';

const app = express();

app.use(cors());
app.use('/api/', timetableRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🚀 Server is listening on http://localhost:${PORT}.`));
