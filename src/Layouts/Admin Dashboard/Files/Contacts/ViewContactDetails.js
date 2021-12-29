import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation  } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function ViewContactDetailsForAdmin() {
       
    const location = useLocation();
    const [items, setItems] = useState([])
    const history = useHistory()

    const handleOnClick = (data) => {
      console.log(data)
      history.push({
          pathname:"/answer-query",
          state: data
        })
        
      }
    return (
        <>
        <div>
          <Row>
            <Col md="12">
              <Card className="card-plain text-center">
                <CardHeader>Query  Details</CardHeader>
                <CardBody>
                  <div className="container-fluid">
                    <div className = "mt-4">
                            <div class="p-3 mb-2 bg-dark text-white">
                                <label >Questioner's Name</label>
                            </div>
                            <div class="p-3 mb-2 bg-light text-dark">
                                {location.state.name}
                            </div>
                            <hr />
                    </div>
                    <div className = "mt-4">
                            <div class="p-3 mb-2 bg-dark text-white">
                                <label >Questioner's Email</label>
                            </div>
                            <div class="p-3 mb-2 bg-light text-dark">
                                {location.state.email}
                            </div>
                            <hr />
                    </div>
                    <div className = "mt-4">
                            <div class="p-3 mb-2 bg-dark text-white">
                                <label >Questioner's Query</label>
                            </div>
                            <div class="p-3 mb-2 bg-light text-dark">
                                {location.state.message}
                            </div>
                            <hr />
                    </div>
                    <div className = "mt-4">
                            <div class="p-3 mb-2">
                                <button className = "btn btn-dark" onClick={() => handleOnClick(location.state)}>
                                  Answer Query
                                </button>
                            </div>
                            <hr />
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

export default ViewContactDetailsForAdmin
