
import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function AddQuestionsForAdmin(props) {
     //for clearing the form after submission
     const initialValues = {id:null, q1:'', q2:'', q3:''}

     //hook for taking employee inputs
     const [question, setQuestion] = useState(initialValues);
 
     //function for tracking the all user inputs
     const handleChange = (event) => {
         const {name,value} = event.target;
         setQuestion({...question,[name]:value})
     }
    return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card className="card-plain">
                  <CardHeader>Questions</CardHeader>
                  <CardBody>
                  <div>
                    <h1 className="text-center display-5">Create Questions</h1>
                    <form onSubmit={(event) => { event.preventDefault() 
                    props.addQuestion(question)
                    setQuestion(initialValues)
                    }}>
                <div className="form-group">
                    <label>Question 1</label>
                    <input type="text" value={question.q1} name="q1" onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                    <label>Question 2</label>
                    <input type="text" value={question.q2} name="q2" onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                    <label>Question 3</label>
                    <input type="text" value={question.q3} name="q3" onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                   <button className="btn btn-primary btn-sm">Create Questions</button>
                </div>
                 </form>
                </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      );
}

export default AddQuestionsForAdmin







/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Admin Dashboard (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Admin Dashboard

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
