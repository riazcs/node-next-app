require('dotenv').config()
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const clean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const taskRouter = require('../routes/taskRoutes');
const app = express();
const cors = require('cors');
const dbConnect = require('../database/db');
const protectedRoutes = require('../routes/protectedRoutes');
const authRoutes = require('../routes/authRoutes');
const api = require("../routes/api");

app.use(morgan("dev"));
app.use(clean());
const port = process.env.PORT || 8001;
app.use(cors());
const limit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: " Too many request"
})


app.use(express.json());
app.listen(port, async () => {
  console.log(`Server is running on port http://localhost:${port}`);
  await dbConnect();
});

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use('/api', taskRouter);
app.use(cors());
app.use('/protected', protectedRoutes);
app.use('/api', authRoutes);
app.use('/api', api);

app.get('/', (req, res) => {
  res.status(200).send({
    message: "Server connected"
  })
})