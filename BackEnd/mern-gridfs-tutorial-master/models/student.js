//need to connect mongoose

const mongoose = require('mongoose');


//Using mongoose model property to create model for Student
//Then, specify the schema of the model i.e, define column names
//We have to pass model name 'Student' into the model
//For Crud, we will need to use this structure and their names i.e name,position,office etc

var Student = mongoose.model('Student', {
    name: { type: String },
    guardian:{ type: String},
    password: {type: String},
    conf_pass: {type: String },
    email: { type: String },
    dob: {type: String },
    cnic: {type: String },
    course: {type: String },
    courseTime: {type: String },
    city: {type: String },
    classesGrade: {type: String},
    gender: {type: String },
    country_code: {type: String },
    phone: {type: String },
    education: {type: String},
    country: {type: String},
    province: {type: String},
    address: {type: String},
    cnicReference: {type: String},
    status: {type: String},
    confirmation: {type: String},
    teacherId: {type: String},
});



//Now we dont to insert a new record called Employee, we need to just insert data
//We export it as an object 

module.exports = { Student };
