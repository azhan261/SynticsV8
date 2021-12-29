import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { updateTestimonial } from '../../Apis/apiForTestimonials';

function EditTestimonialForStudent() {
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
          location.state.testimonialTitle = data.testimonialTitle
          location.state.testimonialContent = contentFromTextArea
          updateTestimonial(location.state, location.state._id)
          history.push("/testimonial-list")
        }
    };
    const onSubmit = async (data) => {
        
        await log(data)
        //history.push("/placement-question-details")
      }
      const formik = useFormik({
        initialValues: {
           testimonialTitle:location.state.testimonialTitle,
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
            if(!values.testimonialTitle){
                errors.testimonialTitle = "Please enter Complain's Title"
          }
            return errors


        }


    })
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Complain Edit Panel</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                    <form onSubmit={formik.handleSubmit}>
                        
                    <div>
                    <label htmlFor>Title</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Complain's Title" name="testimonialTitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.testimonialTitle} className="form-control" required  />
                            {formik.errors.testimonialTitle && formik.touched.testimonialTitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.testimonialTitle}</div>) : null}
                    
                    </div>
                    <div>
                    <label htmlFor>Complain Content</label>
                    <Editor
                        apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={location.state.testimonialContent}
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
                      <button type="submit" className="btn btn-dark mt-2">
                        Create Complain
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

export default EditTestimonialForStudent
