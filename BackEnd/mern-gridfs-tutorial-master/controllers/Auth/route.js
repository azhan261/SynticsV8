//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { RegistrationAuth } = require('../../models/AuthSchema/User')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.get('/', (req, res) => {
     RegistrationAuth.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving RegistrationAuth :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.


 
 router.get("/:id", (req, res) => {
    const id = req.params.id;
    RegistrationAuth.findById(id, (err, RegistrationAuth) => {
      res.json(RegistrationAuth);
    });
  });

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/register', function(req, res) {
    let register = new RegistrationAuth(req.body);
    register.save()
        .then(reg => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.status(400).send("Failed to store to database");
        });
});

router.post('/login', (req, res) => {
    RegistrationAuth.findOne({ user_name: req.body.user_name })
        .then(user => {
            console.log("User from login", user)
            if (!user) res.sendStatus(204);
            else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
            }
        });
});

router.post('/validateUsername', (req, res) => {
    RegistrationAuth.findOne({ user_name: req.body.user_name })
        .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
});

 //Building router for updating with router.put

 /*router.post('/:id', (req, res) => {
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.param.id}');

    //Using an object to use the values of Employee and edit them, this object emp is different from Employee but uses its properties
    //emp object will be used to store the new values

    var emp = {
    
        name:req.body.name,
        RegistrationAuthstitle: req.body.RegistrationAuthstitle,
        RegistrationAuthscontent: req.body.RegistrationAuthscontent,
        status: req.body.status
       
    };
    //Calling Employee to find and upodate, mongoose property
    // (err,doc) is a call back function in mongoose that we need to show err or put, fetch anything from doc
    //{ new: true } is used to tell which data we wish to send, setting new: true, will send the updated data to the doc

    RegistrationAuth.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in RegistrationAuth Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });
*/
 router.post("/:id", (req, res) => {
    const id = req.params.id;
    RegistrationAuth.findById(id, (err, RegistrationAuth) => {
      if (!RegistrationAuth) {
        res.status(404).send("RegistrationAuth not found");
      } else {
        RegistrationAuth.name = req.body.name;
        RegistrationAuth.RegistrationAuthstitle = req.body.RegistrationAuthstitle;
        RegistrationAuth.RegistrationAuthscontent = req.body.RegistrationAuthscontent;
        RegistrationAuth.status = req.body.status;
       
        RegistrationAuth
          .save()
          .then((RegistrationAuth) => {
            res.json(RegistrationAuth);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    RegistrationAuth.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in RegistrationAuth Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


