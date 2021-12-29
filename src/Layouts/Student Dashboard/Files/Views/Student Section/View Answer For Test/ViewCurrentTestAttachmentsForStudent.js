import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';

function ViewCurrentTestAttachmentsForStudent() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()
    const onBackClick = (e) => {
        e.preventDefault()
        history.push(`/teacher/list-of-classes/${id}`)
    }
    
    const handlingAttachments = () => {
        if(location.state.answertype == "Drawing"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.questionReferenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForImg(res.data),)
                const rezzingFileForImg = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(response);
                    if(document.getElementById('imgReference') != null){
    document.getElementById('imgReference').setAttribute('src', imageUrl)
    document.getElementById('imgReference').src = imageUrl
  }
                  }
            
            return(
                <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Attachments</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            <img id = "imgReference" width="350" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold",  boxShadow: "5px 5px #888888"}} >
                            </img>
                        </div>
                        <hr />
                    </div>
            )
        }
        else if(location.state.answertype == "Audio"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.questionReferenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForCv(res.data),)
                const rezzingFileForCv = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var cvUrl = urlCreator.createObjectURL(response);
                    if(document.getElementById('audioReference') != null){
    document.getElementById('audioReference').setAttribute('src', cvUrl)
    document.getElementById('audioReference').src = cvUrl
  }
                  }
            return(
                <div className = "mt-4">
                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                    <label >Attachments</label>
                </div>
                <div class="p-3 mb-2 bg-light text-dark">
                    <audio id = "audioReference"   controls="controls" className="" type="audio/mpeg"  />
                </div>
                <hr />
            </div> 
            )
        }
        else if(location.state.answertype == "Video"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.questionReferenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForVid(res.data),)
                const rezzingFileForVid = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var vidUrl = urlCreator.createObjectURL(response);
                    if(document.getElementById('vidReference') != null){
    document.getElementById('vidReference').setAttribute('src', vidUrl)
    document.getElementById('vidReference').src = vidUrl
  }
                  }
            return(
                <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Attachments</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            <video id = "vidReference" controls width="400"   type="video/webm" />
                        </div>
                        <hr />
                    </div>
            )
        }
        else if(location.state.answertype == "Upload a File"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.questionReferenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForVid(res.data),)
                const rezzingFileForVid = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var vidUrl = urlCreator.createObjectURL(response);
                    if(document.getElementById('vidReference') != null){
    document.getElementById('vidReference').setAttribute('href ', vidUrl)
    document.getElementById('vidReference').href = vidUrl
  };
                  }
            return(
                <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Attachments</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            <a id = "vidReference"  className ="text-dark" style={{fontWeight:'bold', textDecoration: 'none'}} >{location.state.questionReferenceName}</a>
                        </div>
                        <hr />
                    </div>
            )
        }
        
    }
    const handlingAnswerAttachments = () => {
        if(location.state.answertype == "Drawing"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.referenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForImg(res.data),)
                const rezzingFileForImg = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(response);
                    document.querySelector("#imgAnswerReference").src = imageUrl;
                  }
            
            return(
            <div className = "mt-4">
            <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                <label >Attachments</label>
            </div>
            <div class="p-3 mb-2 bg-light text-dark">
                <img id = "imgAnswerReference" width="350" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold",  boxShadow: "5px 5px #888888"}} >
                </img>
            </div>
            <hr />
        </div>
            )
        }
        else if(location.state.answertype == "Upload a File"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.referenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForImg(res.data),)
                const rezzingFileForImg = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(response);
                    document.querySelector("#imgAnswerReference").href = imageUrl;
                  }
            
            return(
            <div className = "mt-4">
            <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                <label >Answer Attachments</label>
            </div>
            <div class="p-3 mb-2 bg-light text-dark">
            <a id = "imgAnswerReference"  className ="text-dark" style={{fontWeight:'bold', textDecoration: 'none'}} >{location.state.referenceName}</a>
            </div>
            <hr />
        </div>
            )
        }
        else{
            return(
                <div className = "mt-4">
                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                    <label >Answer Content</label>
                </div>
                <div class="p-3 mb-2 bg-light text-dark">
                    {location.state.answerContent}
                </div>
                <hr />
            </div>
            )

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
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Content</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
      <h6 className="m-0 font-weight-bold text-white">View Clicked Content</h6>
    </div>
    <div className="card-body">
    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Course Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.coursetype}
                        </div>
                        <hr />
                    </div>
                   
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Answer Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.answertype}
                        </div>
                        <hr />
                    </div>
                        
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Question Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questionTitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Question Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questionContent}
                        </div>
                        <hr />
                    </div>
                    {handlingAttachments()}
                    {handlingAnswerAttachments()}
                  <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Total Marks</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.totalMarks}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Marks Obtained</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.marksObtained}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Teacher's Comment</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.teacherRemarks}
                        </div>
                        <hr />
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

export default ViewCurrentTestAttachmentsForStudent
