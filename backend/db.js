const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://abanisht558:atrleo@cluster0.uz3jozg.mongodb.net/enotebook"


async function connectToMongo() {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to database sucessfully  ');
  
    } catch (error) {
      console.error('Error connecting to the database', error);
    }
  }


module.exports = connectToMongo; 

