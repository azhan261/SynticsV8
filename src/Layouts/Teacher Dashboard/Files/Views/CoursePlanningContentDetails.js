import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { updatePlacementTestQuestions, getPlacementTestQuestion } from '../Apis/apiForPlacementTestQuestions'


function CoursePlanningContentDetails() {
         /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()
  const [question, setQuestion] = useState();
  const match = useRouteMatch()


  /*useEffect(() => {
    const fetchTodo = async () => {
      const question = await getPlacementTestQuestion(`${props.match.params._id}`)
      setQuestion(question)
    }
    fetchTodo()
  }, []);
  */
  const onSubmit = async (data) => {
    console.log(data)
    console.log(question)
    //await updatePlacementTestQuestions(data, match.params._id)
    //history.push("/placement-question-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           question:'',
           totalmarks:'',
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
            
            if(!values.question){
                errors.question = "Please enter your Question"
            
            }
            if(!values.totalmarks){
                errors.totalmarks = "Please enter Total Marks"
            }else if (!phone.test(values.totalmarks)) {
                errors.totalmarks = "Please enter digits only"
            }else if (symbols.test(values.totalmarks)) {
                errors.totalmarks = "Please enter digits only"
            }
            return errors


        }


    })

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
                        
                    <div>
                    <label htmlFor>Questions</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Question" name="question" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.question} className="form-control" required  />
                            {formik.errors.question && formik.touched.question ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.question}</div>) : null}
                    
                    </div>
                    <div>
                    <label htmlFor>Total Marks</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Total Marks for the Question" name="totalmarks" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.totalmarks} className="form-control" required  />
                            {formik.errors.totalmarks && formik.touched.totalmarks ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.totalmarks}</div>) : null}
                    
                    </div>
                    <center>
                      <button type="submit" className="btn btn-dark">
                        Create Questions
                      </button>
                    </center>
                    </form>
                    </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )



}

export default CoursePlanningContentDetails
