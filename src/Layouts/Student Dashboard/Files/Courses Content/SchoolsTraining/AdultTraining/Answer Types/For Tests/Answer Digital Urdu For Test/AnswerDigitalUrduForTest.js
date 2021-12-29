import React, { useState, useEffect, useRef } from 'react'
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css"
import layout from "simple-keyboard-layouts/build/layouts/urdu";
import "./Keyboard.css"
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswersTest } from '../../../../../../Apis/apiForAnswersTest';
import { getRegisterationStudentsById } from '../../../../../../Apis/apiForRegistrations';

function AnswerDigitalUrduForTest() {
    let {id} = useParams()
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();
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
    const onChange = input => {
      setInput(input);
      
      console.log("Input changed, Testing", input);
    };
  
    const handleShift = () => {
      const newLayoutName = layout === "default" ? "shift" : "default";
      setLayout(newLayoutName);
    };
  
    const onKeyPress = button => {
      console.log("Button pressed", button);
  
      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") handleShift();
    };
  
    const onChangeInput = event => {
      const input = event.target.value;
      console.log(input)
      setInput(input);
      keyboard.current.setInput(input);
      
    };
    const log = (data) => {
        data.answerContent = input
        data.studentId = data.studentId.id
        data.teacherId = location.state.teacherId
        data.coursetype = location.state.coursetype
        data.name = studentDataValues.name
        data.email = studentDataValues.email
        console.log(data)
        createAnswersTest(data)
        if (data.grade == "Grade 1"){
          history.push({
            pathname: `/student/Grade-1-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 2"){
          history.push({
            pathname: `/student/Grade-2-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 3"){
          history.push({
            pathname: `/student/Grade-3-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 4"){
          history.push({
            pathname: `/student/Grade-4-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 5"){
          history.push({
            pathname: `/student/Grade-5-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 6"){
          history.push({
            pathname: `/student/Grade-6-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 7"){
          history.push({
            pathname: `/student/Grade-7-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 8"){
          history.push({
            pathname: `/student/Grade-8-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 9"){
          history.push({
            pathname: `/student/Grade-9-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 10"){
          history.push({
            pathname: `/student/Grade-10-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 11"){
          history.push({
            pathname: `/student/Grade-11-content-test/${id}`,
            state: data.coursetype
          })
        }
        else if (data.grade == "Grade 12"){
          history.push({
            pathname: `/student/Grade-12-content-test/${id}`,
            state: data.coursetype
          })
        }
      
  };
  
  /*useEffect(() => {
    const fetchTodo = async () => {
      const blogstitle = await getPlacementTestblogstitle(`${props.match.params._id}`)
      setblogstitle(blogstitle)
    }
    fetchTodo()
  }, []);
  */
  const onSubmit = async (data) => {
    await log(data)
    //history.push("/placement-blogstitle-details")
  }
  
  
    //1 Start of by making initial values 
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
  
        //4 Make onSubmit propert to handle what happens to data on form submisison
  
        onSubmit: values => {
  
          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")
  
          onSubmit(formik.values)
  
        },
  
        //5 Make validation property
        
        validate: values => {
            
            let errors = {}
  
            const letters = /^[A-Za-z ]+$/;
  
            const cnic = /^[0-9--]+$/;
  
            const phone = /^[0-9]+$/;
  
            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            return errors
  
  
        }
  
  
    })
  
    console.log("Form errors", formik.errors)
  
    return (
        <>
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
                    <input className = "inputSimpleKeyboard"
                        value={input}
                        placeholder={"Tap on the virtual keyboard to start"}
                        onChange={onChangeInput}
                      />
                      <div className="simple-keyboard">
                      <center>
                      <Keyboard
                        keyboardRef={r => (keyboard.current = r)}
                        layoutName={layout}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        layout = {{
                          default: [
                              "` \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}",
                              "{tab} \u0642 \uFEED \u0639 \u0631 \u062A \u06D2 \u0621 \u0649 \uFBA6 \u067E [ ]",
                              "{lock} \u0627 \u0633 \u062F \u0641 \u06AF \u06BE \u062C \u06A9 \u0644 \u061B \u060C {enter}",
                              "{shift} \u0632 \u0634 \u0686 \u0637 \u0628 \u0646 \u0645 \u06E4 , . / {shift}",
                              ".com @ {space}",
                          ],
                          shift: [
                              "~ ! @ # $ \u066A ^ & * ( ) _ + {bksp}",
                              "{tab} \uFE70 \uFE77 \uFE79 \u0691 \u0679 \uFE7A \uFEFB \uFE8B \u0629 | { }",
                              "{lock} \u0622 \u0635 \u0688 \u060D \u063A \u062D \u0636 \u062E \u06D4 \u0703 \u05f4 {enter}",
                              "{shift} \u0630 \u0698 \u062B \u0638 \u06BA \u066b \u0640 < > \u061F {shift}",
                              ".com @ {space}",
                          ],
                      }}
                      />
                      </center>
                      </div>
                     
                      <div className="containerSass mt-3 mb-2">
                          <button type="submit" className="btn btn-outline-primary">
                          Submit Answer
                          </button>
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
        </>
    );
}

export default AnswerDigitalUrduForTest
