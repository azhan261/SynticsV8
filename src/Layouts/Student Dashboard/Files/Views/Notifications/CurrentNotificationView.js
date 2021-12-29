import React, { useState, useEffect, useRef }  from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";

function CurrentNotificationViewForStudent() {
    useEffect(() => {
        console.log(location.state)
    }, [])
    const location = useLocation();
    return (
        <div>
            <div className="content">
            <Row>
              <Col md="12">
                <Card className="card-plain">
                  <CardHeader>Notification</CardHeader>
                  <CardBody> 
                        <Card className="card-plain">
                            <CardHeader>
                                <h2>
                                {location.state.notificationTitle}
                                </h2>
                            </CardHeader>
                            <CardBody> 
                                {location.state.notificationsContent}
                            </CardBody>
                        </Card>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
    )
}

export default CurrentNotificationViewForStudent
