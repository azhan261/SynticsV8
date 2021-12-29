import React, { useState, useEffect }  from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getPersonalInfos } from "../Apis/apiForPersonalInfo"

function PersonalInfoData() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const personalInfos = await getPersonalInfos()
        setItems(personalInfos)
      }
      fetchItems()
    })
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Personal Information Requests</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                        <h3>Information List</h3>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Text</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(personalInfos => (
                                <tr key={personalInfos._id}>
                                <td>
                                    {personalInfos.name}
                                </td>
                                <td>
                                    {personalInfos.email}
                                </td>
                                <td>
                                    {personalInfos.country}
                                </td>
                                <td>
                                    {personalInfos.user}
                                </td>
                                <td>
                                    {personalInfos.enduser}
                                </td>
                                <td>
                                    {personalInfos.administrator}
                                </td>
                                <td>
                                    {personalInfos.employee}
                                </td>
                                <td>
                                    {personalInfos.unsubscribe}
                                </td>
                                <td>
                                    {personalInfos.removeCard}
                                </td>
                                <td>
                                    {personalInfos.deletePersonalData}
                                </td>
                                <td>
                                    {personalInfos.others}
                                </td>
                                <td>
                                    {personalInfos.requestdetails}
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

export default PersonalInfoData
