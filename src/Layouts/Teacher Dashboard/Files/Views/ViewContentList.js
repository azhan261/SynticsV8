import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getCourseContents, deleteCourseContent } from "../Apis/apiForCourseContent"




function ViewContentListForTeacher() {
   
  
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getCourseContents()
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClickEdit = (data) => {
      history.push({
        pathname:"/view-question-type-qa-edit",
        state: data
      })
    }
    const handleOnClickDelete = (data) => {
      axios.delete('https://syntics.co/coursePlannings/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    
    return (
        <>
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
                              
                              <th>Content Name</th>
                              <th>Question Type</th>
                              <th>Answer Type</th>
                              <th>Marks of Question</th>
                              <th colSpan="2">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                    <td>
                                    
                                  </td>
                                  <td>
                                      {contents.coursetype}
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
                                      <button className="btn btn-dark" style={{width:"70px"}} onClick={() => handleOnClickEdit(contents)}>Edit</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-danger" onClick={() => handleOnClickDelete(contents)}>Delete</button>
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

export default ViewContentListForTeacher
