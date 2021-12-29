import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';
import "../../../../../../Sass.scss"

class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post("https://syntics.co/api/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <div className="content">
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
                <h6 className="m-0 font-weight-bold text-white">Upload a File</h6>
              </div>
              <div className="card-body">
                <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="">
                        <button type="submit" className="btn btn-outline-primary" style = {{ fontWeight : "bold"}}>
                          Upload
                        </button>
                      </div>
                    </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.containerBlackDashboard-fluid */}
        </div>
          </div>
                </div>
            </div>
        )
    }
}

export default FilesUploadComponent;