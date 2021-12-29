import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import * as iink from 'iink-js';
import html2canvas from 'html2canvas';
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswers } from '../../../../../Apis/apiForAnswers';
import { createAudioFile } from '../../../../../Apis/apiForAudioSending';
import { getRegisterationStudentsById } from '../../../../../Apis/apiForRegistrations';
import { getFileSpecific } from '../../../../../Apis/apiForGridFs';


function HandwritingSubjectForFlipBook() {
  let {id} = useParams()
  const location = useLocation();
  const history = useHistory()
  const editorRef = useRef(null);
  const [file, setFile] = useState()
  const [studentDataValues, setStudentDataValues] = useState([])

      const editorStyle = {
    'minWidth': '100px',
    'minHeight': '100px',
    'width': '420px',
    'height': '550px',
    'touchAction': 'none',
  };

  useEffect(() => {
    
    const fetchStudentData = async function() {
      const studentData = await getRegisterationStudentsById(id)
      console.log(studentData)
      setStudentDataValues(studentData)
    }
    fetchStudentData()
    const fetchFile = async function() {
      const fileContent = await getFileSpecific(location.state.referenceName)
      console.log(fileContent)
      setFile(fileContent[0].filename)
      console.log(file)
    }
    fetchFile() 

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
            //handleDataSending(dataToSend, settingName)
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

  const handleDataSending = (data) => {
   formik.values.answerContent = data
   formik.values.studentId = data.studentId.id
   formik.values.teacherId = location.state.teacherId
   formik.values.name = studentDataValues.name
   formik.values.email = studentDataValues.email
   console.log(formik.values)
   //createAnswers(location.state)
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
    //await log(data)
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           name:'',
           email: '',
           answertype: location.state.answertype,
           questionContent: location.state.questioncontent,
           questionTitle: location.state.questiontitle,
           totalMarks: location.state.totalmarks,
           answerContent:'',
           marksObtained: '',
           teacherRemarks: '',
           teacherId: '',
           studentId: {id},
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
<div className = "">
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-body">
      <form onSubmit={formik.handleSubmit}>
      <div class="spacer"></div>
                   <div className=" mt-3 mb-2">
                      <button id="undo" type="button" class="btn btn-outline" style={{borderRadius: "50%", width:'50px', height:'50px', boxShadow:'10px'}} disabled>
                      <i className="fas fa-undo-alt "></i>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button id="redo" type="button" class="btn btn-outline" style={{borderRadius: "50%", width:'50px', height:'50px'}} disabled>
                      <i className="fas fa-redo-alt "></i>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button id="clear" type="button" class="btn btn-outline" style={{borderRadius: "50%", width:'50px', height:'50px'}} disabled>
                      <i className="fas fa-trash-alt "></i>
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
                  </form>
      </div>
    </div>
  </div>
  {/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}

{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
      </div>
         
      
    </>
    )  
}

export default HandwritingSubjectForFlipBook
