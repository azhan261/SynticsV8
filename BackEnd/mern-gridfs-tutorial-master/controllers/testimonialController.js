//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { Testimonial } = require('../models/testimonials')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 /*
 router.post('/', (req, res) => {
     Testimonial.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Testimonial :' + JSON.stringify(err, undifines, 2)); }
     });

 });
*/

/*
router.post('/login', (req, res) => {
  console.log("api hit")
  Student.findOne({ email: req.body.email })
     .then(user => {
         console.log("User from login hit", user)
         if (!user) {
         res.sendStatus(204);
         console.log("User name issue")
         }
         else {
             console.log("Password Issue")
             bcrypt.compare(req.body.password, user.password)
                 .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204)
                 )
         }
     });
});
*/

 router.post('/', (req, res) => {
  console.log("api hit")
  Testimonial.find((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Retrieving Testimonial :' + JSON.stringify(err, undifines, 2)); }
  });

});
     

 //Router for getting only approved testimonial

 router.post('/approved', (req, res) => {
    Testimonial.find({ "status" : "1" },(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Testimonial :' + JSON.stringify(err, undifines, 2)); }
    });

});

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.


/* 
 router.post("/:id", (req, res) => {
    const id = req.params.id;
    Testimonial.findById(id, (err, testimonial) => {
      res.json(testimonial);
    });
  });
*/
 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
   console.log("Api hit")
     var emp = new Testimonial({
        name: req.body.name,
        testimonialTitle: req.body.testimonialTitle,
        testimonialContent: req.body.testimonialContent,
        
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

 /*router.post('/:id', (req, res) => {
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.param.id}');

    //Using an object to use the values of Employee and edit them, this object emp is different from Employee but uses its properties
    //emp object will be used to store the new values

    var emp = {
    
        name:req.body.name,
        testimonialtitle: req.body.testimonialtitle,
        testimonialcontent: req.body.testimonialcontent,
        status: req.body.status
       
    };
    //Calling Employee to find and upodate, mongoose property
    // (err,doc) is a call back function in mongoose that we need to show err or put, fetch anything from doc
    //{ new: true } is used to tell which data we wish to send, setting new: true, will send the updated data to the doc

    Testimonial.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in Testimonial Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });
*/
 router.post("/:id", (req, res) => {
    const id = req.params.id;
    Testimonial.findById(id, (err, testimonial) => {
      if (!testimonial) {
        res.status(404).send("testimonial not found");
      } else {
        testimonial.testimonialTitle = req.body.testimonialTitle;
        testimonial.testimonialContent = req.body.testimonialContent;
        testimonial
          .save()
          .then((testimonial) => {
            res.json(testimonial);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete("/delete/:id", (req, res) => {
  var id = ObjectId(req.params.id)
  Testimonial.findByIdAndRemove(id,(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving Testimonial :' + JSON.stringify(err, undifines, 2)); }
  });

});


module.exports = router;


 //We have to configure these routes in the root file which is index.js


