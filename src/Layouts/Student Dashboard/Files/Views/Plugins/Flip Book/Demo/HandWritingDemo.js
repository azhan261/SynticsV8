import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import * as iink from 'iink-js';
import { useRouteMatch, useHistory, useLocation, useParams } from "react-router-dom";
//import { createAnswers } from '../../../../Apis/apiForAnswers';

function HandWritingDemoStudentsLinguistics() {
    const location = useLocation();
    const history = useHistory()
    const editorRef = useRef(null);
        const editorStyle = {
      'minWidth': '100px',
      'minHeight': '100px',
      'width': '200px',
      'height': '200px',
      'touchAction': 'none',
    };

    useEffect(() => {
      
      const resultElement = document.getElementById('export-result')
      const exportElement = document.getElementById('exportContent');
      //const textArea = document.getElementById('textArea')
      //console.log(textArea.value)
      let editor = editorRef.current;

      editor.addEventListener('exported', evt => {
        var stringTest = JSON.stringify(evt.detail.exports)
        var stringSearch = stringTest.search('"text/plain":')
        var sliceIt = stringTest.slice(stringSearch)
        var removingStuff = sliceIt.replace('"text/plain":' , '')
        var removingParanthesis = removingStuff.replace("}", '')
        var finalString = removingParanthesis
        console.log(removingParanthesis)
        //resultElement.innerHTML = removingParanthesis
        const exports = evt.detail.exports;
        handleDataSending(finalString)
        console.log(exports)
        console.log({exports})
       });

      editor = iink.register(editorRef.current, {
    
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
    const handleDataSending = (data) => {
     //location.state.answerContent = data
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
             //answertype: location.state.answertype,
             //questionContent: location.state.questioncontent,
             //questionTitle: location.state.questiontitle,
             //totalMarks: location.state.totalmarks,
             answerContent:'',
             marksObtained: '',
             teacherRemarks: '',
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
  
      const handleEditor = () => {

        editorRef.current.editor.export_()
        //console.log(JSON.stringify(evt.detail))
      }
  
      console.log("Form errors", formik.errors)
      return (
        
          <>
        <div className="content">
     
          <div>
        <div className >
                      {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid">
            {/* Page Heading */}
            <h1 className="h3BlackDashboard text-gray-800"></h1>
            {/* DataTales Example */}
            <div className="card shadow text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
              </div>
              <div className="card-body">
                <div>
                <div>
        
                      <div class="spacer"></div>
                      {/*<button class="classic-btn" id="exportContent" onClick={() => handleEditor()} ></button> */}
                      <div style={editorStyle} ref={editorRef} touch-action="none">
                      </div>
                  </div>
                </div>
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
        </div>
      </>
      )  
}

export default HandWritingDemoStudentsLinguistics
