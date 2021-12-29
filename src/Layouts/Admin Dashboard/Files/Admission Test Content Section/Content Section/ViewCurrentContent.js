import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function ViewCurrentContentForAdmin() {
  
    const location = useLocation();
    const history = useHistory()

    return (
        <>
        <div className="container-fluid">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader></CardHeader>
                <CardBody>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Course Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.coursetype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Activity Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.activitytype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Question Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questiontype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Answer Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.answertype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Question Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questiontitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Question Content</label>
                        </div>
                        <textarea disabled className = "w-100 p-3" style={{height:'300px'}} value={location.state.questioncontent}   >
                        </textarea>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Total Marks</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.totalmarks}
                        </div>
                        <hr />
                    </div>
                </CardBody>
              </Card>
              <div className = "mt-2">
              <Link className="btn btn-dark" to="/content-list">
              Back to List of Content
              </Link>
              <Link className="btn btn-light ml-4" to="/answer-list">
              Edit Content
              </Link>
              </div>
            </Col>
          </Row>
        </div>
      </>
    )
}

export default ViewCurrentContentForAdmin
