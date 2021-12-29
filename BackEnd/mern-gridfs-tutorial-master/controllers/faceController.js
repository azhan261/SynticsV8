//Taking the router for express to use the GET, POST, HTTP methods.
const express = require("express");
const faceapi = require("face-api.js");
const mongoose = require("mongoose");
const { Canvas, Image } = require("canvas");
const canvas = require("canvas");
const fileUpload = require("express-fileupload");
faceapi.env.monkeyPatch({ Canvas, Image });
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema
const app = express();
app.use(
    fileUpload({
      useTempFiles: true,
    })
  );
  
var { FaceModel } = require('../models/faceModel')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router



 async function LoadModels() {
    // Load the models
    // __dirname gives the root directory of the server
    await faceapi.nets.faceRecognitionNet.loadFromDisk(__dirname + "/models");
    await faceapi.nets.faceLandmark68Net.loadFromDisk(__dirname + "/models");
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(__dirname + "/models");
  }
  LoadModels();
  


 async function uploadLabeledImages(images, label) {
    try {
      let counter = 0;
      const descriptions = [];
      // Loop through the images
      for (let i = 0; i < images.length; i++) {
        const img = await canvas.loadImage(images[i]);
        counter = (i / images.length) * 100;
        console.log(`Progress = ${counter}%`);
        // Read each face and save the face descriptions in the descriptions array
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
        descriptions.push(detections.descriptor);
      }
  
      // Create a new face document with the given label and save it in DB
      const createFace = new FaceModel({
        label: label,
        descriptions: descriptions,
      });
      await createFace.save();
      return true;
    } catch (error) {
      console.log(error);
      return (error);
    }
  }
  
  async function getDescriptorsFromDB(image) {
    // Get all the face data from mongodb and loop through each of them to read the data
    let faces = await FaceModel.find();
    for (i = 0; i < faces.length; i++) {
      // Change the face data descriptors from Objects to Float32Array type
      for (j = 0; j < faces[i].descriptions.length; j++) {
        faces[i].descriptions[j] = new Float32Array(Object.values(faces[i].descriptions[j]));
      }
      // Turn the DB face docs to
      faces[i] = new faceapi.LabeledFaceDescriptors(faces[i].label, faces[i].descriptions);
    }
  
    // Load face matcher to find the matching face
    const faceMatcher = new faceapi.FaceMatcher(faces, 0.6);
  
    // Read the image using canvas or other method
    const img = await canvas.loadImage(image);
    let temp = faceapi.createCanvasFromMedia(img);
    // Process the image for the model
    const displaySize = { width: img.width, height: img.height };
    faceapi.matchDimensions(temp, displaySize);
  
    // Find matching faces
    const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    const results = resizedDetections.map((d) => faceMatcher.findBestMatch(d.descriptor));
    return results;
  }
  
  
  
  
router.post("/post-face",async (req,res)=>{
      const File1 = req.files.File1.tempFilePath
  
      const label = req.body.label
      let result = await uploadLabeledImages([File1], label);
      if(result){
          
          res.json({message:"Face data stored successfully"})
      }else{
          res.json({message:"Something went wrong, please try again."})
          
      }
  })
  
  router.post("/check-face", async (req, res) => {
  
    const File1 = req.files.File1.tempFilePath;
    let result = await getDescriptorsFromDB(File1);
    res.json({ result });
    
  });





 router.post('/', (req, res) => {
     FaceModel.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Admissions :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 router.post('/:id', (req, res) => {
     //Error checking
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    //Retreiving field through id, pass in the id as paramater of what we have reciveved through a button click or any event

    FaceModel.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Admissions :' + JSON.stringify(err, undifines, 2)); }

    });

 });

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new FaceModel({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        dob: req.body.dob,
        country: req.body.country,
        country_code: req.body.country_code,
        phone: req.body.phone,
        ageGroup: req.body.ageGroup,
        answertype:req.body.answertype,
        questionTitle: req.body.questionTitle,
        questionContent: req.body.questionContent,
        answerContent:req.body.answerContent,
        optionsQuestionMcq: req.body.optionsQuestionMcq,
        optionsQuestionFillInTheBlank : req.body.optionsQuestionFillInTheBlank,
        totalMarks:req.body.totalMarks,
        marksObtained:req.body.marksObtained,
        teacherRemarks: req.body.teacherRemarks,
            
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
    FaceModel.findById(id, (err, admission) => {
      if (!question) {
        res.status(404).send("question not found");
      } else {
        admission.name = req.body.name,
        admission.email = req.body.email,
        admission.gender = req.body.gender,
        admission.dob = req.body.dob,
        admission.country = req.body.country,
        admission.country_code = req.body.country_code,
        admission.contact = req.body.contact,
        admission.text = req.body.text; 
        admission.name = req.body.name,
        admission.answertype = req.body.answertype,
        admission.questionTitle = req.body.questionTitle,
        admission.questionContent = req.body.questionContent,
        admission.answerContent = req.body.answerContent,
        admission.optionsQuestionMcq = req.body.optionsQuestionMcq,
        admission.optionsQuestionFillInTheBlank = req.body.optionsQuestionFillInTheBlank,
        admission.totalMarks = req.body.totalMarks,
        admission.marksObtained = req.body.marksObtained,
        admission.teacherRemarks = req.body.teacherRemarks,
        admission
          .save()
          .then((admission) => {
            res.json(admission);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete("/delete/:id", (req, res) => {
    var id = ObjectId(req.params.id)
    FaceModel.findByIdAndRemove(id,(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
    });

});

module.exports = router;

