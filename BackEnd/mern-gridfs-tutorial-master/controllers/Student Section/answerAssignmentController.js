const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { AnswersAssignmentSchema } = require('../../models/Student Section/AnswerAssignmentSchema')

 //Now to use router.ger to use properties of the schema like find collection, post collection, etc

 //To use this post requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router
/*
 router.post('/', (req, res) => {
    AnswersAssignmentSchema.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
     });

 });
 */
 router.post('/', (req, res) => {
  console.log("api hit")
  AnswersAssignmentSchema.find((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
  });

});

 router.post('/email', (req, res) => {
  AnswersAssignmentSchema.find({ email: req.body.email },(err, doc) => {
    console.log("api hit")
    if (!err) { console.log(doc)
      res.send(doc); }
    else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
  })
});



router.post('/MCQ-answers', (req, res) => {
  AnswersAssignmentSchema.find({ "answertype" : "Multiple Choice"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Blanks-answers', (req, res) => {
  AnswersAssignmentSchema.find({ "answertype" : "Fill in the Blanks"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/QA-answers', (req, res) => {
  AnswersAssignmentSchema.find({ "answertype" : "Text"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Handwriting-answers', (req, res) => {
  AnswersAssignmentSchema.find({ "answertype" : "Handwriting"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Pronunciation-answers', (req, res) => {
  AnswersAssignmentSchema.find({ "answertype" : "Pronunciation"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-1', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 1"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-2', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 2"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-3', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 3"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-4', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 4"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-5', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 5"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-6', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 6"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-7', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 7"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-8', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 8"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-9', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 9"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-10', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 10"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-11', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 11"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-12', (req, res) => {
  AnswersAssignmentSchema.find({ "grade" : "Grade 12"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});
 //Making a route to post the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 
 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new AnswersAssignmentSchema({

        name:req.body.name,
        fatherName:req.body.fatherName,
        email: req.body.email,
        grade: req.body.grade,
        answertype:req.body.answertype,
        coursetype: req.body.coursetype,
        questionTitle: req.body.questionTitle,
        questionContent: req.body.questionContent,
        answerContent:req.body.answerContent,
        optionsQuestionMcq: req.body.optionsQuestionMcq,
        optionsQuestionFillInTheBlank : req.body.optionsQuestionFillInTheBlank,
        totalMarks:req.body.totalMarks,
        marksObtained:req.body.marksObtained,
        teacherRemarks: req.body.teacherRemarks,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        teacherId: req.body.teacherId,
        studentId: req.body.studentId,
        questionId: req.body.questionId,
        questionReferenceName: req.body.questionReferenceName,
        referenceName: req.body.referenceName,
        currentDate: req.body.currentDate,
        
     });
     //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
     //There will be another property called _id which will be used to fetch a particular data by mongoDB


     emp.save((err, doc) => {
         //Checking for error
         //if (!err) { res.send(doc);}
         //else {console.log('Error in AnswersAssignmentSchema Save :' + JSON.stringify(err, undefined, 2)); }
     });

 });

 //Building router for updating with router.put


 router.post('/specific/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  AnswersAssignmentSchema.find({ "studentId" : id} , (err, student) => {
    res.json(student);
  });
}); 

router.post('/specific/subject/:id&:coursetype', (req, res) => {
  const id = req.params.id;
  const coursetype = req.params.coursetype;
  console.log(id, coursetype, "test")
  AnswersAssignmentSchema.find({ "studentId" : id, "coursetype" : coursetype} , (err, student) => {
    res.json(student);
  });
}); 


router.post("/specific/question/:questionId", (req, res) => {
  console.log("api hit")
  const questionId = req.params.questionId;
  console.log(questionId)
  AnswersAssignmentSchema.find({ "questionId" : questionId} , (err, student) => {
    res.json(student);
  });
}); 


 router.post("/:id", (req, res) => {
    const id = req.params.id;
    AnswersAssignmentSchema.findById(id, (err, answer) => {
      if (!answer) {
        res.status(404).send("question not found");
      } else {

        answer.name = req.body.name,
        answer.fatherName = req.body.fatherName,
        answer.email = req.body.email,
        answer.answertype = req.body.answertype,
        answer.coursetype= req.body.coursetype,
        answer.questionTitle = req.body.questionTitle,
        answer.questionContent = req.body.questionContent,
        answer.answerContent = req.body.answerContent,
        answer.optionsQuestionMcq = req.body.optionsQuestionMcq,
        answer.optionsQuestionFillInTheBlank = req.body.optionsQuestionFillInTheBlank,
        answer.totalMarks = req.body.totalMarks,
        answer.marksObtained = req.body.marksObtained,
        answer.teacherRemarks = req.body.teacherRemarks,
        answer.startDate = req.body.startDate,
        answer.endDate = req.body.endDate,
        answer.teacherId= req.body.teacherId,
        answer.studentId= req.body.studentId,
        answer.questionId= req.body.questionId,
        answer.questionReferenceName= req.body.questionReferenceName,
        answer.referenceName = req.body.referenceName,
        answer.currentDate = req.body.currentDate,
        answer
          .save()
          .then((answer) => {
            res.json(answer);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });


 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    AnswersAssignmentSchema.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Answerss Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


