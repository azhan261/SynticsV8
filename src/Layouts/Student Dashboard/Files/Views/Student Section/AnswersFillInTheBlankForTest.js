import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswers } from '../../Apis/apiForAnswers';

function AnswersFillInTheBlankForTest() {
            
    const [items, setItems] = useState([])
    const location = useLocation();

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAnswers()
        setItems(contents)
        console.log(location.state.optionsQuestionFillInTheBlank[0])
      }
      fetchItems()
    }, []);

    const history = useHistory()
    return (
            
        <div>
        <div className = "mt-5 pt-4">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid">
            {/* Page Heading */}
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Test Content Answers</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white">{location.state.questionTitle}</h6>
              </div>
              <div className="card-body">
                            <div>
                                {location.state.questionContent}
                            </div>
                            <div>{location.state.optionsQuestionFillInTheBlank[0].options}</div>
                            <div>{location.state.optionsQuestionFillInTheBlank[1].options}</div>
                            <div>{location.state.optionsQuestionFillInTheBlank[2].options}</div>
                            <div>{location.state.optionsQuestionFillInTheBlank[3].options}</div>
              </div>
            </div>
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white">Your Answer</h6>
              </div>
              <div className="card-body">
                          <div className = "mt-4"> 
                              <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                                  <label><h6 className = "text-white">{location.state.answerContent}</h6></label>
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
              </div>
    )
}

export default AnswersFillInTheBlankForTest
