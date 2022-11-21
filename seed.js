'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/book');
mongoose.connect(process.env.DB_URL);



async function seed() {

  // const bookSchema = new Schema({
  //   title: {type: String, required: true},
  //   description: {type: String, required: true},
  //   status: {type: Boolean, required: true},
    
  // });

  await Book.create({
    title: 'Harry Potter and the Sorcerer\'s Stone',
    description: 'The first book in the Harry Potter Series. You\'re a wizard, Harry.',
    status: true
  });
  console.log('Sorcerer\'s Stone was added to the database')

  await Book.create({
    title: 'Harry Potter and the Chamber of Secrets',
    description: 'The second book in the Harry Potter Series.',
    status: true
  });
  console.log('Chamber of Secrets was added to the database');

  await Book.create({
    title: 'Harry Potter and the Prisoner of Azkaban',
    description: 'The third book in the Harry Potter Series.',
    status: true
  });
  console.log('Prisoner of Azkaban was added to the database');


  // close the connection to the database
  mongoose.disconnect();
}

seed();
