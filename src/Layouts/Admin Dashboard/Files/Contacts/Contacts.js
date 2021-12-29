import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Link, useHistory, useRouteMatch, useLocation  } from "react-router-dom";
import { getContacts } from '../Apis/apiForContactUs';


function ContactsForAdmin() {
    const [items, setItems] = useState([])
    const history = useHistory()
    useEffect(() => {
      const fetchItems = async function() {
        const contacts = await getContacts()
        setItems(contacts)
      }
      fetchItems()
    })

    const handleOnClick = (data) => {
      history.push({
          pathname:"/view-contact-details",
          state: data
        })
      }
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>contacts</CardHeader>
              <CardBody>
                <div className="container text-center">
                    <div className="mt-3">
                        <h3>Query List</h3>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country Code</th>
                            <th>Phone</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(contacts => (
                                <tr key={contacts._id}>
                                <td>
                                    {contacts.name}
                                </td>
                                <td>
                                    {contacts.email}
                                </td>
                                <td>
                                    {contacts.country_code}
                                </td>
                                <td>
                                    {contacts.phone}
                                </td>
                                <td>
                                    <button className = "btn btn-dark" onClick={() => handleOnClick(contacts)}>View Query</button>
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

export default ContactsForAdmin
