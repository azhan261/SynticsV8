//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { NotificationSchema } = require('../../models/Notifications/NotificationSchema')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
     NotificationSchema.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving NotificationSchema :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Router for getting only approved notifications

 router.post('/approved', (req, res) => {
    NotificationSchema.find({ "status" : "1" },(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving NotificationSchema :' + JSON.stringify(err, undifines, 2)); }
    });

});


router.post('/specific/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  NotificationSchema.find({ "studentId" : id} , (err, student) => {
    res.json(student);
  });
}); 

router.post('/specific/grade/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  NotificationSchema.find({ "grade" : id} , (err, student) => {
    res.json(student);
  });
}); 

router.post('/specific/subject/:id&:notificationSubject', (req, res) => {
  const id = req.params.id;
  const notificationSubject = req.params.notificationSubject;
  console.log(id, notificationSubject, "test")
  NotificationSchema.find({ "studentId" : id, "notificationSubject" : notificationSubject} , (err, student) => {
    res.json(student);
  });
}); 


router.post("/specific/question/:questionId", (req, res) => {
  console.log("api hit")
  const questionId = req.params.questionId;
  console.log(questionId)
  NotificationSchema.find({ "questionId" : questionId} , (err, student) => {
    res.json(student);
  });
}); 

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     console.log("got hit")
     var emp = new NotificationSchema({
      name:req.body.name,
      email:req.body.email,
      teacherName: req.body.teacherName,
      studentId: req.body.studentId,
      teacherId: req.body.teacherId,
      grade: req.body.grade,
      notificationTitle:req.body.notificationTitle,
      notificationContent: req.body.notificationContent,
      notificationSubject: req.body.notificationSubject,
      responseTitle:req.body.responseTitle,
      responseContent:req.body.responseContent,
      status:req.body.status,

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
        notificationstitle: req.body.notificationstitle,
        notificationscontent: req.body.notificationscontent,
        status: req.body.status
       
    };
    //Calling Employee to find and upodate, mongoose property
    // (err,doc) is a call back function in mongoose that we need to show err or put, fetch anything from doc
    //{ new: true } is used to tell which data we wish to send, setting new: true, will send the updated data to the doc

    NotificationSchema.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in NotificationSchema Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });
*/
 router.post("/:id", (req, res) => {
    const id = req.params.id;
    NotificationSchema.findById(id, (err, notification) => {
      if (!notification) {
        res.status(404).send("notification not found");
      } else {

        notification.name=req.body.name,
        notification.email=req.body.email,
        notification.teacherName= req.body.teacherName,
        notification.studentId= req.body.studentId,
        notification.teacherId= req.body.teacherId,
        notification.grade= req.body.grade,
        notification.notificationTitle=req.body.notificationTitle,
        notification.notificationContent= req.body.notificationContent,
        notification.notificationSubject= req.body.notificationSubject,
        notification.responseTitle=req.body.responseTitle,
        notification.responseContent=req.body.responseContent,
        notification.status=req.body.status,
        notification
          .save()
          .then((notification) => {
            res.json(notification);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete("/delete/:id", (req, res) => {
  var id = ObjectId(req.params.id)
  NotificationSchema.findByIdAndRemove(id,(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving NotificationSchema :' + JSON.stringify(err, undifines, 2)); }
  });

});


module.exports = router;


 //We have to configure these routes in the root file which is index.js


