import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import * as iink from 'iink-js';
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswers } from '../../Apis/apiForAdmissionTestAnswers';

function Handwriting() {
    const location = useLocation();
    const history = useHistory()
    const editorRef = useRef(null);
    const editorStyle = {
        'minHeight': '100px',
        'height': 'calc(100vh - 190px)',
        'touchAction': 'none',
    };

      useEffect(() => {
          const fetchItems = async function() {
              var contents = location.state
          }
          fetchItems()
          let editor = editorRef.current;
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
                },
            },
        });
            window.addEventListener('resize', () => { 
            editor.resize() 
            });

            return () => {
            window.removeEventListener('resize', () => { editor.resize() });
            editor.close();
            } 
            }, [])
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
             answertype: location.state.answertype,
             questionContent: location.state.questioncontent,
             questionTitle: location.state.questiontitle,
             totalMarks: location.state.totalmarks,
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
  
      console.log("Form errors", formik.errors)
      return (
        
          <>
        <div className="content">
          <Row>
            <Col md="12">
            <Card className="card-plain">
                  <CardHeader>{location.state.questiontitle}</CardHeader>
                  <CardBody>
                      {location.state.questioncontent}
                  </CardBody>
                  </Card>
              <Card className="card-plain">
                <CardHeader>Answer</CardHeader>
                <CardBody>
                      <div className="mt-3">
                      <form onSubmit={formik.handleSubmit}>
                      <div>
                      <label htmlFor>Type your Answer to above Question below</label>
                      </div>
                      <div style={editorStyle} ref={editorRef} touch-action="none">
                      </div>
                      <center>
                        <button type="submit" className="btn btn-dark mt-2">
                          Submit Answer
                        </button>
                      </center>
                      </form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
      )  
}

export default Handwriting
