import React, { Component } from "react";
import { notify } from "react-notify-toast";
import Spinner from "./Spinner";
//import { API_URL } from "./config";

export default class ResettPasswordRequestAuth extends Component {
  state = {
    sendingEmail: false
  };

  onSubmit = event => {
      console.log(this.email.value)
      event.preventDefault();
    /* Prevent a browser reload/refresh when the form submitted. It helps to keep the state condition */
    
    event.preventDefault();
    this.setState({ sendingEmail: true });

    
    fetch(`https://syntics.co/emailForPassword`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: this.email.value })
    })

      
  };

  render = () => {
    const { sendingEmail } = this.state;
    /* ref is put on the form let reset the form after submission */
    return (
      <section id = "hero" className="contact">
      <form onSubmit={this.onSubmit} ref={form => (this.form = form)} className="php-email-form" data-aos="fade-up" >
        <div >
        <center>
            <div className = "mt-4">
              
                <h5 style={{color : "#5777ba", fontWeight : "bold"}}>
                Please enter your valid email address that you used to sign up <br />to request your password to be reset
                </h5>
            </div>
        <div className = "col-md-4 mt-3 form-group"> 

        <label htmlFor="email">Email</label>
          <input
            className="form-control" 
            type="email"
            name="email"
            ref={input => (this.email = input)}
            autoComplete="off"
            required
            
          />
        </div>
     
        <div>
          {/* While email is being sent, disable the button by showing spinner */}
          <button type="submit" className = "mt-4"><i className="fas fa-paper-plane fa-lg"></i> <span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Send Request</span>
          </button>
        </div>
        </center>
        </div>
      </form>
      </section>
    );
  };
}
