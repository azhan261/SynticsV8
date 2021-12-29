import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2'

import { getRegistrations } from '../../../../Student Dashboard/Files/Apis/apiForRegistrations';

function StatsOfClassVsGender() {
    let {id} = useParams()
    var serialNumber = 0
    const [studentAmount, setStudentAmount] = useState([])


    useEffect(() => {
        const fetchStudents = async function() {

          const students = await getRegistrations()
          setStudentAmount(students)
        }
        fetchStudents()
      }, []);

      const [totalForMaleGrade1, setTotalForMaleGrade1] = useState()
      const [totalForFemaleGrade1, setTotalForFemaleGrade1] = useState()
     
      const [totalForMaleGrade2, setTotalForMaleGrade2] = useState()
      const [totalForFemaleGrade2, setTotalForFemaleGrade2] = useState()
      
      const [totalForMaleGrade3, setTotalForMaleGrade3] = useState()
      const [totalForFemaleGrade3, setTotalForFemaleGrade3] = useState()
      
      const [totalForMaleGrade4, setTotalForMaleGrade4] = useState()
      const [totalForFemaleGrade4, setTotalForFemaleGrade4] = useState()
      
      const [totalForMaleGrade5, setTotalForMaleGrade5] = useState()
      const [totalForFemaleGrade5, setTotalForFemaleGrade5] = useState()
      
      const [totalForMaleGrade6, setTotalForMaleGrade6] = useState()
      const [totalForFemaleGrade6, setTotalForFemaleGrade6] = useState()
      
      const [totalForMaleGrade7, setTotalForMaleGrade7] = useState()
      const [totalForFemaleGrade7, setTotalForFemaleGrade7] = useState()
      
      const [totalForMaleGrade8, setTotalForMaleGrade8] = useState()
      const [totalForFemaleGrade8, setTotalForFemaleGrade8] = useState()
      
      const [totalForMaleGrade9, setTotalForMaleGrade9] = useState()
      const [totalForFemaleGrade9, setTotalForFemaleGrade9] = useState()
      
      const [totalForMaleGrade10, setTotalForMaleGrade10] = useState()
      const [totalForFemaleGrade10, setTotalForFemaleGrade10] = useState()
      
      const [totalForMaleGrade11, setTotalForMaleGrade11] = useState()
      const [totalForFemaleGrade11, setTotalForFemaleGrade11] = useState()
      
      const [totalForMaleGrade12, setTotalForMaleGrade12] = useState()
      const [totalForFemaleGrade12, setTotalForFemaleGrade12] = useState()

      const [totalForMale, setTotalForMale] = useState()
      const [totalForFemale, setTotalForFemale] = useState()
      
      const timerId = setTimeout(() => {
        chartsData()
      }, 1500);
      
      var arrForStudentsMaleGrade1 = [];
      var arrForStudentsFemaleGrade1 = [];

      var arrForStudentsMaleGrade2 = [];
      var arrForStudentsFemaleGrade2 = [];

      var arrForStudentsMaleGrade3 = [];
      var arrForStudentsFemaleGrade3 = [];

      var arrForStudentsMaleGrade4 = [];
      var arrForStudentsFemaleGrade4 = [];

      var arrForStudentsMaleGrade5 = [];
      var arrForStudentsFemaleGrade6 = [];

      var arrForStudentsMaleGrade7 = [];
      var arrForStudentsFemaleGrade7 = [];
      
      var arrForStudentsMaleGrade8 = [];
      var arrForStudentsFemaleGrade8 = [];

      var arrForStudentsMaleGrade9 = [];
      var arrForStudentsFemaleGrade9 = [];

      var arrForStudentsMaleGrade10 = [];
      var arrForStudentsFemaleGrade10 = [];

      var arrForStudentsMaleGrade11 = [];
      var arrForStudentsFemaleGrade11 = [];

      var arrForStudentsMaleGrade12 = [];
      var arrForStudentsFemaleGrade12 = [];

      

      var totForMaleGrade1= 0;
      var totForFemaleGrade1 = 0;
      
      var totForMaleGrade2= 0;
      var totForFemaleGrade2 = 0;
      
      var totForMaleGrade3= 0;
      var totForFemaleGrade3 = 0;
      
      var totForMaleGrade4= 0;
      var totForFemaleGrade4 = 0;
      
      var totForMaleGrade5= 0;
      var totForFemaleGrade5 = 0;
      
      var totForMaleGrade6= 0;
      var totForFemaleGrade6 = 0;
      
      var totForMaleGrade7= 0;
      var totForFemaleGrade7 = 0;
      
      var totForMaleGrade8= 0;
      var totForFemaleGrade8 = 0;
      
      var totForMaleGrade9= 0;
      var totForFemaleGrade9 = 0;
      
      var totForMaleGrade10= 0;
      var totForFemaleGrade10 = 0;
      
      var totForMaleGrade11= 0;
      var totForFemaleGrade11 = 0;
      
      var totForMaleGrade12 = 0;
      var totForFemaleGrade12 = 0;

      var totForMale = 0;
      var totForFemale = 0;

     

      const chartsData = () => {
          
        for (var i=0;i<studentAmount.length;i++){
            console.log(studentAmount[i].classesGrade)
            if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Male") ){

                totForMaleGrade1 +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade1 +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade2 +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade2 +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade3 +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade3 +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade4 +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade4 +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade5 +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade5 +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade6 +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade6 +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade7 +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade7 +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade8 +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade8 +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade9 +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade9 +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade10 +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade10 +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade11 +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade11 +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade12 +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Female") ){
                
                totForFemaleGrade12 +=  1
            }
           
        }
        
        
        for (var i=0;i<studentAmount.length;i++){
            console.log(studentAmount[i].classesGrade)
            if (studentAmount[i].gender == "Male"){

                totForMale +=  1
            }
            else if(studentAmount[i].gender == "Female"){

                totForFemale +=  1
            }
        }

        setTotalForMaleGrade1(totForMaleGrade1)
        setTotalForFemaleGrade1(totForFemaleGrade1)

        setTotalForMaleGrade2(totForMaleGrade2)
        setTotalForFemaleGrade2(totForFemaleGrade2)

        setTotalForMaleGrade3(totForMaleGrade3)
        setTotalForFemaleGrade3(totForFemaleGrade3)
        
        setTotalForMaleGrade4(totForMaleGrade4)
        setTotalForFemaleGrade4(totForFemaleGrade4)
        
        setTotalForMaleGrade5(totForMaleGrade5)
        setTotalForFemaleGrade5(totForFemaleGrade5)
        
        setTotalForMaleGrade6(totForMaleGrade6)
        setTotalForFemaleGrade6(totForFemaleGrade6)
        
        setTotalForMaleGrade7(totForMaleGrade7)
        setTotalForFemaleGrade7(totForFemaleGrade7)
        
        setTotalForMaleGrade8(totForMaleGrade8)
        setTotalForFemaleGrade8(totForFemaleGrade8)
        
        setTotalForMaleGrade9(totForMaleGrade9)
        setTotalForFemaleGrade9(totForFemaleGrade9)
        
        setTotalForMaleGrade10(totForMaleGrade10)
        setTotalForFemaleGrade10(totForFemaleGrade10)
        
        setTotalForMaleGrade11(totForMaleGrade11)
        setTotalForFemaleGrade11(totForFemaleGrade11)
        
        setTotalForMaleGrade12(totForMaleGrade12)
        setTotalForFemaleGrade12(totForFemaleGrade12)

        setTotalForMale(totForMale)
        setTotalForFemale(totForFemale)
    }
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
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Statistics</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
                <h6 className="m-0 font-weight-bold text-white">Classes and Gender</h6>
              </div>
              <div className="card-body">
                  <Bar 
                    data = {{
                    labels: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'PHP', 'LARAVEL', 'REACT', 'NODE JS', 'MONGO DB',  'Total'],
                        datasets: [{
                            label: 'Male Students',
                            data: [totalForMaleGrade1, totalForMaleGrade2, totalForMaleGrade3, totalForMaleGrade4,
                                    totalForMaleGrade5, totalForMaleGrade6, totalForMaleGrade7, totalForMaleGrade8, 
                                    totalForMaleGrade9, totalForMaleGrade10, totalForMaleGrade11, totalForMaleGrade12, totalForMale],
                            backgroundColor: "#33B5FF"
                                },
                                {
                                    label : 'Female Students',
                                    data: [totalForFemaleGrade1, totalForFemaleGrade2, totalForFemaleGrade3, totalForFemaleGrade4,
                                        totalForFemaleGrade5, totalForFemaleGrade6, totalForFemaleGrade7, totalForFemaleGrade8,
                                        totalForFemaleGrade9, totalForFemaleGrade10, totalForFemaleGrade11, totalForFemaleGrade12, totalForFemale],
                                    backgroundColor: "#FF71FF"
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
                              <th>Content</th>
                              <th>HTML</th>
                              <th>CSS</th>
                              <th>BOOTSTRAP</th>
                              <th>JAVASCRIPT</th>
                              <th>PHP</th>
                              <th>LARAVEL</th>
                              <th>REACT</th>
                              <th>NODE JS</th>
                              <th>MONGO DB</th>
                             
                              <th>Total</th>
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
                                Male
                                </td>
                                <td>
                                    {totalForMaleGrade1}
                                </td>
                                <td>
                                    {totalForMaleGrade2}
                                </td>
                                <td>
                                    {totalForMaleGrade3}
                                </td>
                                <td>
                                    {totalForMaleGrade4}
                                </td>
                                <td>
                                    {totalForMaleGrade5}
                                </td>
                                <td>
                                    {totalForMaleGrade6}
                                </td>
                                <td>
                                    {totalForMaleGrade7}
                                </td>
                                <td>
                                    {totalForMaleGrade8}
                                </td>
                                <td>
                                    {totalForMaleGrade9}
                                </td>
                            
                                <td>
                                    {totalForMale}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Female
                                </td>
                                <td>
                                {totalForFemaleGrade1}
                                </td>
                                <td>
                                {totalForFemaleGrade2}
                                </td>
                                <td>
                                {totalForFemaleGrade3}
                                </td>
                                <td>
                                {totalForFemaleGrade4}
                                </td>
                                <td>
                                {totalForFemaleGrade5}
                                </td>
                                <td>
                                {totalForFemaleGrade6}
                                </td>
                                <td>
                                {totalForFemaleGrade7}
                                </td>
                                <td>
                                {totalForFemaleGrade8}
                                </td>
                                <td>
                                {totalForFemaleGrade9}
                                </td>
                            
                                <td>
                                {totalForFemale}
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

export default StatsOfClassVsGender
