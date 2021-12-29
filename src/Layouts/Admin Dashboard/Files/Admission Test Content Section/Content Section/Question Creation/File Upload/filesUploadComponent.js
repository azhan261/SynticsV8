import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';

class filesUploadComponentForAdmin extends Component {
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
            <Row>
            <Col md="12">
                <Card className="card-plain">
                <CardHeader>Upload Question File</CardHeader>
                <CardBody>
                    <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-primary" type="submit">Upload</button>
                        </div>
                    </form>
                    </div>
                </CardBody>
                </Card>
            </Col>
            </Row>
            </div>
        )
    }
}

export default filesUploadComponentForAdmin;