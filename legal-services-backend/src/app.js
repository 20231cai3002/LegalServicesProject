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

// after mongoose.connect(...) success path, add seeding:
async function seedLawyersIfEmpty() {
  try {
    const Lawyer = require('./models/lawyer');
    const count = await Lawyer.countDocuments();
    if (count === 0) {
      await Lawyer.create([
        { name: 'Aisha Khan', email: 'aisha@kalawer.com', specialization: 'Family Law', phone: '555-0101' },
        { name: 'Ravi Sharma', email: 'ravi@kalawer.com', specialization: 'Criminal Law', phone: '555-0202' },
        { name: 'Maya Patel', email: 'maya@kalawer.com', specialization: 'Corporate Law', phone: '555-0303' }
      ]);
      console.log('Seeded lawyers collection with sample data.');
    }
  } catch (err) {
    console.error('Error seeding lawyers:', err);
  }
}

// Call this after successful DB connection:
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  seedLawyersIfEmpty();
});

import { useEffect, useState } from 'react';

export default function LawyersList() {
  const [lawyers, setLawyers] = useState([]);
  useEffect(() => {
    fetch('/api/lawyers')
      .then(res => res.json())
      .then(setLawyers)
      .catch(err => console.error('Failed to fetch lawyers', err));
  }, []);

  return (
    <div>
      <h3>Lawyers</h3>
      <ul>
        {lawyers.map(l => (
          <li key={l._id}>
            <strong>{l.name}</strong> — {l.specialization} — {l.email} — {l.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}