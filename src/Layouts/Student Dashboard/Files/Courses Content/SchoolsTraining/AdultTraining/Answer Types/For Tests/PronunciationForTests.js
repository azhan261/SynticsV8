import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswersTest } from '../../../../../Apis/apiForAnswersTest';
import { getRegisterationStudentsById } from '../../../../../Apis/apiForRegistrations';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import "./testStyle.css";

const SpeechRecognition =
window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'
function PronunciationForTestsForStudent() {
  let {id} = useParams()
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const [studentDataValues, setStudentDataValues] = useState([])

    useEffect(() => {
      
        const fetchStudentData = async function() {
          const studentData = await getRegisterationStudentsById(id)
          console.log(studentData)
          setStudentDataValues(studentData)
        }
        fetchStudentData() 
        
    }, [])

    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])
  
    useEffect(() => {
      handleListen()
    }, [isListening])
  
    const handleListen = () => {
      if (isListening) {
        mic.start()
        mic.onend = () => {
          console.log('continue..')
          mic.start()
        }
      } else {
        mic.stop()
        mic.onend = () => {
          console.log('Stopped Mic on Click')
        }
      }
      mic.onstart = () => {
        console.log('Mics on')
      }
  
      mic.onresult = event => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        console.log(transcript)
        setNote(transcript)
        mic.onerror = event => {
          console.log(event.error)
        }
      }
    }
  
    const handleSaveNote = () => {
      setSavedNotes([...savedNotes, note])
      setNote('')
    }

    const handleOnClick = (data) => {
     formik.values.answerContent = editorRef.current.getContent({ format: "text" });
     formik.values.studentId =formik.values.studentId.id
     formik.values.teacherId = location.state.teacherId
     formik.values.coursetype = location.state.coursetype
     formik.values.name = studentDataValues.name
     formik.values.email = studentDataValues.email
      formik.values.answerContent = data
      console.log(formik.values)
      createAnswersTest(formik.values)
      if ( formik.values.grade == "Grade 1"){
        history.push({
          pathname: `/student/Grade-1-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 2"){
        history.push({
          pathname: `/student/Grade-2-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 3"){
        history.push({
          pathname: `/student/Grade-3-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 4"){
        history.push({
          pathname: `/student/Grade-4-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 5"){
        history.push({
          pathname: `/student/Grade-5-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 6"){
        history.push({
          pathname: `/student/Grade-6-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 7"){
        history.push({
          pathname: `/student/Grade-7-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 8"){
        history.push({
          pathname: `/student/Grade-8-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 9"){
        history.push({
          pathname: `/student/Grade-9-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 10"){
        history.push({
          pathname: `/student/Grade-10-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 11"){
        history.push({
          pathname: `/student/Grade-11-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
      else if (formik.values.grade == "Grade 12"){
        history.push({
          pathname: `/student/Grade-12-content-test/${id}`,
          state:formik.values.coursetype
        })
      }
    }
    const formik = useFormik({
      initialValues: {
        name:'',
        email:'',
        grade: location.state.grade,
        coursetype:'',
        answertype: location.state.answertype,
        questionContent: location.state.questioncontent,
        questionTitle: location.state.questiontitle,
        totalMarks: location.state.totalmarks,
        answerContent:'',
        marksObtained: '',
        teacherRemarks: '',
        teacherId: '',
        studentId: {id},
        questionId: location.state._id
      },
  })
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

  const handleCompletion = (e) => {
    if(location.state.grade == 'Grade 1'){
      history.push({
        pathname:"/Grade-1-content-test"
      })
    }
  
  }
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Test Content</h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white">{location.state.questiontitle}</h6>
      </div>
      <div className="card-body">
      {location.state.questioncontent}
      </div>
    </div>
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white">Answer</h6>
      </div>
      <div className="card-body">
      <form onSubmit={formik.handleSubmit}>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label><h6 className = "text-white">Type your Answer to above Question below</h6></label>
                      </div>
                      <hr />
                  </div>
                  <div className="box">
            <h2>Current Note</h2>
            {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
            <button onClick={handleSaveNote} disabled={!note}>
              Save Note
            </button>
            <button onClick={() => setIsListening(prevState => !prevState)}>
              Start/Stop
            </button>
            <p>{note}</p>
          </div>
          <div className="box">
            <h2>Notes</h2>
            {savedNotes.map(n => (
              <p key={n}>{n} 
                <button  onClick={() => handleOnClick(n)}>Submit Voice Note</button>
              </p>
            ))}
          </div>
                  </form>
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

export default PronunciationForTestsForStudent
