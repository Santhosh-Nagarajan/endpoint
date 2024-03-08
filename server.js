const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
const PORT = process.env.PORT || 5000;
 
app.use(bodyParser.json());
 
// Sample data array to simulate a database
let database = [["mani"]];
 
// GET route to retrieve all data
app.get('/api/data', (req, res) => {
  res.json(database);
});
 
// POST route to insert new data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  database.push(newData);
  res.status(201).json({ message: 'Data inserted successfully', data: newData });
});
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
