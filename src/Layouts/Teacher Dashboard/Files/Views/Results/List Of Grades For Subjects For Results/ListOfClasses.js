import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom' 
import { CDBBtn, CDBContainer } from "cdbreact";

function ListOfClassesForTeacher() {
    return (
        <div className="container-fluid">
        <Row className="mt-3">
          <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-1-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 1
              </CardBody>
            </Card>
            </Link>
            </Col>
            <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-2-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 2
              </CardBody>
            </Card>
            </Link>
            </Col>
            <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-3-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 3
              </CardBody>
            </Card>
            </Link>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-4-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 4
              </CardBody>
            </Card>
            </Link>
            </Col>
            <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-5-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 5
              </CardBody>
            </Card>
            </Link>
            </Col>
            <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-6-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 6
              </CardBody>
            </Card>
            </Link>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-7-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 7
              </CardBody>
            </Card>
            </Link>
            </Col>
            <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-8-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 8
              </CardBody>
            </Card>
            </Link>
            </Col>
            <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-9-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 9
              </CardBody>
            </Card>
            </Link>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-10-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 10
              </CardBody>
            </Card>
            </Link>
            </Col>
            <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-11-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 11
              </CardBody>
            </Card>
            </Link>
            </Col>
            <Col md="4">
          <Link style={{textDecoration:"none", color:"black"}} to = "/Grade-12-content">
            <Card className="card-plain text-center">
           
              <CardBody>
                    Grade 12
              </CardBody>
            </Card>
            </Link>
            </Col>
            </Row>
        </div>
    )
}

export default ListOfClassesForTeacher
