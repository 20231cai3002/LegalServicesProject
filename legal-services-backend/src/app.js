const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const clientRoutes = require('./routes/clientRoutes');
const lawyerRoutes = require('./routes/lawyerRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/lawyers', lawyerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});