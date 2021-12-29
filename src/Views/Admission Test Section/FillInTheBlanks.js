import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswers } from '../../Apis/apiForAdmissionTestAnswers';

function FillInTheBlanks() {
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
      useEffect(() => {
          const fetchItems = async function() {
              var contents = location.state
              console.log(location.state.optionsQuestionFillInTheBlank[0].options)
          }
          fetchItems() 
      }, [])
             /*const { register, handleSubmit } = useForm({
      defaultValues: { text: todo ? todo.text : "" },
    });*/
  
    /*const submitHandler = handleSubmit((data) => {
      onSubmit(data)
    });*/
    const log = (data) => {
        if (editorRef.current) {
          data.answerContent = editorRef.current.getContent({ format: "text" });
          console.log(data)
          //createAnswers(data)
          //history.push("/answer-list")
        }
    };
  
    /*useEffect(() => {
      const fetchTodo = async () => {
        const blogstitle = await getPlacementTestblogstitle(`${props.match.params._id}`)
        setblogstitle(blogstitle)
      }
      fetchTodo()
    }, []);
    */
    const onSubmit = async (data) => {
        data.answerContent = data.optionsQuestionFillInTheBlank
        data.optionsQuestionFillInTheBlank = location.state.optionsQuestionFillInTheBlank
        location.state.answerContent = data.answerContent
        console.log(data)
        createPlacements(location.state)
        history.push("/placement-questions")
    }
  
      //1 Start of by making initial values 
      const formik = useFormik({
          initialValues: {
             name:'',
             optionsQuestionFillInTheBlank: location.state.optionsQuestionFillInTheBlank,
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
                      <div class="p-3 mb-2 bg-light text-dark">
                                {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                                <input type="radio" name="optionsQuestionFillInTheBlank" id="option1" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.optionsQuestionFillInTheBlank[0].options} className="form-control"   />
                                <label for = "option1">{location.state.optionsQuestionFillInTheBlank[0].options}</label>
                                <input type="radio" name="optionsQuestionFillInTheBlank" id="option2" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.optionsQuestionFillInTheBlank[1].options} className="form-control"   />
                                <label for = "option2">{location.state.optionsQuestionFillInTheBlank[1].options}</label>
                                <input type="radio" name="optionsQuestionFillInTheBlank" id="option3" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.optionsQuestionFillInTheBlank[2].options} className="form-control"   />
                                <label for = "option3">{location.state.optionsQuestionFillInTheBlank[2].options}</label>
                                <input type="radio" name="optionsQuestionFillInTheBlank" id="option4" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.optionsQuestionFillInTheBlank[3].options} className="form-control"  />
                                <label for = "option4">{location.state.optionsQuestionFillInTheBlank[3].options}</label>
                                {formik.errors.totalmarks && formik.touched.totalmarks ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.totalmarks}</div>) : null}
                          </div>
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

export default FillInTheBlanks
