import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getOneFile } from '../../Apis/apiForFileTest';
import axios from 'axios';

function ViewTeacherInfo() {
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
        fileForImg()
        fileForCv()
        fileForVid()

        }

        const fileForImg = () => {
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.imgReference}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForImg(res.data),)
                
        }

        const fileForCv = () => {
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.cvReference}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForCv(res.data),)
                
          }
          const fileForVid = () => {
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.vidReference}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForVid(res.data),)
                
          }
      const rezzingFileForImg = (response) => {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(response);
        if(document.getElementById('imgReference') != null){
    document.getElementById('imgReference').setAttribute('src', imageUrl)
    document.getElementById('imgReference').src = imageUrl
  }
      }
      const rezzingFileForCv = (response) => {
        var urlCreator = window.URL || window.webkitURL;
        var cvUrl = urlCreator.createObjectURL(response);
        document.querySelector("#cvReference").href = cvUrl;
      }
      const rezzingFileForVid = (response) => {
        var urlCreator = window.URL || window.webkitURL;
        var vidUrl = urlCreator.createObjectURL(response);
        if(document.getElementById('vidReference') != null){
    document.getElementById('vidReference').setAttribute('src', vidUrl)
    document.getElementById('vidReference').src = vidUrl
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Teacher Info</h1>
    
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
                              <label >Nationality</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.nationality}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Country of Residence</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.country}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Description</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              {location.state.description}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Curriculum Vitae</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                              <a id = "cvReference" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold"}}>{location.state.cvReference}</a>
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Image</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                          <img id="imgReference" width="350" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold",  boxShadow: "5px 5px #888888"}}/>
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                              <label >Video</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                          <video id="vidReference" controls width="400"  type="video/webm" />
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

export default ViewTeacherInfo
