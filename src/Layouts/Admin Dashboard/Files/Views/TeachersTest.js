import React from 'react'
import { useState } from 'react';
import AddQuestions from './AddQuestions';
import ShowQuestions from './ShowQuestions';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
function TeachersTest() {
    //fake API
    const questionsData = [
    
    ]

    const initalState = {id:null, q1:'', q2:'', q3:''}

    //defining the hook for getting the data through API
    const [questions, setQuestions] = useState(questionsData);

    //hook for editing the data
    const [editing, setEditing] = useState(false);

    //hook for showing the data into input fields
    const [currentQuestion, setcurrentQuestion] = useState(initalState)


    //function for adding the Employee Data
    const addQuestion = (question) => {
    question.id = questions.length + 1;
    //finally updating/processing the employees data
    setQuestions([...questions,question])
    
    }

    //function for deleting the Employee
    const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id))
    }

    //function for setting the edit field to be blank after clicking update. 
    const editQuestion = (question) => {
    setEditing(true);

    setcurrentQuestion({id: question.id, q1: question.q1, q2:question.q2, q3:question.q3})
    console.log(currentQuestion)
    }

    //function for updating the data into the tables.
    //Function activates upon clicking "Add/Update Data button"
    const updateQuestion = (id, updatedquestion) => {
    setEditing(false);
    setQuestions(questions.map((question) => (question.id === id ? updatedquestion:question)))
    }
    return (
        <div>
            <div className="content">
            <Row>
            <Col md="12">
                <Card className="card-plain">
                <CardHeader>Questions</CardHeader>
                <CardBody>
                <div>
                <div className="container">
                  <h2 className="text-center display-4">Questions</h2>
                  <div className="row">
                    <div className="col-md-5">
                      <AddQuestions addQuestion={addQuestion} />
                    </div>
                    <div className="col-md-7">
                      <ShowQuestions question={questions} deleteQuestion={deleteQuestion} editQuestion={editQuestion} />
                    </div>
                  </div>
                </div>
                </div>
                </CardBody>
                </Card>
            </Col>
            </Row>
      </div>
        </div>
    )
}

export default TeachersTest
