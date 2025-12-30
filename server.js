const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// In-memory storage for users
let parentUsers = [];
let schoolUsers = [];

// Routes
app.post('/signup/parent', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }
  const userExists = parentUsers.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  parentUsers.push({ username, password });
  res.json({ message: 'Signup successful' });
});

app.post('/signup/school', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }
  const userExists = schoolUsers.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  schoolUsers.push({ username, password });
  res.json({ message: 'Signup successful' });
});

app.post('/login/parent', (req, res) => {
  const { username, password } = req.body;
  const user = parentUsers.find(user => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Login successful', welcome: `Welcome, ${username}!` });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/login/school', (req, res) => {
  const { username, password } = req.body;
  const user = schoolUsers.find(user => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Login successful', welcome: `Welcome, ${username}!` });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});