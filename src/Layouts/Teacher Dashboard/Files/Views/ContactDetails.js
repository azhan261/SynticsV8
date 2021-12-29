import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getEmails } from "../Apis/apiForEmails"
import "../../sb-admin-2.css"

function ContactDetailsForTeacher() {
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
      
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Emails</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">List Of Emails</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered" id="dataTable" width="100%" cellSpacing={0}>
            <thead>
              <tr>
              <th>Text</th>
              <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>Text</th>
              <th>Action</th>
              </tr>
            </tfoot>
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
    </div>
  </div>
  {/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-white">
  <div className="containerBlackDashboard my-auto">
    <div className="copyright text-center my-auto">
      <span></span>
    </div>
  </div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
    </>
    )
}

export default ContactDetailsForTeacher
