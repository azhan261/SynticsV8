const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { LiveClassSchema } = require('../../models/Live Class Links/LiveClassSchema')

 //Now to use router.ger to use properties of the schema like find collection, post collection, etc

 //To use this post requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router
/*
 router.post('/', (req, res) => {
    LiveClassSchema.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
     });

 });
 */
 router.post('/', (req, res) => {
  console.log("api hit")
  LiveClassSchema.find((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
  });

});

 //Making a route to post the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 
 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new LiveClassSchema({

      
        teacherName: req.body.teacherName,
        gender: req.body.gender,
        teacherId: req.body.teacherId,
        date: req.body.date,
        subject: req.body.subject,
        grade: req.body.grade,
        link: req.body.link,
        
     });
     //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
     //There will be another property called _id which will be used to fetch a particular data by mongoDB


     emp.save((err, doc) => {
         //Checking for error
         //if (!err) { res.send(doc);}
         //else {console.log('Error in LiveClassSchema Save :' + JSON.stringify(err, undefined, 2)); }
     });

 });

 //Building router for updating with router.put


 router.post('/specific/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  LiveClassSchema.find({ "studentId" : id} , (err, link) => {
    res.json(link);
  });
}); 

router.post('/specific/subject-grade/:grade&:subject', (req, res) => {
  const grade = req.params.grade;
  const subject = req.params.subject;
  console.log("test")
  LiveClassSchema.find({ "grade" : grade, "subject" : subject} , (err, link) => {
    res.json(link);
  });
}); 


router.post("/specific/question/:questionId", (req, res) => {
  console.log("api hit")
  const questionId = req.params.questionId;
  console.log(questionId)
  LiveClassSchema.find({ "questionId" : questionId} , (err, link) => {
    res.json(link);
  });
}); 


 router.post("/:id", (req, res) => {
    const id = req.params.id;
    LiveClassSchema.findById(id, (err, link) => {
      if (!link) {
        res.status(404).send("question not found");
      } else {

        
        link.teacherName = req.body.teacherName,
        link.gender = req.body.gender
        link.teacherId = req.body.teacherId,
        link.date = req.body.date,
        link.subject = req.body.subject,
        link.grade = req.body.grade,
        link.link = req.body.link,
        link
          .save()
          .then((link) => {
            res.json(link);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });


 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    LiveClassSchema.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Answerss Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


