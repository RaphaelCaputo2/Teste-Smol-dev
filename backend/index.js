```javascript
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const raffleRoutes = require('./routes/raffleRoutes');
const db = require('./config/db');

const app = express();

// Connect to database
db.connect();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/raffles', raffleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```