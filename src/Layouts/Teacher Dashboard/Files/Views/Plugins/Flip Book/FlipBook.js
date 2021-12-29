import React, { useState, useEffect, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip';
import { Editor } from '@tinymce/tinymce-react';
import EditorComponent from './EditorComponent';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import FileUploadNewForTeacherForBook from './FileUploadNewForTeacherForBook';
import HandWritingDemoStudentsLinguistics from './Demo/HandWritingDemo';
import { createBookContents } from '../../../Apis/apiForBookContent';
import { createAudioFile } from '../../../Apis/apiForAudio';
import "./index.scss"
import "./main.a8ff09de.chunk.css"
import { createBlogs } from '../../../Apis/apiForBlogs';


function FlipBook() {
  
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
        //createBookContents(data)
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
    //createAudioFile(data)
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
        <div>
                       <div>
             
             <div>
 <div className = "mt-5 pt-4">
 {/* Content Wrapper */}
 <div id="content-wrapper" className="d-flex flex-column">
 {/* Main Content */}
 <div id="content">
   {/* Begin Page Content */}
   <div className="containerBlackDashboard-fluid">
     {/* Page Heading */}
     <h1 className="h3BlackDashboard mb-2 text-gray-800">Books</h1>
     {/* DataTales Example */}
     <div className="card shadow mb-4 text-center">
       <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
         <h6 className="m-0 font-weight-bold text-white"></h6>
       </div>
       <div className="card-body">
       <h1 id = "checking" className="h3BlackDashboard text-gray-800"></h1>
       <HTMLFlipBook
             width={550}
             height={733}
             size="stretch"
             minWidth={315}
             maxWidth={1000}
             minHeight={400}
             maxHeight={1533}
             maxShadowOpacity={0.5}
             useMouseEvents = {false}
             //showCover={true}
             mobileScrollSupport={true}
             ref={book}
             >
        
                 <div className="page page-cover" data-density="hard">
                     <div className="page-content">
                     <h2>Digital Book</h2>
                     </div>
                 </div>
                <div className = "page">
                  <EditorComponent />
                </div>
                <div className = "page">
                <EditorComponent />
                </div>
                <div className = "page">
                <EditorComponent />
                </div>
                <div className = "page">
                <EditorComponent />
                </div>
                <div className = "page">
                <EditorComponent />
                </div>
                 
             </HTMLFlipBook>
              <div className="">
                  <button className="btn btn-outline-primary" style = {{fontWeight : 'bold', height:"90px", width: "90px"}}   onClick={() => book.current.pageFlip().flipPrev()}>
                     Prev page
                  </button>
                  <button className="btn btn-outline-primary" style = {{fontWeight : 'bold', height:"90px", width: "90px"}}   onClick={() => book.current.pageFlip().flipNext()}>
                    Next page
                  </button>
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
     </div>
        </div>
    )
}

export default FlipBook
