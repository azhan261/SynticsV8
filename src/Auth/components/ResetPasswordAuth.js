import React, { useState, useEffect }  from 'react'
import { Formik, FormikConsumer, useFormik, } from 'formik'
import {BrowserRouter as Router, Switch, Route, useParams, useHistory} from "react-router-dom";
  
//import { createRegistrations } from './apiForRegistration'
import bcrypt, { hash } from 'bcryptjs';
//import { updateRegistrations } from '../../apiForRegistration';


function ResetPasswordAuth() {
    let { id } = useParams();
    console.log( {id} )
    const initialArray = [

    ]
    //Password Hashing
    /*const { register, handleSubmit } = useForm({
      defaultValues: { text: todo ? todo.text : "" },
    });*/
    /*const submitHandler = handleSubmit((data) => {
      onSubmit(data)
    });*/
  
    const [currentReg, setCurrentReg] = useState(initialArray)
    const history = useHistory()
    const onSubmit = async (data) => {
        console.log(data)
        //Password Hashing
        const password = data.password;
        const confPassword = data.conf_pass;
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const hashConfPassword = bcrypt.hashSync(confPassword, salt);
        data.password = hashPassword
        data.conf_pass = hashConfPassword
        //-----------------
        console.log(data)
        console.log(hashPassword)
        //await updateRegistrations(data)
        //redirecting 
        //history.push("/")
      };
      //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
            password:'',
            conf_pass:'',
        },
        
        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)
          //onSubmitHandler(formik.values)
        },

        //5 Make validation property

        validate: values => {
            
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(values.conf_pass != values.password){
                errors.conf_pass = "Your password does not match"
            }
  
            return errors


        }


    })

    console.log("Form errors", formik.errors)


    


    return (
        <div>
        <section className="s-space-equal mt-5">
          <div className="container">
            <h1 className="title-dark-big title-head"></h1>
            <p></p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                  <h2 className="cart-area-title text-center pt-3">Password Reset</h2>
                  <hr/>
                  <div id="loader" style={{display: 'none'}}>
                    <img src={`${process.env.PUBLIC_URL}/assets/loader/tenor.gif`} width="100px" height="100px" />
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <center>
                    <div className="modal-body">
                 
                        <div className="col-md-6">
                          <label htmlFor>New Password*</label>
                          <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} className="form-control" required />
                        </div>
                        <div className="col-md-6">
                        <label htmlFor>Confirm New Password*</label>
                        <input type="password" name="conf_pass" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.conf_pass} className="form-control" required />
                        {formik.errors.conf_pass && formik.touched.conf_pass ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.conf_pass}</div>) : null}
                      </div>
                        <center>
                          <button type="submit" id="save_staff" className="btn btn-dark mt-4">
                            Save Changes
                          </button>
                        </center>
                        </div>
                        </center>
                        </form>
                        </div>
                        </div>
                        </div>
                        </div>
                        </section>
                        </div>
    )
}

export default ResetPasswordAuth
