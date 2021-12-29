import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation  } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswersBlanks } from '../../Apis/apiForAnswers';

function ViewAnswersBlanksForTeacher() {
     
    const location = useLocation();
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAnswersBlanks()
        console.log(contents)
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClick = (data) => {
      console.log(data)
          history.push({
            pathname:"/teacher/view-current-answer",
            state: data
          })
    }
    return (
        <>
        <div>
          <>
        <div>
         {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Answers</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white">List of Student Answers</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Question Title</th>
                              <th>Total Marks</th>
                              <th>Obtained Marks</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
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
                                      <button className="btn btn-dark" onClick={() => handleOnClick(contents)}>View Answer</button>
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
      
        </div>
      </>
    )
}

export default ViewAnswersBlanksForTeacher
