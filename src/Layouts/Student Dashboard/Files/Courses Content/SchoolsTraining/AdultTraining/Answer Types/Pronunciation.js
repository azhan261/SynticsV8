import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswers } from '../../../../Apis/apiForAnswers';



const SpeechRecognition =
window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function PronunciaitionForStudent() {
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])
    let {id} = useParams()
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
      formik.values.answerContent = data
      console.log(formik.values)
      createAnswers(formik.values)
      history.push(`/student/list-of-subjects/${id}`)
    }
    const formik = useFormik({
      initialValues: {
         name:'',
         email:'',
         grade: location.state.grade,
         answertype: location.state.answertype,
         questionContent: location.state.questioncontent,
         questionTitle: location.state.questiontitle,
         totalMarks: location.state.totalmarks,
         answerContent:'',
         marksObtained: '',
         teacherRemarks: '',
      },
  })
    
    return (
      <>
        <h1>Pronunciation</h1>
        <h3>{location.state.questioncontent}</h3>
        <div className="container">
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
        </div>
      </>
    )
  }
  
  export default PronunciaitionForStudent
  