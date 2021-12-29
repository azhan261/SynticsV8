import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getOneFile } from '../../Apis/apiForFileTest';
import axios from 'axios';

function ViewStudentInfoManager() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()
    const onBackClick = (e) => {
        e.preventDefault()
        history.push(`/teacher/list-of-classes/${id}`)
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Student Info</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white"></h6>
      </div>
      <div className="card-body">
         
      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Full Name</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.name}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Gender</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.gender}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Date Of Birth</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.dob}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Email</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.email}
                          </div>
                          <hr />
                      </div>
                    
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Contact</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.country_code}-{location.state.phone} 
                          </div>
                          <hr />
                      </div>
                     
                     
                     
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Description</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.discription}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Address</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.address}
                          </div>
                          <hr />
                      </div>
                      
                     
                   
                </div>
                <center>
                        <div>
                             
                        {/*}    
                        <div className="">
                          <button type="submit" className="btn btn-outline-primary" onClick = {(e) => onBackClick(e)}>
                            Back to Grades
                          </button>
                        </div>
                        */}
                      </div>
                      </center>
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

export default ViewStudentInfoManager
