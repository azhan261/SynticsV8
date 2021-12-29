import React, { useState, useEffect }  from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { useHistory, Link } from "react-router-dom";
import { createRegistrations } from '../Apis/apiForRegistration'
import { createAudioFile } from '../Apis/apiForAudioSending';
import bcrypt, { hash } from 'bcryptjs';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import './formCss.scss'

function Registration() {
    const initialArray = [
       
    ]
 

  const [files, setFiles] = useState([])
  const [newNameForCv, setNewNameForCv] = useState([])
  
const MySwal = withReactContent(Swal)
  
    /*const { register, handleSubmit } = useForm({
      defaultValues: { text: todo ? todo.text : "" },
    });*/
  
    /*const submitHandler = handleSubmit((data) => {
      onSubmit(data)
    });*/
    const [currentReg, setCurrentReg] = useState(initialArray)
    const history = useHistory()
  
    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    const onSubmitHandler = async (data) => {
      setCurrentReg(data)
      /*history.push({
        pathname:"/stripe-checkout",
        state: data
      })
      */
   }
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
      //createRegistrations(data)
      MySwal.fire(
        {
        title: 'Registered Successfully!',
        text : 'Click on login to go to login page',
        type: 'success',
        confirmButtonText: 'Login'
      }).then(() => {
       console.log('hit')
       //redirecting 
       history.push("/login")
    });
  }
    
      //1 Start of by making initial values 
      const formik = useFormik({
          initialValues: {
              name: '',
              guardian:'',
              password:'',
              conf_pass:'',
              email: '',
              dob:'',
              cnic:'',
              cnicReference:'',
              classesGrade:'',
              gender:'',
              country_code:'',
              phone:'',
              country:'',
              address:'',
              province:'',
              status:'Student',
              confirmation: '',
          },
          
          //4 Make onSubmit propert to handle what happens to data on form submisison
  
          onSubmit: values => {
  
            
            //createTodo(formik.values)
            //redirecting 
            //history.push("/")
            uploadFile()
            onSubmit(formik.values)
            onSubmitHandler(formik.values)
          },
  
          //5 Make validation property
  
          validate: values => {
              
              let errors = {}
  
              const letters = /^[A-Za-z ]+$/;
  
              const cnic = /^[0-9--]+$/;
  
              const phone = /^[0-9]+$/;
  
              const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
              
              if(!values.name){
                  errors.name = "Please fill in Name"
              }else if (!letters.test(values.name)) {
                  errors.name = "Please enter a valid Name"
              }
             
              if(!values.password){
                  errors.password = "Please fill in your Password"
              }
             
              if(values.conf_pass != values.password){
                    errors.conf_pass = "Your password does not match"
              }
    
              if(!values.email){
                    errors.email = "Please fill in Email"
              }
    
              
    
                
         
              
    
              return errors
  
  
          }
  
  
      })
  
      console.log("Form errors", formik.errors)
  
      const fileChanged = (e) => {
        var testingFileChange  = e.target.files[0]
        //testingFileChange.name = "hi"
        var file = testingFileChange;
        var blob = file.slice(0, file.size, file.type);
        var random = Math.floor(Math.random() * 100000) + 100
        var settingName = formik.values.name + random + file.name 
        var newFile = new File([blob], settingName, {type: file.type});
        setNewNameForCv(settingName)
        console.log(newFile,)
        const f = newFile
        setFiles(f)
      }
      
  
      const uploadFile = () => {
        let data = new FormData();
        data.append('file', files);
        console.log(files)
        console.log(data)
        createAudioFile(data)
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
  
      return (
       
                    <div className="my-5 container">
                    <br /><br /><br /><br />
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <form onSubmit={formik.handleSubmit} >
                            
                                <h3>Sign Up</h3>
                                
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input required type="text"  placeholder="Enter Full Name" className="form-control" name="name"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
                                    {formik.errors.name && formik.touched.name ? (<div className='error' style ={{color:'red'}}>{formik.errors.name}</div>) : null}
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input required type="email" placeholder="Email" className="form-control"  name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                    {formik.touched.email ? (<div className='error' style ={{color:'red'}}>{formik.errors.email}</div>) : null}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input required type="password" placeholder="Password"  className="form-control" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                                    {formik.errors.password && formik.touched.password ? (<div className='error' style ={{color:'red'}}>{formik.errors.password}</div>) : null}
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input required type="password" placeholder="Confirm Password"  className="form-control" name="conf_pass" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.conf_pass} />
                                    {formik.errors.conf_pass && formik.touched.conf_pass ? (<div className='error' style ={{color:'red'}}>{formik.errors.conf_pass}</div>) : null}
                                </div>
                                
                                <button className="btn btn-secondary text-white btn-block" type="submit">Register</button>
                                <br />
                                <span>Already Have an account? <Link to="/login">Login</Link></span>
                            </form>
                           
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <br /><br /><br /><br />
                </div>
      
                  
      )
}

export default Registration
