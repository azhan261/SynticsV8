import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { updateCoursePlannings } from '../../Apis/apiForCoursePlanning';
import ModalWorkingForAudioRecord from './Audio Recording For Contact Us For Edit/ModalWorkingForAudioRecord';
import axios from 'axios';

function EditContentAudioForTeacher() {
  
let {id} = useParams()
const location = useLocation();
const editorRef = useRef(null);
const history = useHistory()

//setReferenceName(randomName)
const timerId = setTimeout(() => {
  chartsData()
}, 1500);

const chartsData = () => {
  fileForCv()

}
const fileForCv = () => {
  axios({
      method: "POST",
      url: `https://syntics.co/api/file/display/${location.state.referenceName}`,
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
    

      //var contentFromTextArea = editorRef.current.getContent({ format: "text" });
      location.state.questioncontent = data.questioncontent
      location.state.questiontitle = data.questiontitle
      location.state.totalmarks = data.totalmarks
      location.state.teacherId = id
      location.state.currentDate = new Date()
      var findString = location.state.referenceName.indexOf(".")
      var newReferenceName = location.state.referenceName.slice(0,findString)
      console.log(newReferenceName)
      location.state.referenceName = newReferenceName + "update" + ".mp3"
      console.log(location.state)
      updateCoursePlannings(location.state, location.state._id)
      history.push(`/teacher/list-of-classes/${id}`)
    
};
const onSubmit = async (data) => {
    
    await log(data)
    //history.push("/placement-question-details")
  }
  const formik = useFormik({
    initialValues: {
       totalmarks:location.state.totalmarks,
       questiontitle: location.state.questiontitle,
       questioncontent: location.state.questioncontent,
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
        if(!values.totalmarks){
            errors.totalmarks = "Please enter Total Marks"
        }else if (!phone.test(values.totalmarks)) {
            errors.totalmarks = "Please enter digits only"
        }else if (symbols.test(values.totalmarks)) {
            errors.totalmarks = "Please enter digits only"
        }else if (values.totalmarks > 100) {
          errors.totalmarks = "Marks for the question cannot exceed 100"
      }
        return errors


    }


})
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Course Planning</h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white"> Course Q/A Content Edit Panel</h6>
      </div>
      <div className="card-body">
        <div>
        <div className="card-header py-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
            <h6 className="m-0 text-white"> Original Attachment: </h6>
        </div>
        <audio id = "audioReference"  controls="controls" className="" type="audio/mpeg"  />
       
        </div>
        <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
            <h6 className="m-0 text-white"> New Attachment: </h6>
            
        </div>
        <div className = "mt-2">
                < ModalWorkingForAudioRecord data={location.state.referenceName} />
            </div>
      <form onSubmit={formik.handleSubmit}>
                  <div className = "mt-4"> 
                      <div className="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label><h6 className = "text-white">Question's Title</h6></label>
                      </div>
               
                      <div className="p-3 mb-2 bg-light text-dark">
                      <input type="text" placeholder="Title for Question" name="questiontitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.questiontitle} className="form-control" required  />
                      {formik.errors.questiontitle && formik.touched.questiontitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.questiontitle}</div>) : null}
                      </div>
                      <hr />
                  </div>
                  <hr />
                  <div className = "mt-4"> 
                      <div className="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label><h6 className = "text-white">Please edit your desired <b>Audio</b> Question below</h6></label>
                      </div>
                      <div className="p-3 mb-2 bg-light text-dark">
                      <textarea className = "w-100" name="questioncontent" style={{height:'300px'}} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.questioncontent}   >
                      </textarea>
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                        <div className="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label><h6 className = "text-white">Total Marks</h6></label>
                        </div>
                        <div className="p-3 mb-2 bg-light text-dark">
                              {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                              <input type="text" placeholder="Total Marks for the Question" name="totalmarks" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.totalmarks} className="form-control" required  />
                              {formik.errors.totalmarks && formik.touched.totalmarks ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.totalmarks}</div>) : null}
                        </div>
                        <hr />
                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-outline-primary" style ={{fontWeight: 'bold',}}>
                          Save Changes
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

export default EditContentAudioForTeacher
