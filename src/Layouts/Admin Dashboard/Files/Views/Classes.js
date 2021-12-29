import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createClasses } from '../Apis/apiForClasses';

function ClassesForAdmin() {
    const [inputList, setInputList] = useState([{ subject: "",}]);
 
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
      setInputList([...inputList, { subject: "",}]);
    };
   
     /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()

 
  const onSubmitHandler = async (data) => {
    console.log(data)
    await createClasses(data)
    history.push('/placement-question-details')
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
           grade:'',
           subjects: ''
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
    const handleTextBox = (data) => {
      formik.values.subjects = data
      console.log(formik.values)
    }
   
    console.log("Form errors", formik.errors)
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Questions</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                    <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                          <label htmlFor="sel1">Class Grade</label>
                          <select name="grade" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.grade} className="form-control" >
                            <option>Select Class Grade</option>                  
                            <option >Grade 1</option>
                            <option >Grade 2</option>
                            <option >Grade 3</option>
                            <option >Grade 4</option>
                            <option >Grade 5</option>
                            <option >Grade 6</option>
                            <option >Grade 7</option>
                            <option >Grade 8</option>
                            <option >Grade 9</option>
                            <option >Grade 10</option>
                            <option >Grade 11</option>
                            <option >Grade 12</option>
                          </select>
                          {formik.touched.grade ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.grade}</div>) : null}

                        </div>
                  
                      <center>
                    </center>
                    </form>
                    </div>
                </div>
                <div className="mt-3">
                        <h3>Subjects</h3>
                        <p>Click Add to add more Subjects</p>
                        {inputList.map((x, i) => {
                        return (
                            <div className="box">
                            <select name="subject"
                                    placeholder="Enter Subject"
                                    value={x.subject}
                                    onChange={e => handleInputChange(e, i)} >
                                <option>Select Subject to Add</option>                  
                                <option>English</option>
                                <option>Chemistry</option>
                                <option>Urdu</option>
                                <option>Physics</option>
                                <option>Maths</option>
                          </select>
                            <div className="btn-box">
                                {inputList.length !== 1 && <button
                                className="mr10 btn btn-dark m-3"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                                
                                {inputList.length - 1 === i && <button className = "btn btn-dark m-3" onClick={handleAddClick}>Add</button>}
                            </div>
                            
                            </div>
                        );
                        })}
                        
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                          <div>
                          </div>
                          <center>
                          <button type="submit" className="btn btn-dark mt-3">
                            Create Classes
                          </button>
                        </center>
                        </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {handleTextBox(inputList)}
      </div>
  
    </>
    )
}

export default ClassesForAdmin
