import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getEmails } from "../Apis/apiForEmails"

function ContactDetailsForStudent() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const emails = await getEmails()
        setItems(emails)
      }
      fetchItems()
    })
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Emails</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                        <h3>Email List</h3>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Text</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(emails => (
                                <tr key={emails._id}>
                                <td>
                                    {emails.name}
                                </td>
                                <td>
                                    {emails.email}
                                </td>
                                <td>
                                    {emails.country_code}
                                </td>
                                <td>
                                    {emails.phone}
                                </td>
                                <td>
                                    {emails.subject}
                                </td>
                                <td>
                                    {emails.text}
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

export default ContactDetailsForStudent
