import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createNotificationsResponses } from '../../Apis/apiForNotifications';
import { updateNotification } from '../../Apis/apiForNotifications';



function CreateNotificationsForTeacher() {
  
        /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  let {id} = useParams()
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const log = (data) => {
      if (editorRef.current) {
        data.responseContent = editorRef.current.getContent({ format: "text" });
        console.log(data, location.state._id)
        updateNotification(data, location.state._id)
        history.push(`/teacher/notification-category-teachers/${id}`)
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
      console.log(data)
    await log(data)
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           name: location.state.name,
           email: location.state.email,
           notificationTitle:location.state.notificationTitle,
           notificationContent:location.state.notificationContent,
           responseTitle:'',
           responseContent:'',
           notificationSubject: location.state.notificationSubject,
           grade: location.state.grade,
           studentId: location.state.studentId,
           status: location.state.status,
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
            /*
            if(!values.notificationTitle){
                errors.notificationTitle = "Please enter your Notification's Title"
            
            }
      */
            return errors


        }


    })

    console.log("Form errors", formik.errors)
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
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Query Answer Panel</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white">Query</h6>
              </div>
              <div className="card-body">
                <div>
                <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Query Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.notificationTitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Query Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.notificationContent}
                        </div>
                        <hr />
                    </div>
        
                </div>
              </div>
            </div>
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white">Create Query Answer</h6>
              </div>
              <div className="card-body">
                <div>
                <form onSubmit={formik.handleSubmit}>
                        
                        <div>
                        <div class="p-3 mb-2 bg-dark text-white">
                        <label htmlFor >Query Answer Title</label>
                        </div>
                        
                                {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                                 <input type="text" placeholder="Response Answer Title" name="responseTitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.responseTitle} className="form-control" required  />
                                {/*}
                                {formik.errors.responseTitle && formik.touched.responseTitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.responseTitle}</div>) : null}
                                */}
                        
                        </div>
                        <hr />
                        <div>
                        <div class="p-3 mb-2 bg-dark text-white">
                        <label htmlFor className="mt-2">Response Content</label>
                        </div>
                        
                        <Editor
                            apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue=""
                            init={{
                            height: 500,
                            browser_spellcheck : true,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        
                        </div>
                        <hr />
                        <div className="buttonNewTheme mt-3 mb-3">
                                      <button  type="submit" className="btn btn-outline-primary" style = {{fontWeight : "bold", width: "115px", height: "115px"}}>
                                        Submit Response
                                      </button>
                        </div>
                        </form>
                </div>
              </div>
            </div>
          </div>
          {/* /.containerBlackDashboard-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
          {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
          {/* End of Page Wrapper */}
                </div>
                </div>
              
    )



}

export default CreateNotificationsForTeacher
