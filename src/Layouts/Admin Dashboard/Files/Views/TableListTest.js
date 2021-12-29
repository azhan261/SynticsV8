import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { useHistory } from "react-router-dom";
import {createPlacement} from 'apiForPlacement';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";


class TableListTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
        };
      }
    
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };
    
      render() {
        const { editorState } = this.state;
        return (
            <>
      <div className="content">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Create Placement Test</CardTitle>
              </CardHeader>
              <CardBody>
              (
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        )
              </CardBody>
            </Card>
            <br />
            <input type="submit" value="Submit" />
            </Col>
            <Col md="6">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Placement Test Results</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                
                </CardBody>
              </Card>
            </Col>
         </Row>
      </div>
    </>
   );
}}

export default TableListTest