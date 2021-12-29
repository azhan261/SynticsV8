import React, { useState, useEffect, useRef }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation, useParams  } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { getAnswerTest, } from '../../../Apis/apiForAnswers';
import { updateAnserReviewTest } from '../../../Apis/apiForTestAnswers';
//import "../../../../../Sass.scss"
import axios from 'axios';

function ViewCurrentAnswerVideoAudioForTest() {
    let {id} = useParams()
    const [items, setItems] = useState([])
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()

    useEffect(() => {
        const fetchItems = async function() {
          const contents = await getAnswerTest()
          setItems(contents)
        }
        fetchItems()
      }, []);
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
        document.querySelector("#audioReference").href = cvUrl;
      }
    const log = (data) => {
        if (editorRef.current) {
        console.log(data)
         var contentFromTextArea = editorRef.current.getContent({ format: "text" });
         data.teacherRemarks = contentFromTextArea
         location.state.marksObtained = data.marksObtained
         location.state.teacherRemarks = data.teacherRemarks
         console.log(location.state)
         updateAnserReviewTest(location.state, location.state._id)
         history.push(`/teacher/list-of-classes/${id}`)
        }
        
    };
   
    const onSubmit = async (data) => {
        await log(data)
  
      }
      const formik = useFormik({
        initialValues: {
           marksObtained: '',
           teacherRemarks:''
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property
        
        validate: values  => {

            var totalMarksToInt = parseInt(location.state.totalMarks)
    
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            if(!values.marksObtained){
                errors.marksObtained = "Please enter Total Marks"
            }else if (!phone.test(values.marksObtained)) {
                errors.marksObtained = "Please enter digits only"
            }else if (symbols.test(values.marksObtained)) {
                errors.marksObtained = "Please enter digits only"
            }else if (values.marksObtained > totalMarksToInt) {
              errors.marksObtained = "Given for the Answer cannot exceed total marks of the Question"
          }
            return errors


        }


    })
    return (
        <>
        <div className="container-fluid">
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
        <h6 className="m-0 font-weight-bold text-white"> {location.state.name}'s Question Content </h6>
      </div>
      <div className="card-body">
      <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Question's Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.questionTitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Question's Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.questionContent}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Total Marks</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.totalMarks}
                        </div>
                        <hr />
        </div>
      </div>
    </div>
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white"> {location.state.name}'s Answer</h6>
      </div>
      <div className="card-body">
      <div>
      <div className = "mt-4">
                    <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Student's Answer</label>
                        </div>
                        <div class="p-3 mb-2 bg-white text-dark">
                        <a id = "audioReference" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold"}} >{location.state.referenceName}</a>
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label >Marks given to Student</label>
                        </div>
                            <form onSubmit={formik.handleSubmit}>
                            <div>
                                <div class="p-3 mb-2 bg-white text-dark">
                                    {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                                    <input type="text" placeholder="Obtained Marks" name="marksObtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.marksObtained} className="form-control" required  />
                                    {formik.errors.marksObtained && formik.touched.marksObtained ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.marksObtained}</div>) : null}
                                </div>
                            </div>
                            <hr />
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                                    <label >Teacher's Remarks</label>
                                </div>
                                <div class="p-3 mb-2 bg-white text-dark">
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
                            </div>
                            <div >
                                  <button type = "submit" className="btn btn-outline-primary" style = {{fontWeight : "bold",}}>
                                  Submit Marks and Review
                                  </button>
                            </div>
                        </form>
                        <hr />
                    </div>
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
        </div>
      </>
    )
}

export default ViewCurrentAnswerVideoAudioForTest
