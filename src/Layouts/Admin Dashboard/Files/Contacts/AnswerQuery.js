import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { updateContact } from '../Apis/apiForContactUs';

function AnswerQueryForAdmin() {
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const log = (data) => {
      if (editorRef.current) {
        console.log(data)
        var contentFromTextArea = editorRef.current.getContent({ format: "text" });
        location.state.queryAnswerTitle = data.queryAnswerTitle
        location.state.queryAnswerContent = contentFromTextArea
        updateContact(location.state, location.state._id)
        console.log(location.state)
        fetch(`https://syntics.co/email`, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ 
            email: location.state.email, 
            message: location.state.queryAnswerContent, 
            subject: location.state.queryAnswerTitle 
          })
        }).then(res => res.json())
          /* update the button and stop spinner, show toast msg, reset the form*/
          .then(data => {
            this.setState({ sendingEmail: false });
            this.form.reset();
          })
          .catch(err => console.log(err));
        //history.push("/content-list")
      }
  };
  const onSubmit = async (data) => {
      
      await log(data)
      //history.push("/placement-question-details")
    }
    const formik = useFormik({
      initialValues: {
        queryAnswerTitle: '',
        queryAnswerContent : ''
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
  return (
      <>
      <div className="container-fluid">
      <Row>
        <Col md="12">
          <Card className="card-plain">
            <CardHeader>Schools Training Adult Course Q/A Content Editing Panel</CardHeader>
            <CardBody>
            <form onSubmit={formik.handleSubmit}>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2 bg-light text-dark">
                          <label ><h6 className="m-0 font-weight-bold text-white">Query's Title</h6></label>
                      </div>
                      <div class="p-3 mb-2 bg-dark text-white">
                      <input type="text" placeholder="Title for Query Answerin" name="queryAnswerTitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.queryAnswerTitle} className="form-control" required  />
                      {formik.errors.queryAnswerTitle && formik.touched.queryAnswerTitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.questiontitle}</div>) : null}
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2 bg-light text-dark">
                          <label ><h6 className="m-0 font-weight-bold text-white">Please create your desired <b>Query</b> answer below</h6></label>
                      </div>
                      <div class="p-3 mb-2 bg-dark text-white">
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
                      <center>
                        <button type="submit" className="btn btn-success mt-3">
                          Submit Answer
                        </button>
                      </center>
                  </form>
                  </CardBody>
                  </Card>
                  </Col>
                  </Row>
                  </div>
  </>
  )
}

export default AnswerQueryForAdmin
