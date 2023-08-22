// index.js
const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('../routes/tasks');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://riazul:Riazul47@cluster0.vwcjc.mongodb.net/mern-ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Define routes for CRUD operations

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

app.use('/api', taskRouter);
app.use(cors());

app.get('/', (req, res)=>{
  res.status(200).send({
    message: "Server connected"
  })
})