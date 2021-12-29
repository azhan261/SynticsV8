import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createCoursePlannings } from '../Apis/apiForCoursePlanning'

function CoursePlanningContentForStudent() {
         /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()

  const onSubmitHandler = () => {
    history.push('/course-planning-question-details')
  }
  const onSubmit = async (data) => {
    console.log(data)

    //await createQuestions(data)
    await createCoursePlannings(data)
    //redirecting 
    //history.push("/")
  };

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           coursetype:'',
           activitytype:'',
           questiontype:'',
           answertype:'',
           question:'',
           totalmarks:''
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)
          onSubmitHandler()

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
                            <option >1. Adult Training </option>
                            <option >2. Junior Training</option>
                            <option >3. Junior Courses Self study + 1 group class / month </option>
                            <option >4. Junior Courses Self study + 1  group class / week </option>
                            <option >5. Junior Courses Self study + 1 one 1 - 1 class / month </option>
                            <option >6. Junior Courses Self study + one 1 - 1 class / week</option>
                            <option >7. General English Self study + 1 group class / month</option>
                            <option >8. General English Self study + 1 group class / week</option>
                            <option >9. General English Self study + one 1 - 1 class / month</option>
                            <option >10. General English Self study + one  1 - 1 class / week</option>
                            <option >11. Business Self study + 1 group class per month</option>
                            <option >12. Business Self study + 1 group class per week</option>
                            <option >13. Business Self study + one 1 - 1 class per month</option>
                            <option >14. Buisness Self study + one 1 - 1 class per week</option>
                            <option >15. Examination Preparation Self study plus one group class per month</option>
                            <option >16. Examination Self study plus one group class per week</option>
                            <option >17. Examination Self study plus one 1 to 1 class per month</option>
                            <option >18. Self study plus one 1 to 1 class per weekh</option>
                            <option >19. IELTS Self study plus twenty two group classes per month</option>
                            <option >20. IELTS Self study plus twenty two group classes per month</option>
                            <option >21. Self study plus one group class per month</option>
                            <option >22. Self study plus one group class per week</option>
                            <option >23. Self study plus one 1 to 1 class per week</option>
                            <option >24. Self study plus one 1 to 1 class per month</option>
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
                            <option>Add Text</option>
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
                            <option>Prnounciation</option>
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



export default CoursePlanningContentForStudent
