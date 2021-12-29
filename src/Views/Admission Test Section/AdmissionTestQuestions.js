import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAdmissionTestQuestion } from '../../Apis/apiForAdmissionTestQuestions';

function AdmissionTestQuestions() {
   
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getAdmissionTestQuestion()
      setItems(contents)
    }
    fetchItems()
  }, []);
  const location = useLocation();
  const history = useHistory();
  const handleOnClick = (data) => {
    location.state.answertype = data.answertype
    location.state.questionContent = data.questioncontent
    location.state.questionTitle = data.questiontitle
    location.state.totalMarks = data.totalmarks
    var dataToBeSent = location.state

    if ((data.answertype == "Simple Text")){
      history.push({
        pathname:"/view-question-type-qa",
        state: dataToBeSent
      })
    }
    else if ((data.answertype == "Pronunciation")){
      history.push({
        pathname:"/view-question-type-pronunciation",
        state: dataToBeSent
      })
    }
    else if ((data.answertype == "Multiple Choice")){
      history.push({
        pathname:"/view-question-type-mcq",
        state: dataToBeSent
      })
    }
    else if ((data.answertype == "Fill in the Blanks")){
      history.push({
        pathname:"/view-question-type-blanks",
        state: dataToBeSent
      })
    }
  }
    return (
        <div>
      <section id="header-bootom">
        <section id="services-section" style={{margin: '10px'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8 col-sm-2">
                {/*  <table id="example" class="display" style="width:100%"> */}
                <table className="table  table-hover general-table" id="example">
                          <thead>
                              <tr>
                              <th>Question's Title</th>
                              <th>Activity Type</th>
                              <th>Question Type</th>
                              <th>Answer Type</th>
                              <th>Marks of Question</th>
                              <th>Obtained Marks</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                  <td>
                                      {contents.questiontitle}
                                  </td>
                                  <td>
                                      {contents.activitytype}
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
                                      {contents.obtained}
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" onClick={() => handleOnClick(contents)}>View Question / Submit Answer</button>
                                  </td>
                                  </tr>
                              ))
                              }
                          </tbody>

                </table>
                <hr />
                <div className="text-center">
                  <table className="table  table-hover general-table">
                    <tbody><tr>
                        <td>
                          <input type="checkbox" defaultValue="chek" name="attampt" className="attampt" /> I have completed the test to the best of my knowledge and hereby submit my answers for evaluation</td>
                        <td>
                          <button type="button" className="btn btn-dark" id="btnTick">Submit</button>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="col-md-2" />
              </div>
            </div>
          </div></section>
      </section>
        </div>
    )
}

export default AdmissionTestQuestions
