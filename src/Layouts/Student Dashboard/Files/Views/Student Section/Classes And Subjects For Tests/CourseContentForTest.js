
import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createTestPlannings } from '../../Apis/apiForTestContentPlanning';

function CourseContentForTestForStudent() {
 
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getCoursePlanningsForGrade1()
      setItems(contents)
    }
    fetchItems()
  }, []);

  const history = useHistory()
  const handleOnClick = (data) => {
    if ((data.answertype == "Simple Text")){
      history.push({
        pathname:"/view-question-type-qa",
        state: data
      })
    }
    else if ((data.answertype == "Handwriting")){
      history.push({
        pathname:"/view-question-type-handwriting",
        state: data
      })
    }
    else if ((data.answertype == "Pronunciation")){
      history.push({
        pathname:"/view-question-type-pronunciation",
        state: data
      })
    }
    else if ((data.answertype == "Multiple Choice")){
      history.push({
        pathname:"/view-question-type-mcq",
        state: data
      })
    }
    else if ((data.answertype == "Fill in the Blanks")){
      history.push({
        pathname:"/view-question-type-blanks",
        state: data
      })
    }
  }
  
  return (
      <>
      <div>
        <Row>
          <Col md="12">
            <Card className="card-plain text-center">
              <CardHeader>Course Content</CardHeader>
              <CardBody>
                <div className="container-fluid">
                    <div className="mt-3">
                        <h3>List of Content related Questions</h3>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Course Name</th>
                            <th>Question's Title</th>
                            <th>Activity Type</th>
                            <th>Question Type</th>
                            <th>Answer Type</th>
                            <th>Marks of Question</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(contents => (
                                <tr key={contents._id}>
                                <td>
                                    {contents.coursetype}
                                </td>
                                <td>
                                    {contents.questiontitle}
                                </td>
                                <td>
                                    {contents.activitytype}
                                </td>
                                <td>
                                    {contents.questiontype}
                                </td>
                                <td>
                                    {contents.answertype}
                                </td>
                                <td>
                                    {contents.totalmarks}
                                </td>
                                
                                <td>
                                    <button className="btn btn-dark" onClick={() => handleOnClick(contents)}>View Question / Submit Answer</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
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

export default CourseContentForTestForStudent
