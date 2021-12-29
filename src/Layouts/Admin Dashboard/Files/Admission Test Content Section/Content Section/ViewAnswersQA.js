import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation  } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswersQA } from '../../Apis/apiForAnswers';

function ViewAnswersQAForAdmin() {
     
    const location = useLocation();
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAnswersQA()
        console.log(contents)
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClick = (data) => {
      console.log(data)
          history.push({
            pathname:"/view-current-answer",
            state: data
          })
    }
    return (
        <>
        <div>
          <Row>
            <Col md="12">
              <Card className="card-plain text-center">
                <CardHeader>Content</CardHeader>
                <CardBody>
                  <div className="container-fluid">
                      <div className="mt-3">
                          <h3>List of Answers to Questions</h3>
                          <table className="table table-striped mt-3">
                          <thead>
                              <tr>
                              <th>Question Title</th>
                              <th>Total Marks</th>
                              <th>Obtained Marks</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                  <td>
                                      {contents.questionTitle}
                                  </td>
                                  <td>
                                      {contents.totalMarks}
                                  </td>
                                  <td>
                                      {contents.marksObtained}
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" onClick={() => handleOnClick(contents)}>View Answer</button>
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

export default ViewAnswersQAForAdmin
