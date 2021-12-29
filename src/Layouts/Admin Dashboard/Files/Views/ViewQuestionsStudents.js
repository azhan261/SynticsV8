import React, { useState, useEffect }   from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import {getCoursePlannings} from '../Apis/apiForCoursePlanning';
import AudioPlugin from './AudioPlugin';
import Layout from '../Layout/Layout'
import Layoutnew from '../Layout/Layoutnew'


function ViewQuestionsStudentsForAdmin() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const viewquestions = await getCoursePlannings()
        setItems(viewquestions)
      }
      fetchItems()
    })
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Questions List</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                        <h3>Questions List</h3>
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                          <tr>
                            <th>Course</th>
                            <th>Activity</th>
                            <th>Question Type</th>
                            <th>Select Answer Type</th>
                            <th> Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(viewquestions => (
                                <tr key={viewquestions._id}>
                                <td>
                                    {viewquestions.coursetype}
                                </td>
                                <td>
                                    {viewquestions.activitytype}
                                </td>
                                <td>
                                    {viewquestions.questiontype}
                                </td>
                                <td>
                                    {viewquestions.answertype}
                                </td>
                                <td>
                                  <button className="btn btn-dark">View Question</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        
                        </table>
                        <div>
                          <AudioPlugin />
                        </div>
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

export default ViewQuestionsStudentsForAdmin
