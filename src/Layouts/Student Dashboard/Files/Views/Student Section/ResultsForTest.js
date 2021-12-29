import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation, useParams  } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswerSpecificWithSubjectTest } from '../../Apis/apiForAnswersTest';
import axios from 'axios';

function ResultsForTestForStudents() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()
    const [answers, setAnswers] = useState([])
    const [items, setItems] = useState([])
    const [totalOfTotalMarks, setTotalOfTotalMarks] = useState()
    const [totalOfObtainedMarks, setTotalOfObtainedMarks] = useState()
    var serialNumber = 0
    
    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAnswerSpecificWithSubjectTest(id)
        console.log(contents)
        setAnswers(contents)
      }
      fetchItems()
    }, []);

    const timerId = setTimeout(() => {
      sumOfValues()
    }, 3000);
    
    const sumOfValues = () => {
      var arrForTotalMarks = [];
      var arrForTotalObtainedMarks = [];
      var totForTotalMarks = 0;
      var totForTotalObtainedMarks = 0;
      for(var i=0;i<answers.length;i++){
        arrForTotalMarks.push(answers[i].totalMarks)
      }
      for(var i=0;i<answers.length;i++){
        if(answers[i].marksObtained == ""){
          answers[i].marksObtained = 0
        }
        arrForTotalObtainedMarks.push(answers[i].marksObtained)
      }
      for(var i=0;i<arrForTotalMarks.length;i++){
        totForTotalMarks +=  parseInt(arrForTotalMarks[i]);
      }
      for(var i=0;i<arrForTotalObtainedMarks.length;i++){
        totForTotalObtainedMarks +=  parseInt(arrForTotalObtainedMarks[i]);
      }
      console.log(arrForTotalObtainedMarks)
      setTotalOfTotalMarks(totForTotalMarks)
      setTotalOfObtainedMarks(totForTotalObtainedMarks)
      
    }
    
    const handleOnClick = (data) => {
      console.log(data)
      if((data.answertype == "Video") || (data.answertype == "Audio") || (data.answertype == "Drawing") || (data.answertype == "Upload a File")){
        
        history.push({
          pathname : `/student/view-current-answer-attachment-test/${id}`,
          state: data
        })
      }
      else{

        //history.push(`/admin/classes/${id}`)
        
        history.push({
          pathname : `/student/view-current-answer-test/${id}`,
          state: data
        })
        
      }
 
    }
    const handlingSerialNumber = () => {
    serialNumber = serialNumber + 1
    return(
        <td>{serialNumber}</td>
    )
  }
    return  (
        <>
        <div>
         {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Results Of Tests</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white">List of Answers to Test Questions</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Serial Number</th>
                              <th>Course</th>
                              <th>Question Title</th>
                              <th>Total Marks</th>
                              <th>Obtained Marks</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                      
                              {
                              answers.map(contents => (
                                  <tr key={contents._id}>
                                    {handlingSerialNumber()}  
                                  <td>
                                      {contents.coursetype}
                                  </td>
                                  <td>
                                      {contents.questionTitle}
                                  </td>
                                  <td>
                                      {contents.totalMarks}
                                  </td>
                                  <td>
                                      {contents.marksObtained}
                                  </td>
                                
                                  <td>
                                    <div className="">
                                      <button className="btn btn-outline-primary"   onClick={() => handleOnClick(contents)}>View</button>
                                    </div>
                                  </td>
                                  </tr>
                              ))
                              }
                               <tr>
                                <td><b>Total:</b> </td>
                                <td></td>
                                <td></td>
                                <td>{totalOfTotalMarks}</td>
                                <td>{totalOfObtainedMarks}</td>
                                <td></td>
                              </tr>
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

export default ResultsForTestForStudents
