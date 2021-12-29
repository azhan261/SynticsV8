import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2'
//import { getAnswerSpecific } from '../../Apis/apiForAnswers';

function ProgressReportOfStudentGroups() {
  /*
    let {id} = useParams()
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [totalObtainedMarksEnglish, setTotalObtainedMarksEnglish] = useState()
    const [totalObtainedMarksUrdu, setTotalObtainedMarksUrdu] = useState()
    const [totalObtainedMarksIslamiyat, setTotalObtainedMarksIslamiyat] = useState()
    const [totalObtainedMarksPhysics, setTotalObtainedMarksPhysics] = useState()
    const [totalObtainedMarksChemistry, setTotalObtainedMarksChemistry] = useState()
    const [totalObtainedMarksComputer, setTotalObtainedMarksComputer] = useState()
    const [totalOriginalMarksEnglish, setTotalOriginalMarksEnglish] = useState()
    const [totalOriginalMarksUrdu, setTotalOriginalMarksUrdu] = useState()
    const [totalOriginalMarksIslamiyat, setTotalOriginalMarksIslamiyat] = useState()
    const [totalOriginalMarksPhysics, setTotalOriginalMarksPhysics] = useState()
    const [totalOriginalMarksChemistry, setTotalOriginalMarksChemistry] = useState()
    const [totalOriginalMarksComputer, setTotalOriginalMarksComputer] = useState()
    const [studentDataValues, setStudentDataValues] = useState([])
    useEffect(() => {
      
        const fetchStudentData = async function() {
          const studentData = await getAnswerSpecific(id)
          console.log(studentData)
          setStudentDataValues(studentData)
        }
        fetchStudentData() 
        
    }, [])

    const timerId = setTimeout(() => {
        chartsData()
      }, 1500);
      var testing = ''
      var arrForEnglishValues = [];
      var arrForEnglishValuesObtainedMarks = [];

      var arrForUrduValues = [];
      var arrForUrduValuesObtainedMarks = [];

      var arrForIslamiyatValues = [];
      var arrForIslamiyatValuesObtainedMarks = [];

      var arrForPhysicsValues = [];
      var arrForPhysicsValuesObtainedMarks = [];

      var arrForChemistryValues = [];
      var arrForChemistryValuesObtainedMarks = [];

      var arrForComputerScienceValues = [];
      var arrForComputerScienceValuesObtainedMarks = [];
      
      var totForEnglishValues = 0;
      
      var totForEnglishValuesObtainedMarks = 0;
      
      var totForUrduValue = 0;
      
      var totForUrduValueObtainedMarks = 0;
      
      var totForIslamiyatValues = 0;
      
      var totForIslamiyatValuesObtainedMarks = 0;
      
      var totForPhysicsValues = 0;
      
      var totForPhysicsValuesObtainedMarks = 0;
      
      var totForChemistryValues = 0;
      
      var totForChemistryValuesObtainedMarks = 0;
      
      var totForComputerScienceValues = 0;
      
      var totForComputerScienceValuesObtainedMarks = 0;

    const chartsData = () => {
        
        for (var i=0;i<studentDataValues.length;i++){
            if (studentDataValues[i].coursetype === "English"){
                    arrForEnglishValues.push(studentDataValues[i].totalMarks)
                    arrForEnglishValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "Urdu"){
                    arrForUrduValues.push(studentDataValues[i].totalMarks)
                    arrForUrduValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "Islamiyat"){
                    arrForIslamiyatValues.push(studentDataValues[i].totalMarks)
                    arrForIslamiyatValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "Physics"){
                    arrForPhysicsValues.push(studentDataValues[i].totalMarks)
                    arrForPhysicsValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "Chemistry"){
                    arrForChemistryValues.push(studentDataValues[i].totalMarks)
                    arrForChemistryValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "Computer Science"){
                    arrForComputerScienceValues.push(studentDataValues[i].totalMarks)
                    arrForComputerScienceValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
        }
     
        for(var i=0;i<arrForEnglishValues.length;i++){
            totForEnglishValues +=  parseInt(arrForEnglishValues[i]);
        }
        for(var i=0;i<arrForEnglishValuesObtainedMarks.length;i++){
            if(arrForEnglishValuesObtainedMarks[i] == ""){
                arrForEnglishValuesObtainedMarks[i] = 0
              }
            totForEnglishValuesObtainedMarks +=  parseInt(arrForEnglishValuesObtainedMarks[i]);
        }
        for(var i=0;i<arrForUrduValues.length;i++){
            totForUrduValue +=  parseInt(arrForUrduValues[i]);
        }
        for(var i=0;i<arrForUrduValuesObtainedMarks.length;i++){
            if(arrForUrduValuesObtainedMarks[i] == ""){
                arrForUrduValuesObtainedMarks[i] = 0
              }
            totForUrduValueObtainedMarks +=  parseInt(arrForUrduValuesObtainedMarks[i]);
            
        }
        for(var i=0;i<arrForIslamiyatValues.length;i++){
            totForIslamiyatValues +=  parseInt(arrForIslamiyatValues[i]);
        }
        for(var i=0;i<arrForIslamiyatValuesObtainedMarks.length;i++){
            if(arrForIslamiyatValuesObtainedMarks[i] == ""){
                arrForIslamiyatValuesObtainedMarks[i] = 0
              }
            totForIslamiyatValuesObtainedMarks +=  parseInt(arrForIslamiyatValuesObtainedMarks[i]);
        }
        for(var i=0;i<arrForPhysicsValues.length;i++){
            totForPhysicsValues +=  parseInt(arrForPhysicsValues[i]);
        }
        for(var i=0;i<arrForPhysicsValuesObtainedMarks.length;i++){
            if(arrForPhysicsValuesObtainedMarks[i] == ""){
                arrForPhysicsValuesObtainedMarks[i] = 0
              }
            totForPhysicsValuesObtainedMarks +=  parseInt(arrForPhysicsValuesObtainedMarks[i]);
        }
        for(var i=0;i<arrForChemistryValues.length;i++){
            totForChemistryValues +=  parseInt(arrForChemistryValues[i]);
        }
        for(var i=0;i<arrForChemistryValuesObtainedMarks.length;i++){
            if(arrForChemistryValuesObtainedMarks[i] == ""){
                arrForEnglishValuesObtainedMarks[i] = 0
              }
            totForChemistryValuesObtainedMarks +=  parseInt(arrForChemistryValuesObtainedMarks[i]);
        }
        for(var i=0;i<arrForComputerScienceValues.length;i++){
            totForComputerScienceValues +=  parseInt(arrForComputerScienceValues[i]);
        }
        for(var i=0;i<arrForComputerScienceValuesObtainedMarks.length;i++){
            if(arrForComputerScienceValuesObtainedMarks[i] == ""){
                arrForComputerScienceValuesObtainedMarks[i] = 0
              }
            totForComputerScienceValuesObtainedMarks +=  parseInt(arrForComputerScienceValuesObtainedMarks[i]);
            
        }
        
        
        setTotalObtainedMarksEnglish(totForEnglishValuesObtainedMarks)
        setTotalObtainedMarksUrdu(totForUrduValueObtainedMarks)
        setTotalObtainedMarksIslamiyat(totForIslamiyatValuesObtainedMarks)
        setTotalObtainedMarksPhysics(totForPhysicsValuesObtainedMarks)
        setTotalObtainedMarksChemistry(totForChemistryValuesObtainedMarks)
        setTotalObtainedMarksComputer(totForComputerScienceValuesObtainedMarks)

        setTotalOriginalMarksEnglish(totForEnglishValues)
        setTotalOriginalMarksUrdu(totForUrduValue)
        setTotalOriginalMarksIslamiyat(totForIslamiyatValues)
        setTotalOriginalMarksPhysics(totForPhysicsValues)
        setTotalOriginalMarksChemistry(totForChemistryValues)
        setTotalOriginalMarksComputer(totForComputerScienceValues)

        console.log([Math.floor(totForEnglishValuesObtainedMarks), totForUrduValueObtainedMarks, totForIslamiyatValuesObtainedMarks, 
                    totForPhysicsValuesObtainedMarks, totForChemistryValuesObtainedMarks, totForComputerScienceValuesObtainedMarks])
    }
    */
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
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Performance</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white">Performance Charts</h6>
              </div>
              <div className="card-body">
                  <Bar 
                    data = {{
                        labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
                        datasets: [{
                            label: 'Project Results',
                            data: [0,0,0,0,0],
                                },
                                {
                                    label : 'Original Marks',
                                    data: [100, 100, 100, 100, 100],
                                    backgroundColor: "orange"
                                } 
                            ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                  />
              </div>
            </div>
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white"></h6>
              </div>
              <div className="card-body">
              <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
        <thead>
                              <tr>
                              <th>Projects</th>
                              <th>Project 1</th>
                              <th>Project 2</th>
                              <th>Project 3</th>
                              <th>Project 4</th>
                              <th>Project 5</th>
                              
                              </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    Original Marks
                                </td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                             

                            </tr>
                            <tr>
                                <td>
                                    Obtained Marks
                                </td>
                                <td>
                                    0
                                </td>
                                <td>
                                    0
                                </td>
                                <td>
                                   0
                                </td>
                                <td>
                                    0
                                </td>
                                <td>
                                    0
                                </td>
                                
                            </tr>
                          </tbody>
                    </table>
                
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

export default ProgressReportOfStudentGroups
