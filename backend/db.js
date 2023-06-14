const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://abanisht558:atrleo@cluster0.uz3jozg.mongodb.net/"


async function connectToMongo() {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to Database');
  
    } catch (error) {
      console.error('Error connecting to the database', error);
    }
  }


module.exports = connectToMongo;

