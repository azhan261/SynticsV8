import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getRegistrations } from '../Apis/apiForRegistrations';
import Sidebar from './Sidebar';
import Results from './Student Section/Results';
import axios from 'axios';

function HomeForStudent() {
    const [items, setItems] = useState([])
    const history = useHistory()
    useEffect(() => {
      const fetchItems = async function() {
        const registrations = await getRegistrations()
        setItems(registrations)
      }
      fetchItems()
    })

    const handleOnClick = (data) => {
      {/*}
        history.push({
            pathname:"/answer-list",
            state : data
        })
      */}
    }


    
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>registrations</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                        <h3>registrations List</h3>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Country Code</th>
                            <th>Country</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(registrations => (
                                <tr key={registrations._id}>
                                <td>
                                    {registrations.name}
                                </td>
                                <td>
                                    {registrations.email}
                                </td>
                                <td>
                                    {registrations.gender}
                                </td>
                                <td>
                                    {registrations.dob}
                                </td>
                                <td>
                                    {registrations.country_code}
                                </td>
                                <td>
                                    {registrations.country}
                                </td>
                                <td>
                                <button className="btn btn-dark" onClick={() => handleOnClick(registrations)}>Check Answers</button>
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

export default HomeForStudent
