require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/utils/db');
const authRoutes = require('./src/routes/authRoutes');
const lessonRoutes = require('./src/routes/lessonRoutes');
const aiRoutes = require('./src/routes/aiRoutes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/ai', aiRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await db.connect();
  console.log(`Server running on port ${PORT}`);
});