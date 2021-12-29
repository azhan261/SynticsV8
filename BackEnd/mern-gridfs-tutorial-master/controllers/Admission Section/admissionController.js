//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { Admission } = require('../../models/Admission Section/admissionSchema')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
     Admission.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Admissions :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 router.post('/:id', (req, res) => {
     //Error checking
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    //Retreiving field through id, pass in the id as paramater of what we have reciveved through a button click or any event

    Admission.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Admissions :' + JSON.stringify(err, undifines, 2)); }

    });

 });

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new Admission({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        dob: req.body.dob,
        country: req.body.country,
        country_code: req.body.country_code,
        phone: req.body.phone,
        ageGroup: req.body.ageGroup,
        answertype:req.body.answertype,
        questionTitle: req.body.questionTitle,
        questionContent: req.body.questionContent,
        answerContent:req.body.answerContent,
        optionsQuestionMcq: req.body.optionsQuestionMcq,
        optionsQuestionFillInTheBlank : req.body.optionsQuestionFillInTheBlank,
        totalMarks:req.body.totalMarks,
        marksObtained:req.body.marksObtained,
        teacherRemarks: req.body.teacherRemarks,
            
     });
     //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
     //There will be another property called _id which will be used to fetch a particular data by mongoDB


     emp.save((err, doc) => {
         //Checking for error
         //if (!err) { res.send(doc);}
         //else {console.log('Error in Student Save :' + JSON.stringify(err, undefined, 2)); }
     });

 });

 //Building router for updating with router.put

 router.post("/:id", (req, res) => {
    const id = req.params.id;
    Admission.findById(id, (err, admission) => {
      if (!question) {
        res.status(404).send("question not found");
      } else {
        admission.name = req.body.name,
        admission.email = req.body.email,
        admission.gender = req.body.gender,
        admission.dob = req.body.dob,
        admission.country = req.body.country,
        admission.country_code = req.body.country_code,
        admission.contact = req.body.contact,
        admission.text = req.body.text; 
        admission.name = req.body.name,
        admission.answertype = req.body.answertype,
        admission.questionTitle = req.body.questionTitle,
        admission.questionContent = req.body.questionContent,
        admission.answerContent = req.body.answerContent,
        admission.optionsQuestionMcq = req.body.optionsQuestionMcq,
        admission.optionsQuestionFillInTheBlank = req.body.optionsQuestionFillInTheBlank,
        admission.totalMarks = req.body.totalMarks,
        admission.marksObtained = req.body.marksObtained,
        admission.teacherRemarks = req.body.teacherRemarks,
        admission
          .save()
          .then((admission) => {
            res.json(admission);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete("/delete/:id", (req, res) => {
    var id = ObjectId(req.params.id)
    Admission.findByIdAndRemove(id,(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
    });

});

module.exports = router;

