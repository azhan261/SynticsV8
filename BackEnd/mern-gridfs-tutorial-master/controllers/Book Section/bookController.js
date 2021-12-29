const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { BookSchema } = require('../../models/Book Section/BookSchema')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
    BookSchema.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 router.post('/email', (req, res) => {
  BookSchema.find({ email: req.body.email },(err, doc) => {
    console.log("api hit")
    if (!err) { console.log(doc)
      res.send(doc); }
    else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
  })
});



router.post('/MCQ-answers', (req, res) => {
  BookSchema.find({ "answertype" : "Multiple Choice"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Blanks-answers', (req, res) => {
  BookSchema.find({ "answertype" : "Fill in the Blanks"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/QA-answers', (req, res) => {
  BookSchema.find({ "answertype" : "Text"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Handwriting-answers', (req, res) => {
  BookSchema.find({ "answertype" : "Handwriting"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Pronunciation-answers', (req, res) => {
  BookSchema.find({ "answertype" : "Pronunciation"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-1', (req, res) => {
  BookSchema.find({ "grade" : "Grade 1"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-2', (req, res) => {
  BookSchema.find({ "grade" : "Grade 2"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-3', (req, res) => {
  BookSchema.find({ "grade" : "Grade 3"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-4', (req, res) => {
  BookSchema.find({ "grade" : "Grade 4"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-5', (req, res) => {
  BookSchema.find({ "grade" : "Grade 5"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-6', (req, res) => {
  BookSchema.find({ "grade" : "Grade 6"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-7', (req, res) => {
  BookSchema.find({ "grade" : "Grade 7"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-8', (req, res) => {
  BookSchema.find({ "grade" : "Grade 8"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-9', (req, res) => {
  BookSchema.find({ "grade" : "Grade 9"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-10', (req, res) => {
  BookSchema.find({ "grade" : "Grade 10"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-11', (req, res) => {
  BookSchema.find({ "grade" : "Grade 11"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Grade-12', (req, res) => {
  BookSchema.find({ "grade" : "Grade 12"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Answerss :' + JSON.stringify(err, undifines, 2)); }
   });

});
 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new BookSchema({
       
        bookContent:req.body.bookContent,
        teacherId:req.body.teacherId,
        referenceName: req.body.referenceName,
        
     });
     //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
     //There will be another property called _id which will be used to fetch a particular data by mongoDB


     emp.save((err, doc) => {
         //Checking for error
         //if (!err) { res.send(doc);}
         //else {console.log('Error in BookSchema Save :' + JSON.stringify(err, undefined, 2)); }
     });

 });

 //Building router for updating with router.put




 router.post("/:id", (req, res) => {
    const id = req.params.id;
    BookSchema.findById(id, (err, book) => {
      if (!book) {
        res.status(404).send("question not found");
      } else {
        
        book.bookContent = req.body.bookContent,
        book.teacherId = req.body.teacherId,
        book.referenceName = req.body.referenceName,
        book
          .save()
          .then((book) => {
            res.json(book);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });


 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    BookSchema.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Answerss Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


