import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createBookContents } from '../../../Apis/apiForBookContent';
import { createAudioFile } from '../../../Apis/apiForAudio';
//import ModalWorkingForAudioRecord from './Audio Recording For Contact Us/ModalWorkingForAudioRecord';

function EditorComponent(props) {
 
       /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  let {id} = useParams()
  const history = useHistory()
  const [files, setFiles] = useState([])
  const [file, setFile] = useState()
  const [filesNewName, setFilesNewName] = useState(id)
  const [newName, setNewName] = useState([])
  const book = useRef()
  const location = useLocation();
  const editorRef = useRef(null);

  const log = (data) => {
      if (editorRef.current) {
        data.bookContent = editorRef.current.getContent({ format: "text" });
        data.referenceName = newName
        console.log(data)
        createBookContents(data)
        //history.push("/teacher/blog-list")
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

   const onSubmit = async (data) => {
      await uploadFile()
      await log(data)
      //history.push("/placement-question-details")
    }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           bookContent:'',
           teacherId:'',
           studentId: '',
           referenceName: '',
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
    const onCreateBlog = (e) => {
      e.preventDefault()
      history.push("/teacher/create-blog")
    }
    console.log("Form errors", formik.errors)
    return (
      <>
      <div>
      <div>
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Begin Page Content */}
        <div className="containerBlackDashboard-fluid">
          {/* Page Heading */}
          {/* DataTales Example */}
          <div className="card shadow mb-4 text-center">
            <div className="card-body">
            <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <label><h6 className = "text-white">Upload Image for Content</h6></label>
           </div>
            <input type="file" onChange={(e) => fileChanged(e)}/>
            </div>
            <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
                        <div className = "mt-4"> 
                            <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                                <label><h6 className = "text-white">Please create your desired Content below</h6></label>
                            </div>
                            <div class="p-3 mb-2 bg-light text-dark">
                              <Editor
                                apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue=""
                                init={{
                                height: 180,
                                statusbar: false,
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
                        </div>
                          <div className="">
                              <button type="submit" className="btn btn-outline-primary">
                                Create Content
                              </button>
                          </div>
                        </form>
            </div>
          </div>
        </div>
        {/* /.containerBlackDashboard-fluid */}
      </div>
      
      </div>
      
            </div>
            </div>
            </>
    )
}

export default EditorComponent
