import React, { useState, useEffect } from 'react'
import { Row, Col } from "reactstrap";
import {BrowserRouter as Router, Switch, Link, Route, useHistory, useLocation, useParams} from 'react-router-dom' 
import { CDBBtn, CDBContainer } from "cdbreact";
//import "../../../ResultCategory.scss"

function ActivityCategoryForAdminForTeacher() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()
    
    const onSubjectClick = (e) => {
      e.preventDefault(e)
      history.push({
          pathname:`/admin/teacher-activity/${id}`,
          state: location.state
        })
    }
  
    const onTestClick = (e) => {
      e.preventDefault(e)
      history.push({
        pathname:`/admin/teacher-activity-test/${id}`,
        state: location.state
      })
    }
    const onAssignmentClick = (e) => {
      e.preventDefault(e)
      history.push({
        pathname:`/admin/teacher-activity-assignments/${id}`,
        state: location.state
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
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Category of Teacher Activity</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
  <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
  <h6 className="m-0 font-weight-bold text-white">Select A Category</h6>
  </div>
  <div className="card-body">
  <Row className="mt-3">
      <Col md="4">
      <div className = "text-center">
                              <button className="btn btn-outline-primary" style = {{fontWeight : "bold", }} onClick={(e) => onSubjectClick(e)}>
                              Activity <br />of <br /> Content
                              </button>
                            </div>
        </Col>
        <Col md="4">
        <div className = "text-center">
                              <button className="btn btn-outline-primary" style = {{fontWeight : "bold",  }} onClick={(e) => onTestClick(e)}>
                              Activity <br />of <br /> Tests
                              </button>
                            </div>
        </Col>
        <Col md="4">
        <div className = "text-center">
                              <button className="btn btn-outline-primary" style = {{fontWeight : "bold",  }} onClick={(e) => onAssignmentClick(e)}>
                              Activity <br />of <br /> Assignments
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

export default ActivityCategoryForAdminForTeacher
