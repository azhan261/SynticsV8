//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { TestPlanning } = require('../models/testPlanning')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
  TestPlanning.find((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving Questions :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-1/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 1"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-2/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 2"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-3/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 3"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-4/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 4"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-5/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 5"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-6/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 6"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-7/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 7"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-8/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 8"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-9/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 9"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-10/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 10"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-11/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 11"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});

router.post('/Grade-12/:id', (req, res) => {
 const id = req.params.id;
 console.log(id)
 TestPlanning.find({ "teacherId" : id, "grade": "Grade 12"},(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
  });

});


router.post('/teacherSpecific/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "teacherId" : id},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});


//-------------------Student Section------------//

router.post('/Students-Grade-1/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 1"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-2/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 2"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-3/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 3"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-4/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 4"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-5/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 5"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-6/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 6"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-7/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 7"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-8/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 8"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-9/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 9"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-10/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 10"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-11/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 11"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Students-Grade-12/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "coursetype" : id, "grade": "Grade 12"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});
//---------------------------------------


 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.



 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new TestPlanning({
        
        coursetype:req.body.coursetype,
        questiontype:req.body.questiontype,
        answertype:req.body.answertype,
        questiontitle: req.body.questiontitle,
        questioncontent:req.body.questioncontent,
        optionsQuestionMcq: req.body.optionsQuestionMcq,
        optionsQuestionFillInTheBlank : req.body.optionsQuestionFillInTheBlank,
        totalmarks:req.body.totalmarks,
        grade: req.body.grade,
        teacherId: req.body.teacherId,
        referenceName: req.body.referenceName,
        currentDate: req.body.currentDate,
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

/* router.put('/:id', (req, res) => {
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.param.id}');

    //Using an object to use the values of Employee and edit them, this object emp is different from Employee but uses its properties
    //emp object will be used to store the new values

    var emp = {
    
        coursetype:req.body.coursetype,
        activitytype:req.body.activitytype,
        questiontype:req.body.questiontype,
        answertype:req.body.answertype,
        questioncontent:req.body.questioncontent,
        totalmarks:req.body.totalmarks,
        answer: req.body.answer
    };
    //Calling Employee to find and upodate, mongoose property
    // (err,doc) is a call back function in mongoose that we need to show err or put, fetch anything from doc
    //{ new: true } is used to tell which data we wish to send, setting new: true, will send the updated data to the doc

    TestPlanning.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in Questions Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });
 */

 router.post('/admin/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  TestPlanning.find({ "teacherId" : id},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving CoursePlannings :' + JSON.stringify(err, undifines, 2)); }
   });

});



 router.post("/:id", (req, res) => {
    const id = req.params.id;
    TestPlanning.findById(id, (err, question) => {
      if (!question) {
        res.status(404).send("question not found");
      } else {
        question.text = req.body.text;
        question.coursetype = req.body.coursetype;
        question.questiontype = req.body.questiontype;
        question.answertype = req.body.answertype;
        question.questiontitle = req.body.questiontitle
        question.questioncontent = req.body.questioncontent;
        question.optionsQuestionMcq = req.body.optionsQuestionMcq;
        question.optionsQuestionFillInTheBlank = req.body.optionsQuestionFillInTheBlank;
        question.totalmarks = req.body.totalmarks;
        question.grade = req.body.grade;
        question.referenceName = req.body.referenceName;
        question.currentDate = req.body.currentDate;
        question
          .save()
          .then((question) => {
            res.json(question);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


router.delete("/delete/:id", (req, res) => {
    var id = ObjectId(req.params.id)
    TestPlanning.findByIdAndRemove(id,(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
    });

});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


