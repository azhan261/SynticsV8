import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import {createBlogs} from '../../Apis/apiForBlogs'
import FilesUploadComponent from './File Upload/filesUploadComponent';

import { createAudioFile } from '../../Apis/apiForAudio';

import ModalTest from '../../Courses Content/SchoolsTraining/AdultTraining/Sections/Text/Modals/ModalTest';


function BlogForTeacher() {
  let {id} = useParams()
        /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const [files, setFiles] = useState([])
  const [file, setFile] = useState()
  const [filesNewName, setFilesNewName] = useState(id)
  const [newName, setNewName] = useState([])

  const fileChanged = (e) => {
    var testingFileChange  = e.target.files[0]
    //testingFileChange.name = "hi"
    var file = testingFileChange;
    var blob = file.slice(0, file.size, file.type);
    var random = Math.floor(Math.random() * 100000) + 100
    var settingName = id + random + file.name 
    var newFile = new File([blob], settingName, {type: file.type});
    setNewName(settingName)
    console.log(newFile)
    const f = newFile
    setFile(f)
  }

  const uploadFile = () => {
    let data = new FormData();
    data.append('file', file);
    console.log(file)
    console.log(data)
    createAudioFile(data)
    /*
    fetch('/api/files', {
      method: 'POST',
      body: data
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          this.loadFiles();
        } else {
          alert('Upload failed');
        }
      });
      */
  }
  const log = (data) => {
      if (editorRef.current) {
        data.blogscontent = editorRef.current.getContent({ format: "text" });
        data.referenceName = newName
        console.log(data)
        createBlogs(data)
        history.push(`/teacher/blog-list/${id}`)
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
    await uploadFile()
    await log(data)
    
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           blogstitle:'',
           blogscontent:'',
           referenceName:location.state,
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
    const onCreateBlog = (e) => {
      e.preventDefault()
      history.push(`/teacher/create-blog/${id}`)
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
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Blogs</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white">Create Blog</h6>
              </div>
              <div className="card-body">
                <div>
                <form onSubmit={formik.handleSubmit}>
                                
                                <div className = "mb-3">
                                <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                                <label><h6 className = "text-white">Title</h6></label>  
                                </div>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                            <input type="text" placeholder="Blog's Title" name="blogstitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.blogstitle} className="form-control" required  />
                                        {formik.errors.blogstitle && formik.touched.blogstitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.blogstitle}</div>) : null}
    
                                </div>
                                <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                                  <label><h6 className = "text-white">Upload File for Blog</h6></label>  
                                </div>
                                <input type="file" onChange={(e) => fileChanged(e)}/>
                                <hr />
                                <div className = "mt-2">
                                <ModalTest />
                                </div>
                                <hr />
                                <div className = "mt-2">
                                <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                                  <label><h6 className = "text-white">Blog Content</h6></label>  
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
                                <center>
                                <div className="">
                                  <button type="submit" className="btn btn-outline-primary" style = {{fontWeight : "bold" }} >
                                    Create Blog
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
              </>
    )



}

export default BlogForTeacher
