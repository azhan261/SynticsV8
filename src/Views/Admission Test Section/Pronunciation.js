import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswers } from '../../Apis/apiForAdmissionTestAnswers';



const SpeechRecognition =
window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Pronunciaition() {
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
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
      formik.values.answerContent = data
      console.log(formik.values)
      location.state.answerContent = data.answerContent
      location.state.marksObtained = data.marksObtained 
      location.state.teacherRemarks = data.teacherRemarks
      console.log(location.state)
      //createPlacements(formik.values)
      //history.push("/placement-questions")
    }
    const formik = useFormik({
      initialValues: {
         name:'',
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
  
  export default Pronunciaition
  