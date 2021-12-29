import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";


function CreateStudentGroup() {
    let {id} = useParams()
  const [items, setItems] = useState()
  /*
  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getCourseForTeacher(id)
      console.log(contents)
      setItems(contents)
      console.log(items)
    }
    fetchItems()
    
  }, []);
  */
         /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()

  //const [referenceName, setReferenceName] = useState()
  //console.log(referenceName)
  
  const randomValue = Math.floor((Math.random() * 100000) + 1)
  const randomName = id + randomValue
  
  console.log(randomName)
  const onSubmitHandler = async (data) => {
    //data.coursetype = items.subjectChoosenForApplication
    if ((data.questiontype === "Text") && (data.answertype === "Simple Text")){
      history.push({
        pathname:`/teacher/course-content-text-qa/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
      history.push({
        pathname:`/teacher/course-content-text-mcq/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Audio")){
      history.push({
        pathname:`/teacher/course-content-text-audio/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Video")){
      history.push({
        pathname:`/teacher/course-content-text-video/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Audio")){
      history.push({
        pathname:`/teacher/course-content-text-audio/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:`/teacher/course-content-text-blanks/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Handwriting")){
      history.push({
        pathname:`/teacher/course-content-text-handwriting/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Digital Urdu")){
      history.push({
        pathname:`/teacher/course-content-text-digitalUrdu/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Drawing")){
      history.push({
        pathname:`/teacher/course-content-text-drawing/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "File Upload")){
      history.push({
        pathname:`/teacher/course-content-file-upload/${id}`,
        state: data
      })
    }
    
    //history.push('/placement-question-details')
  }
  
  /*const onSubmit = async (data) => {
    //console.log(data)
    await createCoursePlannings(data)
    //await createQuestions(data)
    //await createPlacementTestQuestions(data)
    //redirecting 
    //history.push("/")
  };
  */
    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           groupName:'',
           groupLead:'',
           groupMember:'',
           projectID:'',
           projectTitle:'',
           projectStatus:'',
           projectStartDate:'',
           projectDueDate: {id},
           referenceName: randomName
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          //onSubmit(formik.values)
          onSubmitHandler(formik.values)

        },

        //5 Make validation property


    })
    const [inputList, setInputList] = useState([{ options: "",}]);

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
      formik.values.optionsQuestionMcq = data
    }

    console.log("Form errors", formik.errors)
    return (
        <>
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
          <h6 className="m-0 font-weight-bold text-white">Content</h6>
        </div>
        <div className="card-body">
          <div>
          <form onSubmit={formik.handleSubmit}>
                    
                        <div>
                        <div className="form-group">
                            <label htmlFor="sel1">Group Name</label>
                           <input type = "text" name = "groupName" className = "form-control" placeholder = "Enter group name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.groupName}  required/>
                            {formik.touched.groupName ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.groupName}</div>) : null}
                          </div>
                      
                        </div>
        </form>
        <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
                          <label ><h6 className="m-0 font-weight-bold text-white">Options</h6></label>
                          <p>Please click <i>Add Member</i> to add more members and <i>Remove option</i> to remove the desired member.</p>
                          <p><b>Disclaimer:</b> Total number of members cannot exceed more than four.</p>
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
                              Remove Member
                            </button>
                            </div>}
                                
                                {inputList.length - 1 === i &&  <div >
                            <button type="submit" className="btn btn-outline-primary" onClick={handleAddClick}>
                              Add Member
                            </button>
                            </div>}
                            {handleTextBox(inputList)}
                            </div>
                            </div>
                        );
                        })}
                      </div>
                      <hr />
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    
                    <div>
                    <div className="form-group">
                        <label htmlFor="sel1">Group Lead Name</label>
                       <input type = "text" name = "groupName" className = "form-control" placeholder = "Enter group name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.groupName}  required/>
                        {formik.touched.groupName ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.groupName}</div>) : null}
                      </div>
                  
                    </div>
                  
                        <center>
                        <div>    
                        <div>
                          <button type="submit" className="btn btn-outline-primary" style = {{fontWeight : 'bold',}}>
                            Submit
                          </button>
                        </div>
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
      </>
      )
    
}

export default CreateStudentGroup
