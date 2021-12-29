
import React, { useState, useEffect }  from 'react'
import { useRouteMatch, useHistory, useLocation, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { getTestPlanningsForGrade7 } from '../../../Apis/apiForTestContentPlanning';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./timerStyle.css";

function Grade7ContentTestForStudent() {
  let {id} = useParams()
  var serialNumber = 0
  const [items, setItems] = useState([])
  const location = useLocation();
  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getTestPlanningsForGrade7(location.state)
      setItems(contents)
    }
    fetchItems()
  }, []);

  const history = useHistory()
  const handleOnClick = (data) => {
    if ((data.answertype == "Simple Text")){
      history.push({
        pathname:`/student/view-question-type-qa-test/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Handwriting")){
      history.push({
        pathname:`/student/view-question-type-handwriting-test/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Pronunciation")){
      history.push({
        pathname:`/student/view-question-type-pronunciation-test/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Multiple Choice")){
      history.push({
        pathname:`/student/view-question-type-mcq-test/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Fill in the Blanks")){
      history.push({
        pathname:`/student/view-question-type-blanks-test/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Video")){
      history.push({
        pathname:`/student/view-question-type-video-test/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Audio")){
      history.push({
        pathname:`/student/view-question-type-audio-test/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Digital Urdu")){
      history.push({
        pathname:`/student/view-question-type-digitalUrdu-test/${id}`,
        state: data
      })
    }
    
    else if ((data.answertype == "Drawing")){
      history.push({
        pathname:`/student/view-question-type-drawing-test/${id}`,
        state: data
      })
    }
  }
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  const handlingSerialNumber = () => {
    serialNumber = serialNumber + 1
    return(
    <td>{serialNumber}</td>
    )
}
  const handleCompletion = (e) => {
    /*
        if(location.state.grade == 'Grade 1'){
          history.push({
            pathname:"/Grade-1-content-test"
          })
        }
    */
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
<h1 className="h3BlackDashboard mb-2 text-gray-800">Online Test</h1>

{/* DataTales Example */}
<div className="card shadow mb-4">
  <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
    <h6 className="m-0 font-weight-bold text-white">List of Test related Questions</h6>
  </div>
  <div>
    <div >
              <div />
             <div className="timer-wrapper">
              <CountdownCircleTimer
                   isPlaying
                   duration={100}
                   colors={[
                     ['#004777', 0.33],
                     ['#F7B801', 0.33],
                     ['#A30000', 0.33],
                   ]}
                  onComplete={(e) => handleCompletion(e)}
                >
                   {renderTime}
                {/*{({ remainingTime }) => remainingTime}*/}
                </CountdownCircleTimer>
                </div>
                </div>
    </div>
  <div className="card-body">
  <div className="table-responsive">
      <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
      <thead>
                            <tr>
                            <th>Serial Number</th>
                            
                            <th>Content Name</th>
                            <th>Question Title</th>
                            <th>Question Type</th>
                            <th>Answer Type</th>
                            <th>Total Marks of Question</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                          items != null ? items.map(contents => (
                                <tr key={contents._id}>
                                  {handlingSerialNumber()}
                                  <td>
                                  
                                </td>
                                <td>
                                    {contents.coursetype}
                                </td>
                                <td>
                                    {contents.questiontitle}
                                </td>
                                <td>
                                    {contents.questiontype}
                                </td>
                                <td>
                                    {contents.answertype}
                                </td>
                                <td>
                                    {contents.totalmarks}
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn btn-outline-primary"  onClick={() => handleOnClick(contents)}>View Question</button>
                                  </div>
                                </td>
                                </tr>
                            )) : 
                            <tr>
                                <td></td>
                            </tr>
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

export default Grade7ContentTestForStudent
