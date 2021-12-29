
import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createTestPlannings } from '../../Apis/apiForTestContentPlanning';

function CourseContentForTestForTeacher() {
           /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()

 
  const onSubmitHandler = async (data) => {
    
    
    if ((data.coursetype == "English") && (data.questiontype === "Text") && (data.answertype === "Text")){
      history.push({
        pathname:"/course-content-text-qa-test",
        state: data
      })
    }
    else if ((data.coursetype == "English") && (data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
      history.push({
        pathname:"/course-content-text-mcq-test",
        state: data
      })
    }
    else if ((data.coursetype == "English") && (data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:"/course-content-text-blanks-test",
        state: data
      })
    } else if ((data.coursetype == "English") && (data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:"/course-content-text-pronunciation-test",
        state: data
      })
    }
    else if ((data.coursetype == "English") && (data.questiontype === "File Upload")){
      history.push({
        pathname:"/course-content-file-upload-test",
        state: data
      })
    }
    else if ((data.coursetype == "English") && (data.questiontype === "Text") && (data.answertype === "Handwriting")){
      history.push({
        pathname:"/course-content-text-handwriting-test",
        state: data
      })
    }
    
    //history.push('/placement-question-details')
  }
  
  /*const onSubmit = async (data) => {
    //console.log(data)
    await createTestPlannings(data)
    //await createQuestions(data)
    //await createPlacementTestQuestions(data)
    //redirecting 
    //history.push("/")
  };
  */
    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           coursetype:'',
           activitytype:'',
           questiontype:'',
           answertype:'',
           questioncontent:'',
           totalmarks:'',
           grade:'',
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          //onSubmit(formik.values)
          onSubmitHandler(formik.values)

        },

        //5 Make validation property


    })

    console.log("Form errors", formik.errors)
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Test Content Questions</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                    <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                          <label htmlFor="sel1">Course Type</label>
                          <select name="coursetype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.coursetype} className="form-control" >
                            <option>Select Course Type</option>
                            <option>English</option>
                          </select>
                          {formik.touched.coursetype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.coursetype}</div>) : null}
                        </div>
                        <div className="form-group">
                          <label htmlFor="sel1">Class Grade</label>
                          <select name="grade" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.grade} className="form-control" >
                            <option>Select Class Grade</option>                  
                            <option >Grade 1</option>
                            <option >Grade 2</option>
                            <option >Grade 3</option>
                            <option >Grade 4</option>
                            <option >Grade 5</option>
                            <option >Grade 6</option>
                            <option >Grade 7</option>
                            <option >Grade 8</option>
                            <option >Grade 9</option>
                            <option >Grade 10</option>
                            <option >Grade 11</option>
                            <option >Grade 12</option>
                          </select>
                          {formik.touched.grade ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.grade}</div>) : null}

                        </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Question Type</label>
                          <select name="questiontype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.questiontype} className="form-control" >
                          <option>Select Question Type</option>                  
                            <option>Text</option>
                            <option>File Upload</option>
                          </select>
                          {formik.touched.questiontype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.questiontype}</div>) : null}
                        </div>
                      </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Answer Type</label>
                          <select name="answertype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.answertype} className="form-control" >
                          <option>Select Answer Type</option>                  
                            <option>Multiple Choice</option>
                            <option>Video</option>
                            <option>Audio</option>
                            <option>Text</option>
                            <option>Fill in the Blanks</option>
                            <option>Pronunciation</option>
                          </select>
                          {formik.touched.answertype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.answertype}</div>) : null}
                        </div>
                      </div>
                      <center>
                      <button type="submit" className="btn btn-dark">
                        Create Test Questions
                      </button>
                    </center>
                    </form>
                    </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )
}

export default CourseContentForTest
