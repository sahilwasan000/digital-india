const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Munna', { useNewUrlParser: true });

const db = mongoose.connection;
module.exports = {mongoose};
