const mongoose = require('mongoose');

async function databaseConnection () {
    try{
  const connect =await mongoose.connect(process.env.CONNECTION_STRING)
  console.log('Database connected successfully')  
}catch(err) {
    console.error(`Error connecting to the database: ${err}`);
}

}

module.exports = { databaseConnection }