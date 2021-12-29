import React from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';

function FilesUploadFunctionalForStudent(props) {
    const state = {
        profileImg: props.data
    }
    
    const onSubmit = () => {
        console.log(state.profileImg)
        const formData = new FormData()
        formData.append('profileImg', state.profileImg)
        console.log(formData)
        axios.post("https://syntics.co/api/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
        
        
    }
    return (
            <div className="content">
            <Row>
            <Col md="12">
                <Card className="card-plain">
                <CardHeader>Upload Question File</CardHeader>
                <CardBody>
                    <div>
                        <div className="form-group">
                        <button className="btn btn-dark" onClick={() => onSubmit()}>Upload</button>
                        </div>
                    </div>
                </CardBody>
                </Card>
            </Col>
            </Row>
            </div>
        )
}

export default FilesUploadFunctionalForStudent
