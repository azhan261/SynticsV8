//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { Placement } = require('../models/placements')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
     Placement.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Placements :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 router.post('/:id', (req, res) => {
     //Error checking
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    //Retreiving field through id, pass in the id as paramater of what we have reciveved through a button click or any event

    Placement.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Placements :' + JSON.stringify(err, undifines, 2)); }

    });

 });

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new Placement({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        dob: req.body.dob,
        country: req.body.country,
        country_code: req.body.country_code,
        phone: req.body.phone,
        password: req.body.password,
        conf_pass: req.body.conf_pass,
        ageGroup: req.body.ageGroup,
        
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

 router.put('/:id', (req, res) => {
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.param.id}');

    //Using an object to use the values of Employee and edit them, this object emp is different from Employee but uses its properties
    //emp object will be used to store the new values

    var emp = {
    
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        dob: req.body.dob,
        country: req.body.country,
        country_code: req.body.country_code,
        contact: req.body.contact,
        password: req.body.password,
        conf_pass: req.body.conf_pass,
    };
    //Calling Employee to find and upodate, mongoose property
    // (err,doc) is a call back function in mongoose that we need to show err or put, fetch anything from doc
    //{ new: true } is used to tell which data we wish to send, setting new: true, will send the updated data to the doc

    Placement.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in Placements Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Placement.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Placements Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


