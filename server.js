require("dotenv").config();
var cors = require('cors')
const path = require('path');
const logger = require('morgan');
const express = require('express');
const app = express();
const config = require('./BackEnd/mern-gridfs-tutorial-master/config');
const { ExpressPeerServer } = require('peer');
const faceapi = require("face-api.js");
const { Canvas, Image } = require("canvas");
const canvas = require("canvas");
const fileUpload = require("express-fileupload");
faceapi.env.monkeyPatch({ Canvas, Image });
//const serverHttps = require('http').Server(app)
//const io = require('socket.io')(serverHttps)


app.use(
	fileUpload({
	  useTempFiles: true,
	})
  );


const http = require('http')
var xss = require("xss")
var server = http.createServer(app)
var io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});


if(process.env.NODE_ENV==='production'){
	app.use(express.static(__dirname+"/build"))
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname+"/build/index.html"))
	})
}
else{
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}

// ---- Live Video Call ------
/*
const peerServer = ExpressPeerServer(serverHttps, {
  debug: true
});
const { v4: uuidV4 } = require('uuid')

app.use('/peerjs', peerServer);

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/liveChat', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.broadcast.to(roomId).emit('user-connected', userId)
    // messages
    socket.on('message', (message) => {
      //send message to the same room
      io.to(roomId).emit('createMessage', message)
  }); 

    socket.on('disconnect', () => {
      socket.broadcast.to(roomId).emit('user-disconnected', userId)
    })
  })
})
*/
///////--------------------------



// const cors = require('cors')
// app.use(cors())


////-------------------------


//Import express.js module and create its variable.

//Import PythonShell module.




//Live Call Zoom Clone React

connections = {}
messages = {}
timeOnline = {}

io.on('connection', (socket) => {

	socket.on('join-call', (path) => {
		if(connections[path] === undefined){
			connections[path] = []
		}
		connections[path].push(socket.id)

		timeOnline[socket.id] = new Date()

		for(let a = 0; a < connections[path].length; ++a){
			io.to(connections[path][a]).emit("user-joined", socket.id, connections[path])
		}

		if(messages[path] !== undefined){
			for(let a = 0; a < messages[path].length; ++a){
				io.to(socket.id).emit("chat-message", messages[path][a]['data'], 
					messages[path][a]['sender'], messages[path][a]['socket-id-sender'])
			}
		}

		console.log(path, connections[path])
	})

	socket.on('signal', (toId, message) => {
		io.to(toId).emit('signal', socket.id, message)
	})

	socket.on('chat-message', (data, sender) => {
		data = sanitizeString(data)
		sender = sanitizeString(sender)

		var key
		var ok = false
		for (const [k, v] of Object.entries(connections)) {
			for(let a = 0; a < v.length; ++a){
				if(v[a] === socket.id){
					key = k
					ok = true
				}
			}
		}

		if(ok === true){
			if(messages[key] === undefined){
				messages[key] = []
			}
			messages[key].push({"sender": sender, "data": data, "socket-id-sender": socket.id})
			console.log("message", key, ":", sender, data)

			for(let a = 0; a < connections[key].length; ++a){
				io.to(connections[key][a]).emit("chat-message", data, sender, socket.id)
			}
		}
	})

	socket.on('disconnect', () => {
		var diffTime = Math.abs(timeOnline[socket.id] - new Date())
		var key
		for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {
			for(let a = 0; a < v.length; ++a){
				if(v[a] === socket.id){
					key = k

					for(let a = 0; a < connections[key].length; ++a){
						io.to(connections[key][a]).emit("user-left", socket.id)
					}
			
					var index = connections[key].indexOf(socket.id)
					connections[key].splice(index, 1)

					console.log(key, socket.id, Math.ceil(diffTime / 1000))

					if(connections[key].length === 0){
						delete connections[key]
					}
				}
			}
		}
	})
})

//-----------------


const {PythonShell} = require('python-shell');
  
//Router to handle the incoming request.
app.get("/python/keyboard", (req, res, next)=>{
    //Here are the option object in which arguments can be passed for the python_test.js.
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
          scriptPath: './BackEnd/mern-gridfs-tutorial-master/Python', //If you are having python_test.py script in same folder, then it's optional.
        args: ['shubhamk314'] //An argument which can be accessed in the script using sys.argv[1]
    };
      
  
    PythonShell.run('virtual-keyboard.py', options, function (err, result){
          if (err) throw err;
          // result is an array consisting of messages collected 
          //during execution of script.
          console.log('result: ', result.toString());
          res.send(result.toString())
    });
});
  
//Creates the server on default port 8000 and can be accessed through localhost:8000



//------------------------------


//const server = http.createServer(app)

//Cors
//app.use(cors())

//const cors = require('cors');
app.use(cors({ origin: [  'http://localhost:3000','htpp://localhost:3001','http://localhost:3002','http://localhost:3003','http://localhost:3004','http://localhost:3005',
                          'http://localhost:3005','http://localhost:3006','http://localhost:3007','http://localhost:3008', 'http://localhost:3009',
                          'https://syntics.co'  ]}));


//-----

//Mongoose


//const { mongoose } = require('./db.js');

const { mongoose } = require('./BackEnd/mern-gridfs-tutorial-master/config/index');

//----

//Body Parser


const bodyParser = require('body-parser');

//-----


//----------


//For express file upload plugin

const api = require('./BackEnd/mern-gridfs-tutorial-master/routes/user.routes')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

/*
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

*/



app.use('/public', express.static('public'));
/*
app.use('/api', api)
*/

/*
app.listen(4200, () => console.log('Server started at port : 4200'));
*/
/*
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});
*/
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

//-----------------------


//-------------------------------------------------------------------------

//Request statement for the controller

var studentController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/studentController');
var teacherController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/teacherController');
var placementController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/placementController');
var contactController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/contactController');
var personalInfosController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/personalInfoController');
var questionsController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/questionsController');
var coursePlanningController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/coursePlanningController');
var testPlanningController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/testPlanningController');
var projectController = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Project Controller/projectController")
var assignmentController = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Assignment Section/assignmentController")
var placementTestQuestionsController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/placementTestQuestionsController');
var testimonialController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/testimonialController');
var blogController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/blogController');
var route = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Auth/route');
var sectionsSchoolsTrainingAdultMale = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Courses/Schools/sectionsSchoolsTrainingAdultMale');
var answersController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Student Section/answersController');
var answersTestController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Student Section/answersTestController');
var answerAssignmentController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Student Section/answerAssignmentController')
var classesController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Classes Section/classesController');
var emailController = require("./BackEnd/mern-gridfs-tutorial-master/email/email.controller");
var emailControllerForPassword = require("./BackEnd/mern-gridfs-tutorial-master/emailForResetPassword/email.controllerForPassword");
var notificationController = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Notifications/NotificationController")
var bookContoller = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Book Section/bookController")
var faceRecognitionController = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Face Recognition Controller/FaceRecognitionController")
var liveClassController = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Live Class Links/liveClassController")
var faceController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/faceController');
//app.use is a middleware function that uses anything we have required. 

app.use(bodyParser.json());

//------- Email Sending Node Mailer

/* hitted from the onSubmit handler in Landing.js
fetch(`${API_URL}/email`, {
*/

app.post("/email", emailController.collectEmail);
app.post("/emailForPassword", emailControllerForPassword.collectEmail);

/* Manage state in confirm based on request / check invoked callback request */

app.get("/email/confirm/:id", emailController.confirmEmail);
app.get("/emailForPassword/confirm/:id", emailControllerForPassword.confirmEmail);

/* Check all other req*/


//---------------------------S


//app.cors will allow http request to be recieved or given through any plateform, port numbers, etc
//in cors() we pass the url of what we want to connect with which is using a different plateform/port
//the url would be passed as an object
//localhost:4200 is for angular, we wish to connect angular with nodejs through cors



//Setting up express server through app.listen

/*
const port = process.env.PORT || 7000;
var server = app.listen(port);
console.log(`GridFS tutorial listening on ${port}`);
*/
/*
serverHttps.listen(process.env.PORT||7000)


module.exports = serverHttps;
*/

app.set('port', (process.env.PORT || 9000))

sanitizeString = (str) => {
	return xss(str)
}


//app.listen(3001, () => console.log('Server started at port : 3001'));

//Adding routers from the controller

// Serve static files from the React app


//app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(logger('dev'));
// Put all API endpoints under '/api'
app.use('/api', require('./BackEnd/mern-gridfs-tutorial-master/routes/file'));



app.use('/students', studentController);
app.use('/placements', placementController);
app.use('/teachers', teacherController);
app.use('/contacts', contactController);
app.use('/personalInfos', personalInfosController);
app.use('/questions', questionsController);
app.use('/coursePlannings', coursePlanningController);
app.use('/testPlannings', testPlanningController);
app.use('/assignmentPlannings', assignmentController);
app.use('/placementQuestions', placementTestQuestionsController);
app.use('/testimonials', testimonialController);
app.use('/blogs', blogController);
app.use('/registration', route);
app.use('/sections', sectionsSchoolsTrainingAdultMale);
app.use('/api', api);
app.use('/answers', answersController);
app.use('/answers-test', answersTestController);
app.use('/assignmentAnswers', answerAssignmentController);
app.use('/classes', classesController);
app.use('/notifications', notificationController);
app.use('/flip-book', bookContoller)
app.use('/faceRecognition', faceRecognitionController)
app.use('/live-class-link', liveClassController)
app.use('/projects', projectController)
app.use('/faceRecognition', faceController);


server.listen(app.get('port'), () => {
	console.log("listening on", app.get('port'))
})