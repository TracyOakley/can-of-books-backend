'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book.js');

// connect Mongoose to our MongoDB
mongoose.connect(process.env.DB_URL);

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/books', getBooks);
app.post('/books', postBooks);
app.delete('/books/:id', deleteBooks);
app.put('/books/:id', putBooks);

async function getBooks(req, res, next) {
  try {
    let results = await Book.find();
    res.status(200).send(results);
  } catch(err) {
    next(err);
  }
}

async function postBooks(req, res, next) {
  try {
    // req.body
    // console.log(req.body);
    let createdBook = await Book.create(req.body);
    console.log(createdBook);
    res.send(createdBook);
  } catch(err) {
    next(err);
  }
}

async function deleteBooks(req, res, next) {
  try {
    console.log(`${req.params.title} deleted`);
    // Do not assume that you will response:
    await Book.findByIdAndDelete(req.params.id);
    res.send('Book deleted');
  } catch(err) {
    next(err);
  }
}

async function putBooks(req, res, next) {
  try {
    let id = req.params.id;
    let updatedBookData = req.body;
    // first parameter: ID of the thing in the DB
    // second parameter: updated data
    // third parameter: options object (please replace the entire thing in the DB with this new thing)
    let updatedBook = await Book.findByIdAndUpdate(id, updatedBookData, { new: true, overwrites: true });
    res.status(200).send(updatedBook);
  } catch (err) {
    next(err);
  }
}

app.get('/', (request, response) => {
  response.send('test request received')
})

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
