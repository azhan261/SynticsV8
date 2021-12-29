import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
//import { getOneFile } from '../../Apis/apiForFileTest';
import axios from 'axios';

function ViewProjectDetailForAdmin() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()
    const [items, setItems] = useState([])
  /*
    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getOneFile(location.state.imgReference)
        setItems(contents)
      }
      fetchItems()
    }, []);
    */
    const onBackClick = (e) => {
        e.preventDefault()
        history.push(`/teacher/list-of-classes/${id}`)
    }
    const timerId = setTimeout(() => {
        chartsData()
      }, 1500);

      const chartsData = () => {
        fileForProject()
        }

        const fileForProject = () => {
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.projectAttachmentsReference}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForProject(res.data),)
                
        }
      const rezzingFileForProject = (response) => {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(response);
        document.querySelector("#projectAttachments").href = imageUrl;
      }
     
      const onAssignClick = (e) => {
          history.push({
              pathanme: `/manager/list-of-groups-for-projects/${id}`,
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Project Info</h1>
    
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
                              <label >Project Start Date</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.projectStartDate}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Project Due Date</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.projectDueDate}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Project Status</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.projectStatus}
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
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Attachments</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              <a id = "projectAttachments" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold"}}>{location.state.projectAttachmentsReference}</a>
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Students Assign to Project</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                             
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

export default ViewProjectDetailForAdmin
