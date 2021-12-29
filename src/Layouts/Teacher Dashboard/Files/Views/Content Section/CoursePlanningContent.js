import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createCoursePlannings } from '../../Apis/apiForCoursePlanning'

function CoursePlanningContentForTeacher() {
         /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()

 
  const onSubmitHandler = async (data) => {
    if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Text")){
      history.push({
        pathname:"/course-content-text-qa",
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
      history.push({
        pathname:"/course-content-text-mcq",
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:"/course-content-text-blanks",
        state: data
      })
    } else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Pronunciation")){
      history.push({
        pathname:"/course-content-text-pronunciation",
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Handwriting")){
      history.push({
        pathname:"/course-content-text-handwriting",
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.answertype === "File Upload")){
      history.push({
        pathname:"/course-content-file-upload",
        state: data
      })
    }
    //history.push('/placement-question-details')
  }
  /*const onSubmit = async (data) => {
    //console.log(data)
    await createCoursePlannings(data)
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
           totalmarks:''
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
              <CardHeader>Questions</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                    <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                          <label htmlFor="sel1">Course Type</label>
                          <select name="coursetype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.coursetype} className="form-control" >
                            <option>Select Course Type</option>                  
                            <option >Adult Training </option>
                            <option >Junior Training</option>
                            <option >Junior Courses Self study + 1 group class / month </option>
                            <option >Junior Courses Self study + 1  group class / week </option>
                            <option >Junior Courses Self study + 1 one 1 - 1 class / month </option>
                            <option >Junior Courses Self study + one 1 - 1 class / week</option>
                            <option >General English Self study + 1 group class / month</option>
                            <option >General English Self study + 1 group class / week</option>
                            <option >General English Self study + one 1 - 1 class / month</option>
                            <option >General English Self study + one  1 - 1 class / week</option>
                            <option >Business Self study + 1 group class per month</option>
                            <option >Business Self study + 1 group class per week</option>
                            <option >Business Self study + one 1 - 1 class per month</option>
                            <option >Buisness Self study + one 1 - 1 class per week</option>
                            <option >Examination Preparation Self study plus one group class per month</option>
                            <option >Examination Self study plus one group class per week</option>
                            <option >Examination Self study plus one 1 to 1 class per month</option>
                            <option >Self study plus one 1 to 1 class per weekh</option>
                            <option >IELTS Self study plus twenty two group classes per month</option>
                            <option >IELTS Self study plus twenty two group classes per month</option>
                            <option >Self study plus one group class per month</option>
                            <option >Self study plus one group class per week</option>
                            <option >Self study plus one 1 to 1 class per week</option>
                            <option >Self study plus one 1 to 1 class per month</option>
                          </select>
                          {formik.touched.coursetype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.coursetype}</div>) : null}
                        </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Activity Type</label>
                          <select name="activitytype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.activitytype} className="form-control" >
                          <option>Select Activity Type</option>                  
                            <option>Listening Activity</option>
                            <option>Writing Activity</option>
                            <option>Reading Activity</option>
                            <option>Speaking Activity</option>
                          </select>
                          {formik.touched.activity ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.activity}</div>) : null}
                        </div>
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
                            <option>Handwriting</option>
                          </select>
                          {formik.touched.answertype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.answertype}</div>) : null}
                        </div>
                      </div>
                      <center>
                      <button type="submit" className="btn btn-dark">
                        Create Questions
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



export default CoursePlanningContentForTeacher
