
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const allowedOrigins = [
  'https://campusvault1.netlify.app',
  'http://localhost:5173'
];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());


// Auth routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Protected resource routes
const resourceRoutes = require('./routes/resourceRoutes');
app.use('/api/resources', resourceRoutes);

app.get('/', (req, res) => {
  res.send('CampusVault backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
