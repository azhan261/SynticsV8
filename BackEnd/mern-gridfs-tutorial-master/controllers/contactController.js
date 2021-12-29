//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { Contact } = require('../models/contacts')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
     Contact.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Contacts :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 router.post('/:id', (req, res) => {
     //Error checking
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    //Retreiving field through id, pass in the id as paramater of what we have reciveved through a button click or any event

    Contact.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Contacts :' + JSON.stringify(err, undifines, 2)); }

    });

 });




 




 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new Contact({
        name: req.body.name,
        email: req.body.email,
        country_code: req.body.country_code,
        phone: req.body.phone,
        message: req.body.message,
        queryAnswerTitle: req.body.queryAnswerContent,
        queryAnswerContent : req.body.queryAnswerContent,

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
    Contact.findById(id, (err, contact) => {
      if (!contact) {
        res.status(404).send("contact not found");
      } else {

        contact.name = req.body.name,
        contact.email = req.body.email
        contact.country_code = req.body.country_code,
        contact.phone = req.body.phone,
        contact.message = req.body.message,
        contact.queryAnswerTitle = req.body.queryAnswerContent,
        contact.queryAnswerContent = req.body.queryAnswerContent,
        contact
          .save()
          .then((contact) => {
            res.json(contact);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });


 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Contact.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contacts Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


