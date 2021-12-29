 //need to connect mongoose

 const mongoose = require('mongoose');


 //Using mongoose model property to create model for Student
 //Then, specify the schema of the model i.e, define column names
 //We have to pass model name 'Student' into the model
 //For Crud, we will need to use this structure and their names i.e name,position,office etc
 
 var AnswersTest = mongoose.model('AnswersTest', {
     name: { type: String },
     email: {type: String},
     fatherName: { type: String },
     grade: { type: String },
     answertype: { type: String },
     coursetype: { type: String },
     questionTitle: {type: String},
     questionContent: {type:String},
     answerContent: { type: String },
     optionsQuestionMcq:[],
     optionsQuestionFillInTheBlank:[],
     totalMarks: { type: String },
     marksObtained: {type: String },
     teacherRemarks: {type: String },
     teacherId: {type: String },
     studentId: {type: String },
     questionId: {type: String },
     questionReferenceName: {type: String},
     referenceName: {type: String},
     currentDate: {type: String},
 });
 
 
 
 //Now we dont to insert a new record called Employee, we need to just insert data
 //We export it as an object 
 
 module.exports = { AnswersTest };
 