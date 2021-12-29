import React from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createBlogs } from '../Apis/apiForBlogs'


function Blog() {
        /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()


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
    await createBlogs(data)
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           blogstitle:'',
           blogscontent:'',
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
            if(!values.blogscontent){
                errors.blogscontent = "Please enter your Blog"
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
              <CardHeader>blogscontents</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                    <form onSubmit={formik.handleSubmit}>
                        
                    <div>
                    <label htmlFor>Title</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Blog's Title" name="blogstitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.blogstitle} className="form-control" required  />
                            {formik.errors.blogstitle && formik.touched.blogstitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.blogstitle}</div>) : null}
                    
                    </div>
                    <div>
                    <label htmlFor>Blog</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Your Blog" name="blogscontent" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.blogscontent} className="form-control" required  />
                            {formik.errors.blogscontent && formik.touched.blogscontent ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.blogscontent}</div>) : null}
                    
                    </div>
                    <center>
                      <button type="submit" className="btn btn-dark">
                        Create blogscontent
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

export default Blog
