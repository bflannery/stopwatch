const mongoose = require('mongoose');

const dbName = 'stopwatch';

mongoose.connect('mongodb://brian:123@ds123371.mlab.com:23371/stopwatch');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to the ${dbName} database`);
});
