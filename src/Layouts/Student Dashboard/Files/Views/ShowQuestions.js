import React from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
function ShowQuestions(props) {
    return (
        <div>
            <div className="content">
            <Row>
            <Col md="12">
                <Card className="card-plain">
                <CardHeader>Questions</CardHeader>
                <CardBody>
                    <div>
                    <h1 className="text-center display-5">List of Questions</h1>
                        <table className="table table-bordered" style={{backgroundColor:"white"}}>
                            <tr>
                                <th>ID</th>
                                <th>Question 1</th>
                                <th>Question 2</th>
                                <th>Question 3</th>
                                <th colspan="2">Action</th>
                            </tr>
                            {props.question.length > 0 ? (
                                props.question.map((question) => (
                                    <tr>
                                        <td>{question.id}</td>
                                        <td>{question.q1}</td>
                                        <td>{question.q2}</td>
                                        <td>{question.q3}</td>
                                        <td><button onClick={() => {props.editdata(question)}} className="btn btn-outline-primary">Edit</button></td>
                                        <td><button onClick={() => props.delemp(question.id)} className="btn btn-outline-danger">Delete</button></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5}>No Questions Found</td>
                                </tr>
                            )}
                        </table>
                    </div>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </div>
        </div>
    )
}

export default ShowQuestions
