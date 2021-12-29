import React, { useState, useEffect } from 'react'
import { Row, Col } from "reactstrap";
import {BrowserRouter as Router, Switch, Link, Route, useHistory, useParams} from 'react-router-dom' 
import { CDBBtn, CDBContainer } from "cdbreact";
//import "../../../ResultCategory.scss"

function NotificationsCategoryForStudent() {
    let {id} = useParams()
    const history = useHistory()

    const onCreateClick = (e) => {
      e.preventDefault(e)
      history.push({
          pathname: `/student/notifications-subject-students/${id}`,
          state : e.target.value
        
        })
    }
  
    const onViewClick = (e) => {
      e.preventDefault(e)

      history.push({
        pathname: `/student/notifications-subject-students/${id}`,
        state : e.target.value
      
      })
    }
      return (
 
    <>
  <div>
   {/* Content Wrapper */}
  <div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
  {/* Main Content */}
  <div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
  {/* Page Heading */}
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Category of Query</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
  <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
  <h6 className="m-0 font-weight-bold text-white">Select A Category</h6>
  </div>
  <div className="card-body">
  <Row className="mt-3">
      <Col md="6">
      <div >
                              <button className="" style = {{fontWeight : "bold", height: "90px", width: "90px" }}
                              value = "Create" onClick={(e) => onCreateClick(e)}>
                                    Query <br /> List
                              </button>
                            </div>
        </Col>
        <Col md="6">
        <div >
                              <button className="" style = {{fontWeight : "bold", height: "90px", width: "90px" }} value = "View" onClick={(e) => onViewClick(e)}>
                                    Create Query
                              </button>
                            </div>
        </Col>
        </Row>
        
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
  </div>
  </>     
      )
}

export default NotificationsCategoryForStudent
