import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswersGrade4 } from '../../../../Apis/apiForAnswers';


function Grade4ContentAnswersForTeacher() {
    const history = useHistory()
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchItems = async function() {
          const contents = await getAnswersGrade4()
          setItems(contents)
        }
        fetchItems()
      }, []);

      const handleOnClickAnswers = (data) => {
 
        history.push({
            pathname:"/"
        })
      }
    return (
        <div>
           <Row>
          <Col md="12">
            <Card className="card-plain  text-center ">
              <CardHeader>
                <h2>Subject Content</h2></CardHeader>
              <CardBody>
                <div className="container-fluid">
                    <div>
                        <div>
                        <h4 className="mb-3">List of Content related Questions</h4>
                        </div>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Student's Name</th>
                            <th>Question's title</th>
                            <th>Marks Given</th>
                            <th>Total Marks</th>
                            <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(contents => (
                                <tr key={contents._id}>
                                <td>
                                    {contents.name}
                                </td>
                                <td>
                                    {contents.questionTitle}
                                </td>
                                <td>
                                    {contents.marksObtained}
                                </td>
                                <td>
                                    {contents.totalMarks}
                                </td>
                                <td>
                                    <button className="btn btn-success" onClick={() => handleOnClickAnswers(contents)}>View Student's Answer</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
                <div>

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>   
        </div>
    )
}

export default Grade4ContentAnswersForTeacher
