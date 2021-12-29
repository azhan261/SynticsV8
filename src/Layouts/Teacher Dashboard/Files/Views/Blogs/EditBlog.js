import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { updateBlog } from '../../Apis/apiForBlogs';

function EditBlogForTeacher() {
  let {id} = useParams()
    useEffect(() => {
        console.log(location.state)
    }, [])
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const log = (data) => {
        if (editorRef.current) {
          console.log(location.state)
          var contentFromTextArea = editorRef.current.getContent({ format: "text" });
          location.state.blogtitle = data.blogstitle
          location.state.blogscontent = contentFromTextArea
          updateBlog(location.state, location.state._id)
          //history.push(`/teacher/blog-list/${id}`)
        }
    };
    const onSubmit = async (data) => {
        
        await log(data)
        //history.push("/placement-question-details")
      }
      const formik = useFormik({
        initialValues: {
           blogstitle:location.state.blogstitle,
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
                errors.blogstitle = "Please enter Blog's Title"
          }
            return errors


        }


    })
    const onCreateBlog = (e) => {
      e.preventDefault()
      history.push("/teacher/create-blog")
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
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Edit Blog</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white">Blog</h6>
              </div>
              <div className="card-body">
                <div>
                <form onSubmit={formik.handleSubmit}>
                        
                        <div>
                        <label htmlFor>Title</label>
                                {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                                 <input type="text" placeholder="Blog's Title" name="blogstitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.blogstitle} className="form-control" required  />
                                {formik.errors.blogstitle && formik.touched.blogstitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.blogstitle}</div>) : null}
                        
                        </div>
                        <div>
                        <label htmlFor>Blog Content</label>
                        <Editor
                            apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue={location.state.blogscontent}
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
                        <center>
                        <div >
                                  <button className="btn btn-outline-primary" type = "submit" style = {{fontWeight : "bold" }} >
                                    Save Changes
                                  </button>
                                </div>
                        </center>
                        </form>
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
      
    )

}

export default EditBlogForTeacher
