const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false })); // we can now accept info from req.body

//Define Routes
 app.use('/api/users', require('./routes/users'));
 app.use('/api/cons', require('./routes/cons'));


app.get('/', (req, res) => res.json({msg: 'Welcome to ConGoers!'}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));