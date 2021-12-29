import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswers } from '../../../../../Apis/apiForAnswers';
import { getRegisterationStudentsById } from '../../../../../Apis/apiForRegistrations';
import { getFileSpecific } from '../../../../../Apis/apiForGridFs';
import { createAudioFile } from '../../../../../Apis/apiForAudioSending';
import ContainerForStudent from './container/Container';
import DrawingPage from './DrawingPage';
import axios from 'axios';

function AnswerDrawing() {
  let {id} = useParams()
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const [referenceName, setReferenceName] = useState()
  const [studentDataValues, setStudentDataValues] = useState([])
  const [file, setFile] = useState()
  console.log(location.state)
    useEffect(() => {
      
        const fetchStudentData = async function() {
          const studentData = await getRegisterationStudentsById(id)
          console.log(studentData)
          setStudentDataValues(studentData)
        }
        fetchStudentData()
        const fetchFile = async function() {
          const fileContent = await getFileSpecific(location.state.referenceName)
          console.log(fileContent)
          setFile(fileContent[0].filename)
          console.log(file)
        }
        fetchFile() 
        
    }, [])
           /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const timerId = setTimeout(() => {
    chartsData()
  }, 1500);

  const chartsData = () => {
    fileForCv()

}
const fileForCv = () => {
    axios({
        method: "POST",
        url: `https://syntics.co/api/file/display/${file}`,
        responseType: "blob"
      })
        .then(res => rezzingFileForCv(res.data),)
        
  }
  const rezzingFileForCv = (response) => {
    var urlCreator = window.URL || window.webkitURL;
    var cvUrl = urlCreator.createObjectURL(response);
    if(document.getElementById('audioReference') != null){
    document.getElementById('audioReference').setAttribute('src', cvUrl)
    document.getElementById('audioReference').src = cvUrl
  }
  }
  const log = (data) => {
      if (editorRef.current) {
        data.answerContent = editorRef.current.getContent({ format: "text" });
        data.studentId = data.studentId.id
        data.teacherId = location.state.teacherId
        data.coursetype = location.state.coursetype
        data.name = studentDataValues.name
        data.email = studentDataValues.email
        if(location.state.refereceNameForDraw !== null){
          data.referenceName = location.state.refereceNameForDraw
        }
        else {
          data.referenceName = referenceName
        }
        console.log(data)
        createAnswers(data)
        history.push(`/student/results-category-students/${id}`)
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
      
      data.studentId = data.studentId.id
      data.teacherId = location.state.teacherId
      data.coursetype = location.state.coursetype
      data.name = studentDataValues.name
      data.email = studentDataValues.email
      if(location.state.refereceNameForDraw !== null){
        data.referenceName = location.state.refereceNameForDraw
      }
      else {
        data.referenceName = referenceName
      }
      
      console.log(data)
      createAnswers(data)
      history.push(`/student/results-category-students/${id}`)
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
           questionReferenceName: location.state.referenceName,
           referenceName: '',
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
        
       


    })
    const drawPage = (e) => {
      e.preventDefault()
      const randomValue = Math.floor((Math.random() * 100000) + 1)
      const randomName = id + randomValue + ".png"
      setReferenceName(randomName)
      location.state.refereceNameForDraw = randomName
      history.push({
        pathname: `/student/draw-page/${id}`,
        state: location.state
      
      })
    }
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Course Content</h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white">{location.state.questiontitle}</h6>
      </div>
      <div className="card-body">
      {location.state.questioncontent}
      <div>
      <div className="card-header py-3 mt-4" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white">Attachment</h6>
      </div>
      <div className = "mt-4">
      <img id = "audioReference" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold", height:"300px", width:"400px", boxShadow: "5px 5px #888888"}}>
      </img>
      </div>
      </div>
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
                          <label><h6 className = "text-white">Your Answer </h6></label>
                      </div>
                      <div className="containerSass mt-3 mb-2">
                        <button className="btn btn-outline-primary" onClick={(e) => drawPage(e)}>
                        Start Drawing
                        </button>
                    </div>
                      <hr />
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
    )
}

export default AnswerDrawing
