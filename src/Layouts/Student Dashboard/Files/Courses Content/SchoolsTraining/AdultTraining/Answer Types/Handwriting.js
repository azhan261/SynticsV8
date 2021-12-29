import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import * as iink from 'iink-js';
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import html2canvas from 'html2canvas';
import { createAnswers } from '../../../../Apis/apiForAnswers';
import { createAudioFile } from '../../../../Apis/apiForAudioSending';
import { getRegisterationStudentsById } from '../../../../Apis/apiForRegistrations';

function HandwritingForStudent() {
  let {id} = useParams()
  const location = useLocation();
  const history = useHistory()
  const editorRef = useRef(null);
  const [studentDataValues, setStudentDataValues] = useState([])
  const [files, setFiles] = useState([])
  const [file, setFile] = useState()
  const [filesNewName, setFilesNewName] = useState(id)
  const [newName, setNewName] = useState([])
  const [referenceName, setReferenceName] = useState()
  const editorStyle = {
    'minWidth': '100px',
    'minHeight': '100px',
    'width': '75vw',
    'height': 'calc(100vh - 190px)',
    'touchAction': 'none',
  };

  useEffect(() => {
    
    const fetchStudentData = async function() {
      const studentData = await getRegisterationStudentsById(id)
      console.log(studentData)
      setStudentDataValues(studentData)
    }
    fetchStudentData()
    const undoElement = document.getElementById('undo');
    const redoElement = document.getElementById('redo');
    const clearElement = document.getElementById('clear');
    //const resultElement = document.getElementById('export-result')
    //const exportElement = document.getElementById('exportContent');
    //const textArea = document.getElementById('textArea')
    //console.log(textArea.value)
    let editor = editorRef.current;

    editor.addEventListener('changed', (event) => {
      //exportElement.disabled = !event.detail.canExport;
      undoElement.disabled = !event.detail.canUndo;
      redoElement.disabled = !event.detail.canRedo;
      clearElement.disabled = event.detail.isEmpty;
    });
    /*
    editor.addEventListener('exported', evt => {
      var stringTest = JSON.stringify(evt.detail.exports)
      var stringSearch = stringTest.search('"text/plain":')
      var sliceIt = stringTest.slice(stringSearch)
      var removingStuff = sliceIt.replace('"text/plain":' , '')
      var removingParanthesis = removingStuff.replace("}", '')
      var finalString = removingParanthesis
      console.log(removingParanthesis)
      resultElement.innerHTML = removingParanthesis
      const exports = evt.detail.exports;
      handleDataSending(finalString)
      console.log(exports)
      console.log({exports})
     });
*/
/*
     exportElement.addEventListener('click', () => {
      exportElement.disabled = true;
      editor.export_();
    });
  */
    undoElement.addEventListener('click', () => {
      editor.undo();
    });
    redoElement.addEventListener('click', () => {
      editor.redo();
    });
    clearElement.addEventListener('click', () => {
      editor.clear();
    });
    editor = iink.register(editorRef.current, {
      triggers: {
        exportContent: 'DEMAND'
      },
      recognitionParams: {
        type: 'TEXT',
        protocol: 'WEBSOCKET',
        apiVersion: 'V4',
        server: {
          scheme: 'https',
          host: 'webdemoapi.myscript.com',
          applicationKey: '1463c06b-251c-47b8-ad0b-ba05b9a3bd01',
          hmacKey: '60ca101a-5e6d-4159-abc5-2efcbecce059',
          websocket: {
            pingEnabled: false,
            autoReconnect: true
          }
        },
        iink: {
          exports: {
            jiix: {
              strokes: true
            },
            text: {
              mimeTypes : ['text/plain', 'application/vnd.myscript.jiix'],
              smartGuide : true,
              words : true
            }
          }
        } 
      },
    });
    window.addEventListener('resize', () => { 
      editor.resize() 
    });

    return () => {
      window.removeEventListener('resize', () => { editor.resize() });
      editor.close();
    }
  }, []);



function takeshot(dataToSend) {
  let div =
      document.getElementById('photo');

  // Use the html2canvas
  // function to take a screenshot
  // and append it
  // to the output div
  html2canvas(div).then(
      function (canvas) {
          console.log(canvas)
          var snap = canvas
          var flatten = snap.getContext('2d');
          var img = snap.toDataURL();
          console.log(snap.toDataURL())
          var file = dataURItoBlob(img)
          //fileChanged(canvas)
          //var dataURL = canvas.toDataURL('image/jpeg', 0.5);
          //var blob = dataURItoBlob(dataURL);
          //var fd = new FormData(document.forms[0]);
          var random = Math.floor(Math.random() * 100000) + 100
          var settingName = id + random + ".png"
          let data = new FormData(document.forms[0])
          data.append('file', file, settingName)
          //fd.append("canvasImage", blob);
          console.log(data)
          createAudioFile(data)
          handleDataSending(dataToSend, settingName)
          /*
          canvas.toBlob(function(blob) {
            var newImg = document.createElement('img'),
                url = URL.createObjectURL(blob);
          
            newImg.onload = function() {
              // no longer need to read the blob so it's revoked
              URL.revokeObjectURL(url);
            };
          
            newImg.src = url;
            document.body.appendChild(newImg);
            console.log(newImg)
          });
          */
      })
}
function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
  else
      byteString = unescape(dataURI.split(',')[1]);
  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], {type:mimeString});
  }

/*
const fileChanged = (canvas, data) => {
    //var testingFileChange  = e.target.files[0]
    //testingFileChange.name = "hi"
    //var file = testingFileChange;
    var blob = canvas;
    var random = Math.floor(Math.random() * 100000) + 100
    var settingName = id + random + ".png"
    var newFile = new File([blob], settingName, {type: 'image/png'});
    console.log(newFile)
    setNewName(settingName)
    setReferenceName(settingName)
    const f = newFile
    //setFile(f)
    uploadFile(newFile, data, settingName)
  }

 const uploadFile = async (newFile, data, settingName) => {
    console.log("got hit")
    let fileData = new FormData();
    fileData.append('file', newFile);
    console.log(newFile)
    //console.log(data)
    createAudioFile(fileData)
    handleDataSending(data, settingName)
    /*
    fetch('/api/files', {
      method: 'POST',
      body: data
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          this.loadFiles();
        } else {
          alert('Upload failed');
        }
      });
      
  }
  */

  const handleDataSending = async(data, settingName) => {
   //formik.values.answerContent = data

   data.studentId = data.studentId.id
   data.teacherId = location.state.teacherId
   data.coursetype = location.state.coursetype
   data.name = studentDataValues.name
   data.email = studentDataValues.email
   data.referenceName = settingName
   //formik.values.referenceName = settingName
   console.log(data)
   createAnswers(data)
   history.push(`/student/results-category-students/${id}`)
  }
    /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  
  /*useEffect(() => {
    const fetchTodo = async () => {
      const blogstitle = await getPlacementTestblogstitle(`${props.match.params._id}`)
      setblogstitle(blogstitle)
    }
    fetchTodo()
  }, []);
  */
  const onSubmit = async (data) => {
    data = formik.values
    await takeshot(data) 
    //await handleDataSending(data)
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           name:'',
           email:'',
           grade: location.state.grade,
           coursetype:'',
           answertype: location.state.answertype,
           questionContent: location.state.questioncontent,
           questionTitle: location.state.questiontitle,
           totalMarks: location.state.totalmarks,
           answerContent:'',
           marksObtained: '',
           teacherRemarks: '',
           teacherId: '',
           studentId: {id},
           questionId: location.state._id,
           referenceName :''
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property
        
        validate: values => {
            
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            return errors


        }


    })

    const handleEditor = (e) => {
      e.preventDefault()
      editorRef.current.editor.export_()
      //console.log(JSON.stringify(evt.detail))
    }

    console.log("Form errors", formik.errors)
    return (
      
        <>
        <div>
<div className = "mt-5 pt-4">
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Content</h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white">{location.state.questiontitle}</h6>
      </div>
      <div className="card-body">
      {location.state.questioncontent}
      </div>
    </div>
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white">Answer</h6>
      </div>
      <div className="card-body">
      
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label><h6 className = "text-white">Write your Answer to above Question below</h6></label>
                      </div>
                      <hr />
                  </div>
                  <div class="spacer"></div>
                   <div className="buttonNewTheme mt-3 mb-2">
                      <button id="undo" className="btn btn-outline-primary" style={{height:"80px", width:"80px"}} disabled>
                      <i className="fas fa-undo-alt fa-2x"></i>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button id="redo" className="btn btn-outline-primary" style={{height:"80px", width:"80px"}} disabled>
                      <i className="fas fa-redo-alt fa-2x"></i>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button id="clear" className="btn btn-outline-primary" style={{height:"80px", width:"80px"}} disabled>
                      <i className="fas fa-trash-alt fa-2x"></i>
                      </button>
                    </div>
                    {/*}
                    <button class="classic-btn" id="exportContent" onClick={(e) => handleEditor(e)} >Export</button>
                    */}
                    <div id = "photo">
                    <div style={editorStyle} ref={editorRef} touch-action="none">
                    </div>
                    </div>
                    <div id = "export-result">
                    </div>
                    
                    <div className="containerSass mt-3 mb-2">
                        <button className="btn btn-outline-primary" onClick = {(e) => onSubmit(e)}>
                        Submit Answer
                        </button>
                    </div>
                 
      </div>
    </div>
  </div>
  {/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-white">
  <div className="containerBlackDashboard my-auto">
    <div className="copyright text-center my-auto">
      <span></span>
    </div>
  </div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
      </div>
         
      
    </>
    )  
}

export default HandwritingForStudent
