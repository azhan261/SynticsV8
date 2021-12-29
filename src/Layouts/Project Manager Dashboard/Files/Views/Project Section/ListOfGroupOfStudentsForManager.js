import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getStudentGroups, updateStudentGroup } from '../Apis/apiForStudentGroups';

import axios from 'axios';

function ListOfGroupOfStudentsForManager() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()
    const [items, setItems] = useState([])
    var serialNumber = 0
    
    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getStudentGroups()
        setItems(contents)
      }
      fetchItems()
    }, []);
    
    const onBackClick = (e) => {
        e.preventDefault()
        history.push(`/teacher/list-of-classes/${id}`)
    }

      const handleAssignProject = (data) => {
        updateStudentGroup(data)
      }
      const handlingSerialNumber = () => {
        serialNumber = serialNumber + 1
        return(
            <td>{serialNumber}</td>
        )
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Assign Project</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white"></h6>
      </div>
      <div className="card-body">
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Project Title</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.projectTitle}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Project Type</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.projectType}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Description</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.projectDescription}
                          </div>
                          <hr />
                      </div>
                </div>     
    </div>
    <div className="card shadow mb-4">
        <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
          <h6 className="m-0 font-weight-bold text-white">List Of {/*{location.state.gender}*/} projects</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
            <thead>
                              <tr>
                                <th>Serial Number</th>
                                <th>Group Name</th>
                                <th>Group Lead</th>
                                <th>Group Members</th>
                                <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(students => (
                                  <tr key={students._id}>
                                   {handlingSerialNumber()}
                                  <td>
                                      {students.studentsGroupName}
                                  </td>
                               
                                  <td>
                                      {students.studentsGroupLeadName}
                                  </td>
                                  <td>
                                      {students.studentMembers}
                                  </td>
                                  <td>
                                      <button className="btn btn-outline-primary"  onClick={() => handleAssignProject(students)}>Assign Project</button>
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
        </div>
      </>
    )
}

export default ListOfGroupOfStudentsForManager
