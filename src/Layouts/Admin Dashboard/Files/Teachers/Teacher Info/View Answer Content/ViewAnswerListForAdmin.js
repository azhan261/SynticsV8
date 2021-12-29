import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation , useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswerSpecificQuestion } from '../../../Apis/apiForAnswers';


function ViewAnswerListForAdmin() {
  let {id} = useParams()
  const location = useLocation();
  const [items, setItems] = useState([])
  var serialNumber = 0
  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getAnswerSpecificQuestion(location.state._id)
      console.log(contents)
      setItems(contents)
    }
    fetchItems()
  }, []);

  const history = useHistory()
  const handleOnClick = (data) => {
      console.log(data)
      console.log(id)
      if(( data.answertype == "Handwriting") || (data.answertype == "Drawing") || (data.answertype == "Audio") || (data.answertype == "Video")){
        history.push({
          pathname:`/admin/view-current-answer-attachments/${id}`,
          state: data
        })
      }
      else {
        history.push({
          pathname:`/admin/view-current-answer-standard/${id}`,
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
const onBackClick = (e) => {
  e.preventDefault()
  history.push(`/admin/course-category/${id}`)
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
      <h6 className="m-0 font-weight-bold text-white" className = "text-white">List of Answers to Questions</h6>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
        <thead>
                            <tr>
                            <th>Serial Number</th>
                            <th>Name</th>
                            <th>Question Title</th>
                            <th>Answer Type</th>
                            <th>Total Marks</th>
                            <th>Obtained Marks</th>
                            <th>Comments</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(contents => (
                                <tr key={contents._id}>
                                  {handlingSerialNumber()}
                                  <td>
                                    {contents.name}
                                  </td>
                                  <td>
                                      {contents.questionTitle}
                                  </td>
                                 
                                  <td>
                                      {contents.answertype}
                                  </td>
                                  <td>
                                      {contents.totalMarks}
                                  </td>
                                  <td>
                                      {contents.marksObtained}
                                  </td>
                                  <td>
                                      {contents.teacherRemarks}
                                  </td>
                                  <td>
                                    <div className="">
                                      <button className="btn btn-outline-primary" onClick={() => handleOnClick(contents)}>View Answer</button>
                                    </div>
                                  </td>
                                  
                                  </tr>
                            ))
                            }
                        </tbody>  
        </table>
        <center>
                    <div>    
                    <div className="">
                      <button type="submit" className="btn btn-outline-primary" onClick = {(e) => onBackClick(e)}>
                        Back
                      </button>
                    </div>
                  </div>
                  </center>
      </div>
    </div>
  </div>
</div>

{/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}

{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
    </>
   
  )
}

export default ViewAnswerListForAdmin
