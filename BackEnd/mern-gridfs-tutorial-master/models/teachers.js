//need to connect mongoose

const mongoose = require('mongoose');


//Using mongoose model property to create model for Teacher
//Then, specify the schema of the model i.e, define column names
//We have to pass model name 'Teacher' into the model
//For Crud, we will need to use this structure and their names i.e name,position,office etc

var Teacher = mongoose.model('Teacher', {
    name: { type: String },
    password: {type: String},
    conf_pass: {type: String },
    email: { type: String },
    subjectChoosenForApplication: { type : String},
    gender: {type: String },
    dob: {type: String },
    country_code: {type: String },
    phone: {type: String },
    nationality: {type: String},
    country: {type: String},
    description: {type: String},
    status: {type: String},
    confirmation: {type: String},
    cvReference: {type: String},
    imgReference: {type: String},
    vidReference: {type: String},
});



//Now we dont to insert a new record called Employee, we need to just insert data
//We export it as an object 

module.exports = { Teacher };
