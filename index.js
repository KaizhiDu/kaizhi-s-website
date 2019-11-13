const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

// init middleware
// we can use req.body
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API RUNNING...'));

app.use('/api/user', require('./routes/api/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));