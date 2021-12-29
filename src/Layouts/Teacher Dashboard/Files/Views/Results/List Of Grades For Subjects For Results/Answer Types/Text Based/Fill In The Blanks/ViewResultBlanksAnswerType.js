import React, { useState, useEffect, useRef }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation  } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { updateAnserReview } from '../../../../../../Apis/apiForAnswers';

function ViewResultBlanksAnswerTypeForTeacher() {
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()

    const log = (data) => {
        if (editorRef.current) {
          console.log(data,)
         var contentFromTextArea = editorRef.current.getContent({ format: "text" });
         data.teacherRemarks = contentFromTextArea
         location.state.marksObtained = data.marksObtained
         location.state.teacherRemarks = data.teacherRemarks
         console.log(location.state)
         updateAnserReview(location.state, location.state._id)
         if (location.state.grade == "Grade 1"){
            history.push("/Grade-1-content-results-answers")
         } else if (location.state.grade == "Grade 2"){
            history.push("/Grade-2-content-results-answers")
         } else if (location.state.grade == "Grade 3"){
            history.push("/Grade-3-content-results-answers")
         } else if (location.state.grade == "Grade 4"){
            history.push("/Grade-4-content-results-answers")
         } else if (location.state.grade == "Grade 5"){
            history.push("/Grade-5-content-results-answers")
         } else if (location.state.grade == "Grade 6"){
            history.push("/Grade-6-content-results-answers")
         } else if (location.state.grade == "Grade 7"){
            history.push("/Grade-7-content-results-answers")
         } else if (location.state.grade == "Grade 8"){
            history.push("/Grade-8-content-results-answers")
         } else if (location.state.grade == "Grade 9"){
            history.push("/Grade-9-content-results-answers")
         } else if (location.state.grade == "Grade 10"){
            history.push("/Grade-10-content-results-answers")
         } else if (location.state.grade == "Grade 11"){
            history.push("/Grade-11-content-results-answers")
         } else if (location.state.grade == "Grade 12"){
            history.push("/Grade-12-content-results-answers")
         }
        }
        
    };
   
    const onSubmit = async (data) => {
        await log(data)
  
      }
      const formik = useFormik({
        initialValues: {
           marksObtained: '',
           teacherRemarks:''
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property
        
        validate: values  => {

            var totalMarksToInt = parseInt(location.state.totalMarks)
    
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            if(!values.marksObtained){
                errors.marksObtained = "Please enter Total Marks"
            }else if (!phone.test(values.marksObtained)) {
                errors.marksObtained = "Please enter digits only"
            }else if (symbols.test(values.marksObtained)) {
                errors.marksObtained = "Please enter digits only"
            }else if (values.marksObtained > totalMarksToInt) {
              errors.marksObtained = "Given for the Answer cannot exceed total marks of the Question"
          }
            return errors


        }


    })
    return (
        <>
        <div className="container-fluid">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>Answer Checking Panel</CardHeader>
                <CardBody>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Question's Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.questionTitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Question's Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.questionContent}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Total Marks</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.totalMarks}
                        </div>
                        <hr />
                    </div>
                </CardBody>
              </Card>
              <Card className="card-plain mt-2">
                <CardBody>
                    <div className = "mt-4">
                    <div class="p-3 mb-2 bg-dark text-white">
                            <label >Student's Answer</label>
                        </div>
                        <div class="p-3 mb-2 bg-info text-white">
                            {location.state.answerContent}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Marks given to Student</label>
                        </div>
                            <form onSubmit={formik.handleSubmit}>
                            <div>
                                <div class="p-3 mb-2 bg-info text-white">
                                    {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                                    <input type="text" placeholder="Obtained Marks" name="marksObtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.marksObtained} className="form-control" required  />
                                    {formik.errors.marksObtained && formik.touched.marksObtained ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.marksObtained}</div>) : null}
                                </div>
                            </div>
                            <hr />
                            <div className = "mt-4">
                                <div class="p-3 mb-2 bg-dark text-white">
                                    <label >Teacher's Remarks</label>
                                </div>
                                <div class="p-3 mb-2 bg-info text-white">
                                <Editor
                                        apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue=""
                                        init={{
                                        height: 500,
                                        browser_spellcheck : true,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                </div>
                                <hr />
                            </div>
                            <button type="submit" className="btn btn-dark mt-2">
                                Submit Marks and Review
                            </button>
                        </form>
                        <hr />
                    </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    )
}

export default ViewResultBlanksAnswerTypeForTeacher
