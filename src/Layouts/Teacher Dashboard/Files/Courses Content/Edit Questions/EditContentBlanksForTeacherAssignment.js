import React, { useState, useRef,} from "react";
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { updateAssignmentPlannings } from "../../Apis/apiForCoursePlanning";

function EditContentBlanksForTeacherAssignment() {
  let {id} = useParams()
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const log = (data) => {
      if (editorRef.current) {
        console.log(data)
        var contentFromTextArea = editorRef.current.getContent({ format: "text" });
        location.state.questioncontent = contentFromTextArea
        location.state.totalmarks = data.totalmarks
        location.state.optionsQuestionFillInTheBlank = data.optionsQuestionFillInTheBlank
        location.state.questiontitle = data.questiontitle
        location.state.teacherId = id
        if((data.startDate != "") && (data.endDate != "")){
          location.state.startDate = data.startDate
          location.state.endDate = data.endDate
          console.log(location.state)
          updateAssignmentPlannings(location.state, location.state._id)
          history.push(`/teacher/list-of-classes-assignments/${id}`)
        }
        else{
          console.log(location.state)
          updateAssignmentPlannings(location.state, location.state._id)
          history.push(`/teacher/list-of-classes-assignments/${id}`)
        }
      }
  };
  const onSubmit = async (data) => {
      
      await log(data)
      //history.push("/placement-question-details")
    }
    const formik = useFormik({
      initialValues: {
         totalmarks:location.state.totalmarks,
         questiontitle:location.state.questiontitle,
         optionsQuestionFillInTheBlank:location.state.optionsQuestionFillInTheBlank,
         startDate: '',
         endDate:'',
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
        }else if(!values.questiontitle){
          errors.questiontitle = "Please eneter a Title for the Question"
        }
          return errors


      }


  })
  const [inputList, setInputList] = useState(location.state.optionsQuestionFillInTheBlank);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    if (inputList.length > 3 ){
      return "cannot exceed more than 4 options"
    }
    
    setInputList([...inputList, { options: "",}]);
  };
  const handleTextBox = (data) => {
    formik.values.optionsQuestionFillInTheBlank = data
    console.log(formik.values)
  }
  const originalOptions = () => {
    console.log(location.state.optionsQuestionFillInTheBlank[0].options)
    return(
      <ul  className = "text-left p-3">
        <li>{location.state.optionsQuestionFillInTheBlank[0].options}</li>
        <li>{location.state.optionsQuestionFillInTheBlank[1].options}</li>
        <li>{location.state.optionsQuestionFillInTheBlank[2].options}</li>
        <li>{location.state.optionsQuestionFillInTheBlank[3].options}</li>
      </ul>
    )
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Course Planning</h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
        <h6 className="m-0 font-weight-bold text-white"> Course Content Fill in the Blank Content Edit Panel</h6>
      </div>
      <div className="card-body">
      <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="card-header py-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
            <h6 className="m-0 text-white"> Original Start Date & Due Date: </h6>
        </div>
          <p>Start Date: {location.state.startDate}</p>
          <p>Due Date: {location.state.endDate}</p>
        
        <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
            <h6 className="m-0 text-white"> New Start Date & Due Date: </h6>
        </div>
        <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Start Date</label>
                          <input type="date"  name="startDate" value={formik.values.startDate} className="form-control" required />
                          {formik.touched.startDate ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.startDate}</div>) : null}
                        </div>
                      </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">End Date</label>
                          <input type="date"  name="endDate" value={formik.values.endDate} className="form-control" required />
                          {formik.touched.endDate ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.endDate}</div>) : null}
                        </div>
                      </div>
        </div>
                <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label ><h6 className="m-0 font-weight-bold text-white">Instructions: Please follow the example below to create a <b><i>Fill In The Blank</i></b> Questions</h6></label>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                        <div className="text-left border border-dark">
                          <div className="m-3">
                            <h5>Q. The quick ______ fox jumps over the lazy dog</h5>
                            <h6>a) Yellow</h6>
                            <h6>b) Brown</h6>
                            <h6>c) Purple</h6>
                            <h6>d) Green</h6>
                          </div>
                        </div>
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label ><h6 className="m-0 font-weight-bold text-white">Question's Title</h6></label>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                      <input type="text" placeholder="Title for Question" name="questiontitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.questiontitle} className="form-control" required  />
                      {formik.errors.questiontitle && formik.touched.questiontitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.questiontitle}</div>) : null}
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label ><h6 className="m-0 font-weight-bold text-white">Please edit your desired <b><i>Fill In The Blank</i></b> Question below</h6></label>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                        <Editor
                          apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                          onInit={(evt, editor) => editorRef.current = editor}
                          initialValue={location.state.questioncontent}
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
                  </form>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2  text-left" style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label ><h6 className="m-0 font-weight-bold text-white ">Options</h6></label>
                          <p className = "text-left"><b>Original Options: </b></p>
                          {originalOptions()}
                          <br />
                          <p><b> Update Options: </b></p>
                          <p>Please click <i>Add Option</i> to add more options and <i>Remove option</i> to remove the desired option.</p>
                          <p><b>Disclaimer:</b> Total number of Options cannot exceed more than four. Only four Options are allowed to be created.</p>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                        {inputList.map((x, i) => {
                        return (
                            <div className="box">
                            <input
                                    name="options"
                                    placeholder="Enter Option"
                                    value={x.options}
                                    onChange={e => handleInputChange(e, i)}
                            />
                            <div className="btn-box">
                                {inputList.length !== 1 && <div >
                            <button type="submit" className="btn btn-outline-primary" onClick={() => handleRemoveClick(i)}>
                              Remove Option
                            </button>
                            </div>}
                                
                                {inputList.length - 1 === i &&  <div >
                            <button type="submit" className="btn btn-outline-primary" onClick={handleAddClick}>
                              Add Option
                            </button>
                            </div>}
                            </div>
                            </div>
                        );
                        })}
                      </div>
                      <hr />
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                  <div className = "mt-4"> 
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#306EFF"}}>
                            <label><h6 className = "text-white">Total Marks</h6></label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                              {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                              <input type="text" placeholder="Total Marks for the Question" name="totalmarks" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.totalmarks} className="form-control" required  />
                              {formik.errors.totalmarks && formik.touched.totalmarks ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.totalmarks}</div>) : null}
                        </div>
                        <hr />
                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-outline-primary">
                          Save Changes
                        </button>
                    </div>
                  </form>
      </div>
      {handleTextBox(inputList)}
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
  );
}

export default EditContentBlanksForTeacherAssignment
