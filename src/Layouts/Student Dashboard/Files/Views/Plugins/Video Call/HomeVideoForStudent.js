import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class HomeVideoForStudent extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/student/conference-call/${url}`
		}
	}

	render() {
		return (
			
				
			<>
      <div>
        <div className = "mt-5 pt-4">
                      {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid">
            {/* Page Heading */}
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
			          <label><h3 className = "text-white">Conference Call</h3></label>  
              </div>
              <div className="card-body">
                <div> 
                                <div className = "mb-3">
                                <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "#306EFF"}}>
									<h6 className = "text-white">Invite your class fellows for a group study session</h6>
                                </div>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                                </div>
                                <hr />
                                <div className = "mt-2">
                                </div>
                                <center>
                                <div className="">
                                  <button type="submit" className="btn btn-outline-primary"  style = {{fontWeight: "bold"}} onClick={this.join}>
									                  Create Session
                                  </button>
                                </div>
                                </center>
                                
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
                </div>
              </>
		
		)
	}
}

export default HomeVideoForStudent;