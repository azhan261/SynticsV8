const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { ProjectSchema } = require('../../models/Project Schema/ProjectSchema')

 //Now to use router.ger to use properties of the schema like find collection, post collection, etc

 //To use this post requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router
/*
 router.post('/', (req, res) => {
    ProjectSchema.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
     });

 });
 */
 router.post('/', (req, res) => {
  console.log("api hit")
  ProjectSchema.find((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
  });

});

 router.post('/projectStartDate', (req, res) => {
  ProjectSchema.find({ projectStartDate: req.body.projectStartDate },(err, doc) => {
    console.log("api hit")
    if (!err) { console.log(doc)
      res.send(doc); }
    else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
  })
});




 //Making a route to post the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 
 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new ProjectSchema({

        projectTitle:req.body.projectTitle,
        projectType:req.body.projectType,
        projectStartDate: req.body.projectStartDate,
        projectDueDate: req.body.projectDueDate,
        projectStatus:req.body.projectStatus,
        projectDescription: req.body.projectDescription,
        projectAttachmentsReference: req.body.projectAttachmentsReference,
        
     });
     //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
     //There will be another property called _id which will be used to fetch a particular data by mongoDB


     emp.save((err, doc) => {
         //Checking for error
         //if (!err) { res.send(doc);}
         //else {console.log('Error in ProjectSchema Save :' + JSON.stringify(err, undefined, 2)); }
     });

 });

 //Building router for updating with router.put


 router.post('/specific/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  ProjectSchema.find({ "studentId" : id} , (err, student) => {
    res.json(student);
  });
}); 


router.post('/specific/subject/:id&:coursetype', (req, res) => {
  const id = req.params.id;
  const coursetype = req.params.coursetype;
  console.log(id, coursetype, "test")
  ProjectSchema.find({ "studentId" : id, "coursetype" : coursetype} , (err, student) => {
    res.json(student);
  });
}); 

router.post("/specific/question/:questionId", (req, res) => {
  console.log("api hit here")
  const questionId = req.params.questionId;
  console.log(questionId)
  ProjectSchema.find({ "questionId" : questionId} , (err, student) => {
    res.json(student);
  });
}); 


 router.post("/:id", (req, res) => {
    const id = req.params.id;
    ProjectSchema.findById(id, (err, project) => {
      if (!project) {
        res.status(404).send("question not found");
      } else {

        project.projectTitle = req.body.projectTitle,
        project.projectType = req.body.projectType,
        project.projectStartDate = req.body.projectStartDate,
        project.projectDueDate = req.body.projectDueDate,
        project.projectStatus = req.body.projectStatus,
        project.projectDescription = req.body.projectDescription,
        project.projectAttachmentsReference = req.body.projectAttachmentsReference,
        project
          .save()
          .then((project) => {
            res.json(project);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });


 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ProjectSchema.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Answerss Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


