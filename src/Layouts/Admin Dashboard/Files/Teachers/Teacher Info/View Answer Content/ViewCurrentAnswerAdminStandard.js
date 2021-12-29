import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function ViewCurrentAnswerAdminStandard() {
        
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()
    const onBackClick = (e) => {
        e.preventDefault()
        history.push(`/teacher/list-of-classes/${id}`)
    }
    console.log(location.state)
    const handlingQuestionContent = () => {
        if (location.state.answertype == "Multiple Choice"){
            return(
                <div>
                     <textarea disabled className = "w-100 p-3" style={{height:'300px'}} value={location.state.questioncontent}   >
                    </textarea>
                    <hr />
                    <ul  className = "text-left p-3">
                        <li>{location.state.optionsQuestionMcq[0].options}</li>
                        <li>{location.state.optionsQuestionMcq[1].options}</li>
                        <li>{location.state.optionsQuestionMcq[2].options}</li>
                        <li>{location.state.optionsQuestionMcq[3].options}</li>
                    </ul>
                </div>
            )
        }
        else if(location.state.answertype == "Fill in the Blanks"){
            return( 
            <div>
                 <textarea disabled className = "w-100 p-3" style={{height:'300px'}} value={location.state.questioncontent}   >
                    </textarea>
                <hr />
                <ul  className = "text-left p-3">
                    <li>{location.state.optionsQuestionFillInTheBlank[0].options}</li>
                    <li>{location.state.optionsQuestionFillInTheBlank[1].options}</li>
                    <li>{location.state.optionsQuestionFillInTheBlank[2].options}</li>
                    <li>{location.state.optionsQuestionFillInTheBlank[3].options}</li>
                </ul>
            </div>
            )
        }
        else{
            return(
            <div>
                    <div>
                        {location.state.questionContent}
                    </div>
            </div>
            )
        }
    }

    const handlingAnswerContent = () => {
       
            return(
                <div>
                    <div>
                        {location.state.answerContent}
                    </div>
                    <hr />
                </div>
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
                            {handlingQuestionContent()}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Answer Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {handlingAnswerContent()}
                        </div>
                        <hr />
                    </div>
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

export default ViewCurrentAnswerAdminStandard
