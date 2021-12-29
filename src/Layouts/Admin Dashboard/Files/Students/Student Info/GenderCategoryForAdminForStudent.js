import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link, useParams } from "react-router-dom";


function GenderCategoryForAdminForStudent() {
  let {id} = useParams()
  const location = useLocation();
  const history = useHistory()
  
 
  const handleOnClick = (e) => {
    e.preventDefault(e)
    if(e.target.value == "Male"){
      history.push({
        pathname:`/admin/student-info-table/${id}`,
        state: "Male"
      })
    }
    else if(e.target.value == "Female"){
   
      history.push({
        pathname:`/admin/student-info-table/${id}`,
        state: "Female"
      })
    }
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
<h1 className="h3BlackDashboard mb-2 text-gray-800">Category of Gender</h1>

{/* DataTales Example */}
<div className="card shadow mb-4">
<div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
<h6 className="m-0 font-weight-bold text-white">Select A Category</h6>
</div>
<div className="card-body">
<Row className="mt-3">
    <Col md="6">
    <div className = "text-center" >
                            <button className="btn btn-primary text-cenm"  value = "Male" onClick={(e) => handleOnClick(e)}>
                            Male <br /> Students
                            </button>
                          </div>
      </Col>
      <Col md="6">
      <div className = "text-center">
                            <button className="btn btn-outline-primary"   value = "Female" onClick={(e) => handleOnClick(e)}>
                            Female <br /> Students
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

export default GenderCategoryForAdminForStudent
