import React, { useState, useEffect }  from 'react'
import { Link , useHistory, useLocation} from 'react-router-dom';
import LoginService from '../services/LoginService';
import LoginServiceTeacher from '../services/LoginServiceTeacher';
import Message from '../elements/Message';
import Error from '../elements/Error';
import Swal from 'sweetalert2'
import { getTeacher } from '../../Apis/apiForTeachers';

import {
    COMMON_FIELDS,
    REGISTRATION_FIELDS,
    LOGIN_FIELDS,
    LOGIN_MESSAGE,
    ERROR_IN_LOGIN,
  } from '../MessageBundle';


function LoginAuthFunctionalTeacher() {
   
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [errorState, setErrorState] = useState(false)
    const [loginSuccessState, setLoginSuccess] = useState(false)
    const history = useHistory()

    const handleOnChangeUserName = (e) => {
        console.log("car")
        setEmailState(e.target.value);
        console.log(emailState)
    };

    
    const handleOnChangePassword = (e) => {
        console.log("bike")
        setPasswordState( e.target.value );
        console.log(passwordState)
        
    };

    const Swal = require('sweetalert2')
    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
          email: emailState,
          password: passwordState,
          id : ''
        };
        console.log(data)
        const loginResult = await LoginServiceTeacher(data);
        if (loginResult !== 200) {
            setErrorState(true)
            setLoginSuccess(false)
        } else {
            console.log("Condition at if !== 200, else condition")
            console.log(loginResult)
            /*
            console.log(data.email)
            data.id = '612b86db1bc22a07884603aa'
            console.log(data.id)
            */
            console.log("getting the specific teacher with email")
            const gettingEmail = await getTeacher(data.email);
            console.log("Condition fulfilled for getting specific teacher")
            console.log("Checking: const gettingEmail = await getTeacher(data.email)")
            console.log(gettingEmail)
            console.log("Advancing to condition to check Status")
            if((gettingEmail[0].status == "Teacher") && (gettingEmail[0].confirmation == "Approved")){
              console.log("Condition Full Filled")
              console.log(gettingEmail[0]._id)
              var idForTeacher = gettingEmail[0]._id
              setErrorState(false)
              setLoginSuccess(true)
              history.push({
                pathname : `/teacher/teacherDashboard/${idForTeacher}`,
                state: gettingEmail[0]
              })
              
            }
            else if(gettingEmail[0].confirmation !== "Approved"){
              console.log("not got it")
              Swal.fire("Awaiting Approval Status",
              'You will be able to login once your information has been verified! <br> Please email at azlan@syntics.co for further information!', 
              'error')
              //setErrorState(true)
            }
            else{
              Swal.fire("Incorrect Information",
              'The! <br> Please email at azlan@syntics.co for further information!', 
              'error')
            }
            //history.push("/home")
            console.log("Error not hit")
        }
    };





    return (
      <div>

      <div>
                <div className="my-5 container">
                    <br /><br /><br /><br />
                    <div className="row">
                      
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <form >
                                <h3>Login In</h3>
                              
                                {/* {error && <span className="alert alert-danger">{error}</span>} */}
                               
                                
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input required tabIndex={1} type="email" name = "Username" placeholder="Email"  className="form-control" onChange={(e) => handleOnChangeUserName(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Password: <Link to="/forgotpassword" tabIndex={4}>Forgot Password?</Link></label>
                                    <input required tabIndex={2} type="password" placeholder="Password"  className="form-control"onChange={(e) => handleOnChangePassword(e)} />
                                </div>
                               
                                
                                <button tabIndex={3} className="btn btn-secondary text-white btn-block" onClick={(e) => onSubmit(e)}>Login</button> <br />
                                
                            </form>
                        </div>
                        {loginSuccessState && <Message message={LOGIN_MESSAGE}  />}    {' '}
                        {errorState && <Error message={ERROR_IN_LOGIN} />}    {' '}
                        <div className="col-md-4"></div>
                    </div>
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    )
}

export default LoginAuthFunctionalTeacher
