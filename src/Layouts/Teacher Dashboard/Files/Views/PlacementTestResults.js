import React, { useState, useEffect }  from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getPlacements} from "../Apis/apiForPlacement"

function PlacementTestResultsForTeacher() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const placements = await getPlacements()
        setItems(placements)
      }
      fetchItems()
    })
    return (
        <>
        <div className="container-fluid">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>Placements</CardHeader>
                <CardBody>
                      <div className="mt-3">
                          <h3>Placements List</h3>
                          <table className="table table-striped mt-3">
                          <thead>
                              <tr>
                              <th>Full Name</th>
                              <th>Gender</th>
                              <th>Date of Birth</th>
                              <th>Email</th>
                              <th>Country Code</th>
                              <th>Phone</th>
                              <th>Country</th>
                              <th>Age Group</th>
                              <th colSpan="3">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(placements => (
                                  <tr key={placements._id}>
                                  <td>
                                      {placements.name}
                                  </td>
                                  <td>
                                      {placements.gender}
                                  </td>
                                  <td>
                                      {placements.dob}
                                  </td>
                                  <td>
                                      {placements.email}
                                  </td>
                                  <td>
                                      {placements.country_code}
                                  </td>
                                  <td>
                                      {placements.phone}
                                  </td>
                                  <td>
                                      {placements.country}
                                  </td>
                                  <td>
                                      {placements.ageGroup}
                                  </td>
                                  <td>
                                    <button className="btn btn-dark">View Test</button>
                                </td>
                                <td>
                                    <button className="btn btn-dark">Create Placement Test</button>
                                </td>
                                  </tr>
                              ))
                              }
                          </tbody>
                          </table>
                      </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
      )
}

export default PlacementTestResultsForTeacher
