import React, { useState, useEffect, useRef } from 'react'
import { Input, Button, IconButton } from '@material-ui/core';
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { Formik, FormikConsumer, useFormik } from 'formik'
import GitHubIcon from '@material-ui/icons/GitHub';
import { createLinks } from '../../../Apis/apiForClassLinks';
import { getCourseForTeacherById } from '../../../Apis/apiForTeachers';

function HomeVideoForTeacher() {
  
	let {id} = useParams()
  const [items, setItems] = useState([])
  const location = useLocation();
  console.log(id)
  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getCourseForTeacherById(id)
      setItems(contents)
    }
    fetchItems()
  }, []);

	const [urlState, setUrlState] = useState("")
	const join = () => {
		if (urlState !== "") {
			var url = urlState.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
      console.log(items)
      
      formik.values.link = `http://localhost:3000/teacher/conference-call/active/${url}`
      formik.values.teacherName = items.name
      formik.values.gender = items.gender
      formik.values.teacherId = id
      console.log(location.state)
      formik.values.subject = items.subjectChoosenForApplication
      console.log(formik.values)
      createLinks(formik.values)
			window.location.href = `/teacher/conference-call/active/${url}`
		}
  }
    const onSubmit = async (data) => {
      //await uploadFile()
      //await log(data)
      
      //history.push("/placement-blogstitle-details")
    }
  
      //1 Start of by making initial values 
      const formik = useFormik({
          initialValues: {
            link: '',
            teacherName: '',
            gender: '',
            teacherId: '',
            date: '',
            subject: '',
            
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
              
              if(!values.blogstitle){
                  errors.blogstitle = "Please enter your Blog's Title"
              
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
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
			          <label><h3 className = "text-white">Live Class</h3></label>  
              </div>
              <div className="card-body">
                <div> 
                                <div className = "mb-3">
                                <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                                </div>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                                </div>
                                <hr />
                                <div className = "mt-2">
                                </div>
                                <center>
                                <div className="">
                                  <button type="submit" className="btn btn-outline-primary"  style = {{fontWeight: "bold"}} onClick={(e) => join(e)}>
									                  Create Session
                                  </button>
                                </div>
                                </center>
                                
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
              </>
		
			
		)
}

export default HomeVideoForTeacher
