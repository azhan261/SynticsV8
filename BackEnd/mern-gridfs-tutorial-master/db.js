const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LogisticDatabase', (err) => {
    if (!err)
    console.log('MongoDB connection succeeded.');
    else
        //The JASON,stringify is to make the error into a string and notify it in console.log
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2))
});

//Need to export mongose for db connection

module.exports = mongoose;
