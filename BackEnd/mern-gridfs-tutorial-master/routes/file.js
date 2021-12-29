const router = require('express').Router();
const multer  = require('multer');
const { mongo, connection } = require('mongoose');
const Grid = require('gridfs-stream');
Grid.mongo = mongo;

var gfs = Grid(connection.db);

// set up connection to db for file storage

const storage = require('multer-gridfs-storage')(
   {
   db: connection.db,
   file: (req, file) => {
      return {
         filename: file.originalname,
      }
   }
});



//sets file input to single file

const singleUpload = multer({ storage: storage }).single('file');


router.post('/file/display/:filename', (req, res) => {
   console.log("Got hit /file/display/:filename")
   gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
      if(!files || files.length === 0){
         return res.status(404).json({
            message: "Could not find file"
         });
      }
      
      var readstream = gfs.createReadStream({
         filename: files[0].filename
      })
      res.set('Content-Type', files[0].contentType);
      return readstream.pipe(res);
      
     /*
     res.status(200).json({
        success:true,
        file: files[0]
     })
     */
     
   });
});

router.post('/findOne/files/:filename', (req, res) => {
   console.log("Got hit /files/:filename")
   gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
      if(!files || files.length === 0){
         return res.status(404).json({
            message: "Could not find file"
         });
      }
      return res.json(files);
   });
});


router.post('/findAll/files', (req, res) => {
   console.log("got hit /files router.post")
   gfs.files.find().toArray((err, files) => {
      if(!files || files.length === 0){
         return res.status(404).json({
            message: "Could not find files"
         });
      }
      return res.json(files);
   });
});

router.post('/files', singleUpload, (req, res) => {
   console.log("got hit /files router.post")
   if (req.file) {
      return res.json({
         success: true,
         file: req.file,
         metadata: "test"
      });
   }
    res.send({ success: false });
});



router.delete('/files/:id', (req, res) => {
   gfs.remove({ _id: req.params.id }, (err) => {
      if (err) return res.status(500).json({ success: false })
      return res.json({ success: true });
   })
})

module.exports = router;
