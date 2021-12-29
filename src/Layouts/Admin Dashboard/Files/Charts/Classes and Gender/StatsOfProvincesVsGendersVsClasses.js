import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2'

import { getRegistrations } from '../../../../Student Dashboard/Files/Apis/apiForRegistrations';


function StatsOfProvincesVsGendersVsClasses() {
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


      const [totalForMaleGrade1Kashmir, setTotalForMaleGrade1Kashmir] = useState()
      const [totalForMaleGrade1Balochistan, setTotalForMaleGrade1Balochistan] = useState()
      const [totalForMaleGrade1Gilgit, setTotalForMaleGrade1Gilgit] = useState()
      const [totalForMaleGrade1Khyber, setTotalForMaleGrade1Khyber] = useState()
      const [totalForMaleGrade1Punjab, setTotalForMaleGrade1Punjab] = useState()
      const [totalForMaleGrade1Sindh, setTotalForMaleGrade1Sindh] = useState()

      const [totalForFemaleGrade1Kashmir, setTotalForFemaleGrade1Kashmir] = useState()
      const [totalForFemaleGrade1Balochistan, setTotalForFemaleGrade1Balochistan] = useState()
      const [totalForFemaleGrade1Gilgit, setTotalForFemaleGrade1Gilgit] = useState()
      const [totalForFemaleGrade1Khyber, setTotalForFemaleGrade1Khyber] = useState()
      const [totalForFemaleGrade1Punjab, setTotalForFemaleGrade1Punjab] = useState()
      const [totalForFemaleGrade1Sindh, setTotalForFemaleGrade1Sindh] = useState()

     
      
      
      const [totalForMaleGrade2Kashmir, setTotalForMaleGrade2Kashmir] = useState()
      const [totalForMaleGrade2Balochistan, setTotalForMaleGrade2Balochistan] = useState()
      const [totalForMaleGrade2Gilgit, setTotalForMaleGrade2Gilgit] = useState()
      const [totalForMaleGrade2Khyber, setTotalForMaleGrade2Khyber] = useState()
      const [totalForMaleGrade2Punjab, setTotalForMaleGrade2Punjab] = useState()
      const [totalForMaleGrade2Sindh, setTotalForMaleGrade2Sindh] = useState()

      const [totalForFemaleGrade2Kashmir, setTotalForFemaleGrade2Kashmir] = useState()
      const [totalForFemaleGrade2Balochistan, setTotalForFemaleGrade2Balochistan] = useState()
      const [totalForFemaleGrade2Gilgit, setTotalForFemaleGrade2Gilgit] = useState()
      const [totalForFemaleGrade2Khyber, setTotalForFemaleGrade2Khyber] = useState()
      const [totalForFemaleGrade2Punjab, setTotalForFemaleGrade2Punjab] = useState()
      const [totalForFemaleGrade2Sindh, setTotalForFemaleGrade2Sindh] = useState()
      
     
      
      
      const [totalForMaleGrade3Kashmir, setTotalForMaleGrade3Kashmir] = useState()
      const [totalForMaleGrade3Balochistan, setTotalForMaleGrade3Balochistan] = useState()
      const [totalForMaleGrade3Gilgit, setTotalForMaleGrade3Gilgit] = useState()
      const [totalForMaleGrade3Khyber, setTotalForMaleGrade3Khyber] = useState()
      const [totalForMaleGrade3Punjab, setTotalForMaleGrade3Punjab] = useState()
      const [totalForMaleGrade3Sindh, setTotalForMaleGrade3Sindh] = useState()

      const [totalForFemaleGrade3Kashmir, setTotalForFemaleGrade3Kashmir] = useState()
      const [totalForFemaleGrade3Balochistan, setTotalForFemaleGrade3Balochistan] = useState()
      const [totalForFemaleGrade3Gilgit, setTotalForFemaleGrade3Gilgit] = useState()
      const [totalForFemaleGrade3Khyber, setTotalForFemaleGrade3Khyber] = useState()
      const [totalForFemaleGrade3Punjab, setTotalForFemaleGrade3Punjab] = useState()
      const [totalForFemaleGrade3Sindh, setTotalForFemaleGrade3Sindh] = useState()

      
     
      
      
      const [totalForMaleGrade4Kashmir, setTotalForMaleGrade4Kashmir] = useState()
      const [totalForMaleGrade4Balochistan, setTotalForMaleGrade4Balochistan] = useState()
      const [totalForMaleGrade4Gilgit, setTotalForMaleGrade4Gilgit] = useState()
      const [totalForMaleGrade4Khyber, setTotalForMaleGrade4Khyber] = useState()
      const [totalForMaleGrade4Punjab, setTotalForMaleGrade4Punjab] = useState()
      const [totalForMaleGrade4Sindh, setTotalForMaleGrade4Sindh] = useState()

      const [totalForFemaleGrade4Kashmir, setTotalForFemaleGrade4Kashmir] = useState()
      const [totalForFemaleGrade4Balochistan, setTotalForFemaleGrade4Balochistan] = useState()
      const [totalForFemaleGrade4Gilgit, setTotalForFemaleGrade4Gilgit] = useState()
      const [totalForFemaleGrade4Khyber, setTotalForFemaleGrade4Khyber] = useState()
      const [totalForFemaleGrade4Punjab, setTotalForFemaleGrade4Punjab] = useState()
      const [totalForFemaleGrade4Sindh, setTotalForFemaleGrade4Sindh] = useState()
      
     
      
      
      const [totalForMaleGrade5Kashmir, setTotalForMaleGrade5Kashmir] = useState()
      const [totalForMaleGrade5Balochistan, setTotalForMaleGrade5Balochistan] = useState()
      const [totalForMaleGrade5Gilgit, setTotalForMaleGrade5Gilgit] = useState()
      const [totalForMaleGrade5Khyber, setTotalForMaleGrade5Khyber] = useState()
      const [totalForMaleGrade5Punjab, setTotalForMaleGrade5Punjab] = useState()
      const [totalForMaleGrade5Sindh, setTotalForMaleGrade5Sindh] = useState()

      const [totalForFemaleGrade5Kashmir, setTotalForFemaleGrade5Kashmir] = useState()
      const [totalForFemaleGrade5Balochistan, setTotalForFemaleGrade5Balochistan] = useState()
      const [totalForFemaleGrade5Gilgit, setTotalForFemaleGrade5Gilgit] = useState()
      const [totalForFemaleGrade5Khyber, setTotalForFemaleGrade5Khyber] = useState()
      const [totalForFemaleGrade5Punjab, setTotalForFemaleGrade5Punjab] = useState()
      const [totalForFemaleGrade5Sindh, setTotalForFemaleGrade5Sindh] = useState()
      
     
      
      
      const [totalForMaleGrade6Kashmir, setTotalForMaleGrade6Kashmir] = useState()
      const [totalForMaleGrade6Balochistan, setTotalForMaleGrade6Balochistan] = useState()
      const [totalForMaleGrade6Gilgit, setTotalForMaleGrade6Gilgit] = useState()
      const [totalForMaleGrade6Khyber, setTotalForMaleGrade6Khyber] = useState()
      const [totalForMaleGrade6Punjab, setTotalForMaleGrade6Punjab] = useState()
      const [totalForMaleGrade6Sindh, setTotalForMaleGrade6Sindh] = useState()

      const [totalForFemaleGrade6Kashmir, setTotalForFemaleGrade6Kashmir] = useState()
      const [totalForFemaleGrade6Balochistan, setTotalForFemaleGrade6Balochistan] = useState()
      const [totalForFemaleGrade6Gilgit, setTotalForFemaleGrade6Gilgit] = useState()
      const [totalForFemaleGrade6Khyber, setTotalForFemaleGrade6Khyber] = useState()
      const [totalForFemaleGrade6Punjab, setTotalForFemaleGrade6Punjab] = useState()
      const [totalForFemaleGrade6Sindh, setTotalForFemaleGrade6Sindh] = useState()

      
     
      
      
      const [totalForMaleGrade7Kashmir, setTotalForMaleGrade7Kashmir] = useState()
      const [totalForMaleGrade7Balochistan, setTotalForMaleGrade7Balochistan] = useState()
      const [totalForMaleGrade7Gilgit, setTotalForMaleGrade7Gilgit] = useState()
      const [totalForMaleGrade7Khyber, setTotalForMaleGrade7Khyber] = useState()
      const [totalForMaleGrade7Punjab, setTotalForMaleGrade7Punjab] = useState()
      const [totalForMaleGrade7Sindh, setTotalForMaleGrade7Sindh] = useState()

      const [totalForFemaleGrade7Kashmir, setTotalForFemaleGrade7Kashmir] = useState()
      const [totalForFemaleGrade7Balochistan, setTotalForFemaleGrade7Balochistan] = useState()
      const [totalForFemaleGrade7Gilgit, setTotalForFemaleGrade7Gilgit] = useState()
      const [totalForFemaleGrade7Khyber, setTotalForFemaleGrade7Khyber] = useState()
      const [totalForFemaleGrade7Punjab, setTotalForFemaleGrade7Punjab] = useState()
      const [totalForFemaleGrade7Sindh, setTotalForFemaleGrade7Sindh] = useState()

      
     
      
      
      const [totalForMaleGrade8Kashmir, setTotalForMaleGrade8Kashmir] = useState()
      const [totalForMaleGrade8Balochistan, setTotalForMaleGrade8Balochistan] = useState()
      const [totalForMaleGrade8Gilgit, setTotalForMaleGrade8Gilgit] = useState()
      const [totalForMaleGrade8Khyber, setTotalForMaleGrade8Khyber] = useState()
      const [totalForMaleGrade8Punjab, setTotalForMaleGrade8Punjab] = useState()
      const [totalForMaleGrade8Sindh, setTotalForMaleGrade8Sindh] = useState()

      const [totalForFemaleGrade8Kashmir, setTotalForFemaleGrade8Kashmir] = useState()
      const [totalForFemaleGrade8Balochistan, setTotalForFemaleGrade8Balochistan] = useState()
      const [totalForFemaleGrade8Gilgit, setTotalForFemaleGrade8Gilgit] = useState()
      const [totalForFemaleGrade8Khyber, setTotalForFemaleGrade8Khyber] = useState()
      const [totalForFemaleGrade8Punjab, setTotalForFemaleGrade8Punjab] = useState()
      const [totalForFemaleGrade8Sindh, setTotalForFemaleGrade8Sindh] = useState()
      
     
      
      
      const [totalForMaleGrade9Kashmir, setTotalForMaleGrade9Kashmir] = useState()
      const [totalForMaleGrade9Balochistan, setTotalForMaleGrade9Balochistan] = useState()
      const [totalForMaleGrade9Gilgit, setTotalForMaleGrade9Gilgit] = useState()
      const [totalForMaleGrade9Khyber, setTotalForMaleGrade9Khyber] = useState()
      const [totalForMaleGrade9Punjab, setTotalForMaleGrade9Punjab] = useState()
      const [totalForMaleGrade9Sindh, setTotalForMaleGrade9Sindh] = useState()

      const [totalForFemaleGrade9Kashmir, setTotalForFemaleGrade9Kashmir] = useState()
      const [totalForFemaleGrade9Balochistan, setTotalForFemaleGrade9Balochistan] = useState()
      const [totalForFemaleGrade9Gilgit, setTotalForFemaleGrade9Gilgit] = useState()
      const [totalForFemaleGrade9Khyber, setTotalForFemaleGrade9Khyber] = useState()
      const [totalForFemaleGrade9Punjab, setTotalForFemaleGrade9Punjab] = useState()
      const [totalForFemaleGrade9Sindh, setTotalForFemaleGrade9Sindh] = useState()

      
     
      
      
      const [totalForMaleGrade10Kashmir, setTotalForMaleGrade10Kashmir] = useState()
      const [totalForMaleGrade10Balochistan, setTotalForMaleGrade10Balochistan] = useState()
      const [totalForMaleGrade10Gilgit, setTotalForMaleGrade10Gilgit] = useState()
      const [totalForMaleGrade10Khyber, setTotalForMaleGrade10Khyber] = useState()
      const [totalForMaleGrade10Punjab, setTotalForMaleGrade10Punjab] = useState()
      const [totalForMaleGrade10Sindh, setTotalForMaleGrade10Sindh] = useState()

      const [totalForFemaleGrade10Kashmir, setTotalForFemaleGrade10Kashmir] = useState()
      const [totalForFemaleGrade10Balochistan, setTotalForFemaleGrade10Balochistan] = useState()
      const [totalForFemaleGrade10Gilgit, setTotalForFemaleGrade10Gilgit] = useState()
      const [totalForFemaleGrade10Khyber, setTotalForFemaleGrade10Khyber] = useState()
      const [totalForFemaleGrade10Punjab, setTotalForFemaleGrade10Punjab] = useState()
      const [totalForFemaleGrade10Sindh, setTotalForFemaleGrade10Sindh] = useState()

      
     
      
      
      const [totalForMaleGrade11Kashmir, setTotalForMaleGrade11Kashmir] = useState()
      const [totalForMaleGrade11Balochistan, setTotalForMaleGrade11Balochistan] = useState()
      const [totalForMaleGrade11Gilgit, setTotalForMaleGrade11Gilgit] = useState()
      const [totalForMaleGrade11Khyber, setTotalForMaleGrade11Khyber] = useState()
      const [totalForMaleGrade11Punjab, setTotalForMaleGrade11Punjab] = useState()
      const [totalForMaleGrade11Sindh, setTotalForMaleGrade11Sindh] = useState()

      const [totalForFemaleGrade11Kashmir, setTotalForFemaleGrade11Kashmir] = useState()
      const [totalForFemaleGrade11Balochistan, setTotalForFemaleGrade11Balochistan] = useState()
      const [totalForFemaleGrade11Gilgit, setTotalForFemaleGrade11Gilgit] = useState()
      const [totalForFemaleGrade11Khyber, setTotalForFemaleGrade11Khyber] = useState()
      const [totalForFemaleGrade11Punjab, setTotalForFemaleGrade11Punjab] = useState()
      const [totalForFemaleGrade11Sindh, setTotalForFemaleGrade11Sindh] = useState()

      
      
     
      
      
      const [totalForMaleGrade12Kashmir, setTotalForMaleGrade12Kashmir] = useState()
      const [totalForMaleGrade12Balochistan, setTotalForMaleGrade12Balochistan] = useState()
      const [totalForMaleGrade12Gilgit, setTotalForMaleGrade12Gilgit] = useState()
      const [totalForMaleGrade12Khyber, setTotalForMaleGrade12Khyber] = useState()
      const [totalForMaleGrade12Punjab, setTotalForMaleGrade12Punjab] = useState()
      const [totalForMaleGrade12Sindh, setTotalForMaleGrade12Sindh] = useState()

      const [totalForFemaleGrade12Kashmir, setTotalForFemaleGrade12Kashmir] = useState()
      const [totalForFemaleGrade12Balochistan, setTotalForFemaleGrade12Balochistan] = useState()
      const [totalForFemaleGrade12Gilgit, setTotalForFemaleGrade12Gilgit] = useState()
      const [totalForFemaleGrade12Khyber, setTotalForFemaleGrade12Khyber] = useState()
      const [totalForFemaleGrade12Punjab, setTotalForFemaleGrade12Punjab] = useState()
      const [totalForFemaleGrade12Sindh, setTotalForFemaleGrade12Sindh] = useState()


      const [totalForMaleKashmir, setTotalForMaleKashmir] = useState()
      const [totalForMaleBalochistan, setTotalForMaleBalochistan] = useState()
      const [totalForMaleGilgit, setTotalForMaleGilgit] = useState()
      const [totalForMaleKhyber, setTotalForMaleKhyber] = useState()
      const [totalForMalePunjab, setTotalForMalePunjab] = useState()
      const [totalForMale2Sindh, setTotalForMaleSindh] = useState()

      const [totalForFemaleKashmir, setTotalForFemaleKashmir] = useState()
      const [totalForFemaleBalochistan, setTotalForFemaleBalochistan] = useState()
      const [totalForFemaleGilgit, setTotalForFemaleGilgit] = useState()
      const [totalForFemaleKhyber, setTotalForFemaleKhyber] = useState()
      const [totalForFemalePunjab, setTotalForFemalePunjab] = useState()
      const [totalForFemaleSindh, setTotalForFemaleSindh] = useState()
      

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

      

      var totForMaleGrade1Kashmir= 0;
      var totForMaleGrade1Balochistan= 0;
      var totForMaleGrade1Gilgit= 0;
      var totForMaleGrade1Khyber= 0;
      var totForMaleGrade1Punjab= 0;
      var totForMaleGrade1Sindh= 0;
      var totForFemaleGrade1Kashmir = 0;
      var totForFemaleGrade1Balochistan = 0;
      var totForFemaleGrade1Gilgit = 0;
      var totForFemaleGrade1Khyber = 0;
      var totForFemaleGrade1Punjab = 0;
      var totForFemaleGrade1Sindh = 0;
      
      var totForMaleGrade2Kashmir= 0;
      var totForMaleGrade2Balochistan= 0;
      var totForMaleGrade2Gilgit= 0;
      var totForMaleGrade2Khyber= 0;
      var totForMaleGrade2Punjab= 0;
      var totForMaleGrade2Sindh= 0;
      var totForFemaleGrade2Kashmir = 0;
      var totForFemaleGrade2Balochistan = 0;
      var totForFemaleGrade2Gilgit = 0;
      var totForFemaleGrade2Khyber = 0;
      var totForFemaleGrade2Punjab = 0;
      var totForFemaleGrade2Sindh = 0;

      
      var totForMaleGrade3Kashmir= 0;
      var totForMaleGrade3Balochistan= 0;
      var totForMaleGrade3Gilgit= 0;
      var totForMaleGrade3Khyber= 0;
      var totForMaleGrade3Punjab= 0;
      var totForMaleGrade3Sindh= 0;
      var totForFemaleGrade3Kashmir = 0;
      var totForFemaleGrade3Balochistan = 0;
      var totForFemaleGrade3Gilgit = 0;
      var totForFemaleGrade3Khyber = 0;
      var totForFemaleGrade3Punjab = 0;
      var totForFemaleGrade3Sindh = 0;

      
      var totForMaleGrade4Kashmir= 0;
      var totForMaleGrade4Balochistan= 0;
      var totForMaleGrade4Gilgit= 0;
      var totForMaleGrade4Khyber= 0;
      var totForMaleGrade4Punjab= 0;
      var totForMaleGrade4Sindh= 0;
      var totForFemaleGrade4Kashmir = 0;
      var totForFemaleGrade4Balochistan = 0;
      var totForFemaleGrade4Gilgit = 0;
      var totForFemaleGrade4Khyber = 0;
      var totForFemaleGrade4Punjab = 0;
      var totForFemaleGrade4Sindh = 0;

      var totForMaleGrade5Kashmir= 0;
      var totForMaleGrade5Balochistan= 0;
      var totForMaleGrade5Gilgit= 0;
      var totForMaleGrade5Khyber= 0;
      var totForMaleGrade5Punjab= 0;
      var totForMaleGrade5Sindh= 0;
      var totForFemaleGrade5Kashmir = 0;
      var totForFemaleGrade5Balochistan = 0;
      var totForFemaleGrade5Gilgit = 0;
      var totForFemaleGrade5Khyber = 0;
      var totForFemaleGrade5Punjab = 0;
      var totForFemaleGrade5Sindh = 0;

      
      var totForMaleGrade6Kashmir= 0;
      var totForMaleGrade6Balochistan= 0;
      var totForMaleGrade6Gilgit= 0;
      var totForMaleGrade6Khyber= 0;
      var totForMaleGrade6Punjab= 0;
      var totForMaleGrade6Sindh= 0;
      var totForFemaleGrade6Kashmir = 0;
      var totForFemaleGrade6Balochistan = 0;
      var totForFemaleGrade6Gilgit = 0;
      var totForFemaleGrade6Khyber = 0;
      var totForFemaleGrade6Punjab = 0;
      var totForFemaleGrade6Sindh = 0;

      
      var totForMaleGrade7Kashmir= 0;
      var totForMaleGrade7Balochistan= 0;
      var totForMaleGrade7Gilgit= 0;
      var totForMaleGrade7Khyber= 0;
      var totForMaleGrade7Punjab= 0;
      var totForMaleGrade7Sindh= 0;
      var totForFemaleGrade7Kashmir = 0;
      var totForFemaleGrade7Balochistan = 0;
      var totForFemaleGrade7Gilgit = 0;
      var totForFemaleGrade7Khyber = 0;
      var totForFemaleGrade7Punjab = 0;
      var totForFemaleGrade7Sindh = 0;

      
      var totForMaleGrade8Kashmir= 0;
      var totForMaleGrade8Balochistan= 0;
      var totForMaleGrade8Gilgit= 0;
      var totForMaleGrade8Khyber= 0;
      var totForMaleGrade8Punjab= 0;
      var totForMaleGrade8Sindh= 0;
      var totForFemaleGrade8Kashmir = 0;
      var totForFemaleGrade8Balochistan = 0;
      var totForFemaleGrade8Gilgit = 0;
      var totForFemaleGrade8Khyber = 0;
      var totForFemaleGrade8Punjab = 0;
      var totForFemaleGrade8Sindh = 0;

      
      var totForMaleGrade9Kashmir= 0;
      var totForMaleGrade9Balochistan= 0;
      var totForMaleGrade9Gilgit= 0;
      var totForMaleGrade9Khyber= 0;
      var totForMaleGrade9Punjab= 0;
      var totForMaleGrade9Sindh= 0;
      var totForFemaleGrade9Kashmir = 0;
      var totForFemaleGrade9Balochistan = 0;
      var totForFemaleGrade9Gilgit = 0;
      var totForFemaleGrade9Khyber = 0;
      var totForFemaleGrade9Punjab = 0;
      var totForFemaleGrade9Sindh = 0;

      
      var totForMaleGrade10Kashmir= 0;
      var totForMaleGrade10Balochistan= 0;
      var totForMaleGrade10Gilgit= 0;
      var totForMaleGrade10Khyber= 0;
      var totForMaleGrade10Punjab= 0;
      var totForMaleGrade10Sindh= 0;
      var totForFemaleGrade10Kashmir = 0;
      var totForFemaleGrade10Balochistan = 0;
      var totForFemaleGrade10Gilgit = 0;
      var totForFemaleGrade10Khyber = 0;
      var totForFemaleGrade10Punjab = 0;
      var totForFemaleGrade10Sindh = 0;

      
      var totForMaleGrade11Kashmir= 0;
      var totForMaleGrade11Balochistan= 0;
      var totForMaleGrade11Gilgit= 0;
      var totForMaleGrade11Khyber= 0;
      var totForMaleGrade11Punjab= 0;
      var totForMaleGrade11Sindh= 0;
      var totForFemaleGrade11Kashmir = 0;
      var totForFemaleGrade11Balochistan = 0;
      var totForFemaleGrade11Gilgit = 0;
      var totForFemaleGrade11Khyber = 0;
      var totForFemaleGrade11Punjab = 0;
      var totForFemaleGrade11Sindh = 0;

      
      var totForMaleGrade12Kashmir= 0;
      var totForMaleGrade12Balochistan= 0;
      var totForMaleGrade12Gilgit= 0;
      var totForMaleGrade12Khyber= 0;
      var totForMaleGrade12Punjab= 0;
      var totForMaleGrade12Sindh= 0;
      var totForFemaleGrade12Kashmir = 0;
      var totForFemaleGrade12Balochistan = 0;
      var totForFemaleGrade12Gilgit = 0;
      var totForFemaleGrade12Khyber = 0;
      var totForFemaleGrade12Punjab = 0;
      var totForFemaleGrade12Sindh = 0;



      var totForMaleKashmir = 0;
      var totForMaleBalochistan = 0;
      var totForMaleGilgit = 0;
      var totForMaleKhyber = 0;
      var totForMalePunjab = 0;
      var totForMaleSindh = 0;
      
      var totForFemaleKashmir = 0;
      var totForFemaleBalochistan = 0;
      var totForFemaleGilgit = 0;
      var totForFemaleKhyber = 0;
      var totForFemalePunjab = 0;
      var totForFemaleSindh = 0;

     

      const chartsData = () => {
          
        for (var i=0;i<studentAmount.length;i++){
            console.log(studentAmount[i].classesGrade)
            if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade1Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade1Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade1Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade1Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade1Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade1Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade1Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade1Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade1Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade1Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade1Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "1") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade1Sindh +=  1
            }
            

            

            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade2Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade2Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade2Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade2Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade2Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade2Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade2Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade2Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade2Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade2Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade2Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "2") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade2Sindh +=  1
            }
           

            

            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade3Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade3Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade3Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade3Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade3Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade3Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade3Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade3Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade3Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade3Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade3Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "3") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade3Sindh +=  1
            }
                   

            

            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade4Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade4Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade4Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade4Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade4Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade4Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade4Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade4Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade4Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade4Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade4Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "4") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade4Sindh +=  1
            }
                   

            

            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade5Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade5Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade5Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade5Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade5Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade5Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade5Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade5Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade5Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade5Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade5Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "5") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade5Sindh +=  1
            }
                               

            

            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade6Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade6Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade6Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade6Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade6Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade6Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade6Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade6Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade6Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade6Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade6Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "6") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade6Sindh +=  1
            }

                               

            

            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade7Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade7Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade7Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade7Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade7Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade7Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade7Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade7Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade7Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade7Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade7Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "7") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade7Sindh +=  1
            }

                               

            

            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade8Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade8Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade8Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade8Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade8Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade8Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade8Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade8Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade8Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade8Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade8Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "8") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade8Sindh +=  1
            }
                               

            

            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade9Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade9Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade9Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade9Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade9Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade9Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade9Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade9Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade9Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade9Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade9Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "9") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade9Sindh +=  1
            }
                               

            

            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade10Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade10Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade10Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade10Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade10Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade10Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade10Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade10Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade10Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade10Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade10Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "10") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade10Sindh +=  1
            }

                               

            

            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade11Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade11Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade11Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade11Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade11Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade11Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade11Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade11Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade11Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade11Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade11Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "11") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade11Sindh +=  1
            }

                               

            

            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir") ){

                totForMaleGrade12Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].province == "Balochistan") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade12Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].province == "Gilgit-Baltistan") && (studentAmount[i].gender == "Male")){
                
                totForMaleGrade12Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].province == "Khyber Pakhtunkhwa") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade12Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].province == "Punjab") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade12Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].province == "Sindh") && (studentAmount[i].gender == "Male") ){
                
                totForMaleGrade12Sindh +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Azad Jammu and Kashmir") ){
                
                totForFemaleGrade12Kashmir +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Female")  && (studentAmount[i].province == "Balochistan")){
                
                totForFemaleGrade12Balochistan +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){
                
                totForFemaleGrade12Gilgit +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){
                
                totForFemaleGrade12Khyber +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){
                
                totForFemaleGrade12Punjab +=  1
            }
            else if ((studentAmount[i].classesGrade == "12") && (studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){
                
                totForFemaleGrade12Sindh +=  1
            }
        }
        
        
        for (var i=0;i<studentAmount.length;i++){
            console.log(studentAmount[i].classesGrade)
            if ((studentAmount[i].gender == "Male") && (studentAmount[i].province == "Azad Jammu and Kashmir")){

                totForMaleKashmir +=  1
            }
            else if((studentAmount[i].gender == "Male") && (studentAmount[i].province == "Balochistan")){

                totForMaleBalochistan +=  1
            }
            else if((studentAmount[i].gender == "Male") && (studentAmount[i].province == "Gilgit-Baltistan")){

                totForMaleGilgit +=  1
            }
            else if((studentAmount[i].gender == "Male") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){

                totForMaleKhyber +=  1
            }
            else if((studentAmount[i].gender == "Male") && (studentAmount[i].province == "Punjab")){

                totForMalePunjab +=  1
            }
            else if((studentAmount[i].gender == "Male") && (studentAmount[i].province == "Sindh")){

                totForMaleSindh +=  1
            }

           

            else if ((studentAmount[i].gender == "Female") && (studentAmount[i].province == "Azad Jammu and Kashmir")){

                totForFemaleKashmir +=  1
            }
            else if((studentAmount[i].gender == "Female") && (studentAmount[i].province == "Balochistan")){

                totForFemaleBalochistan +=  1
            }
            else if((studentAmount[i].gender == "Female") && (studentAmount[i].province == "Gilgit-Baltistan")){

                totForFemaleGilgit +=  1
            }
            else if((studentAmount[i].gender == "Female") && (studentAmount[i].province == "Khyber Pakhtunkhwa")){

                totForFemaleKhyber +=  1
            }
            else if((studentAmount[i].gender == "Female") && (studentAmount[i].province == "Punjab")){

                totForFemalePunjab +=  1
            }
            else if((studentAmount[i].gender == "Female") && (studentAmount[i].province == "Sindh")){

                totForFemaleSindh +=  1
            }
        }



        setTotalForMaleGrade1Kashmir(totForMaleGrade1Kashmir)
        setTotalForMaleGrade1Balochistan(totForMaleGrade1Balochistan)
        setTotalForMaleGrade1Gilgit(totForMaleGrade1Gilgit)
        setTotalForMaleGrade1Khyber(totForMaleGrade1Khyber)
        setTotalForMaleGrade1Punjab(totForMaleGrade1Punjab)
        setTotalForMaleGrade1Sindh(totForMaleGrade1Sindh)

        setTotalForFemaleGrade1Kashmir(totForFemaleGrade1Kashmir)
        setTotalForFemaleGrade1Balochistan(totForFemaleGrade1Balochistan)
        setTotalForFemaleGrade1Gilgit(totForFemaleGrade1Gilgit)
        setTotalForFemaleGrade1Khyber(totForFemaleGrade1Khyber)
        setTotalForFemaleGrade1Punjab(totForFemaleGrade1Punjab)
        setTotalForFemaleGrade1Sindh(totForFemaleGrade1Sindh)
        


        setTotalForMaleGrade2Kashmir(totForMaleGrade2Kashmir)
        setTotalForMaleGrade2Balochistan(totForMaleGrade2Balochistan)
        setTotalForMaleGrade2Gilgit(totForMaleGrade2Gilgit)
        setTotalForMaleGrade2Khyber(totForMaleGrade2Khyber)
        setTotalForMaleGrade2Punjab(totForMaleGrade2Punjab)
        setTotalForMaleGrade2Sindh(totForMaleGrade2Sindh)

        setTotalForFemaleGrade2Kashmir(totForFemaleGrade2Kashmir)
        setTotalForFemaleGrade2Balochistan(totForFemaleGrade2Balochistan)
        setTotalForFemaleGrade2Gilgit(totForFemaleGrade2Gilgit)
        setTotalForFemaleGrade2Khyber(totForFemaleGrade2Khyber)
        setTotalForFemaleGrade2Punjab(totForFemaleGrade2Punjab)
        setTotalForFemaleGrade2Sindh(totForFemaleGrade2Sindh)


        


        setTotalForMaleGrade3Kashmir(totForMaleGrade3Kashmir)
        setTotalForMaleGrade3Balochistan(totForMaleGrade3Balochistan)
        setTotalForMaleGrade3Gilgit(totForMaleGrade3Gilgit)
        setTotalForMaleGrade3Khyber(totForMaleGrade3Khyber)
        setTotalForMaleGrade3Punjab(totForMaleGrade3Punjab)
        setTotalForMaleGrade3Sindh(totForMaleGrade3Sindh)

        setTotalForFemaleGrade3Kashmir(totForFemaleGrade3Kashmir)
        setTotalForFemaleGrade3Balochistan(totForFemaleGrade3Balochistan)
        setTotalForFemaleGrade3Gilgit(totForFemaleGrade3Gilgit)
        setTotalForFemaleGrade3Khyber(totForFemaleGrade3Khyber)
        setTotalForFemaleGrade3Punjab(totForFemaleGrade3Punjab)
        setTotalForFemaleGrade3Sindh(totForFemaleGrade3Sindh)




        setTotalForMaleGrade4Kashmir(totForMaleGrade4Kashmir)
        setTotalForMaleGrade4Balochistan(totForMaleGrade4Balochistan)
        setTotalForMaleGrade4Gilgit(totForMaleGrade4Gilgit)
        setTotalForMaleGrade4Khyber(totForMaleGrade4Khyber)
        setTotalForMaleGrade4Punjab(totForMaleGrade4Punjab)
        setTotalForMaleGrade4Sindh(totForMaleGrade4Sindh)

        setTotalForFemaleGrade4Kashmir(totForFemaleGrade4Kashmir)
        setTotalForFemaleGrade4Balochistan(totForFemaleGrade4Balochistan)
        setTotalForFemaleGrade4Gilgit(totForFemaleGrade4Gilgit)
        setTotalForFemaleGrade4Khyber(totForFemaleGrade4Khyber)
        setTotalForFemaleGrade4Punjab(totForFemaleGrade4Punjab)
        setTotalForFemaleGrade4Sindh(totForFemaleGrade4Sindh)




        setTotalForMaleGrade5Kashmir(totForMaleGrade5Kashmir)
        setTotalForMaleGrade5Balochistan(totForMaleGrade5Balochistan)
        setTotalForMaleGrade5Gilgit(totForMaleGrade5Gilgit)
        setTotalForMaleGrade5Khyber(totForMaleGrade5Khyber)
        setTotalForMaleGrade5Punjab(totForMaleGrade5Punjab)
        setTotalForMaleGrade5Sindh(totForMaleGrade5Sindh)

        setTotalForFemaleGrade5Kashmir(totForFemaleGrade5Kashmir)
        setTotalForFemaleGrade5Balochistan(totForFemaleGrade5Balochistan)
        setTotalForFemaleGrade5Gilgit(totForFemaleGrade5Gilgit)
        setTotalForFemaleGrade5Khyber(totForFemaleGrade5Khyber)
        setTotalForFemaleGrade5Punjab(totForFemaleGrade5Punjab)
        setTotalForFemaleGrade5Sindh(totForFemaleGrade5Sindh)




        setTotalForMaleGrade6Kashmir(totForMaleGrade6Kashmir)
        setTotalForMaleGrade6Balochistan(totForMaleGrade6Balochistan)
        setTotalForMaleGrade6Gilgit(totForMaleGrade6Gilgit)
        setTotalForMaleGrade6Khyber(totForMaleGrade6Khyber)
        setTotalForMaleGrade6Punjab(totForMaleGrade6Punjab)
        setTotalForMaleGrade6Sindh(totForMaleGrade6Sindh)

        setTotalForFemaleGrade6Kashmir(totForFemaleGrade6Kashmir)
        setTotalForFemaleGrade6Balochistan(totForFemaleGrade6Balochistan)
        setTotalForFemaleGrade6Gilgit(totForFemaleGrade6Gilgit)
        setTotalForFemaleGrade6Khyber(totForFemaleGrade6Khyber)
        setTotalForFemaleGrade6Punjab(totForFemaleGrade6Punjab)
        setTotalForFemaleGrade6Sindh(totForFemaleGrade6Sindh)




        setTotalForMaleGrade7Kashmir(totForMaleGrade7Kashmir)
        setTotalForMaleGrade7Balochistan(totForMaleGrade7Balochistan)
        setTotalForMaleGrade7Gilgit(totForMaleGrade7Gilgit)
        setTotalForMaleGrade7Khyber(totForMaleGrade7Khyber)
        setTotalForMaleGrade7Punjab(totForMaleGrade7Punjab)
        setTotalForMaleGrade7Sindh(totForMaleGrade7Sindh)

        setTotalForFemaleGrade7Kashmir(totForFemaleGrade7Kashmir)
        setTotalForFemaleGrade7Balochistan(totForFemaleGrade7Balochistan)
        setTotalForFemaleGrade7Gilgit(totForFemaleGrade7Gilgit)
        setTotalForFemaleGrade7Khyber(totForFemaleGrade7Khyber)
        setTotalForFemaleGrade7Punjab(totForFemaleGrade7Punjab)
        setTotalForFemaleGrade7Sindh(totForFemaleGrade7Sindh)




        setTotalForMaleGrade8Kashmir(totForMaleGrade1Kashmir)
        setTotalForMaleGrade8Balochistan(totForMaleGrade1Balochistan)
        setTotalForMaleGrade8Gilgit(totForMaleGrade1Gilgit)
        setTotalForMaleGrade8Khyber(totForMaleGrade1Khyber)
        setTotalForMaleGrade8Punjab(totForMaleGrade1Punjab)
        setTotalForMaleGrade8Sindh(totForMaleGrade1Sindh)

        setTotalForFemaleGrade8Kashmir(totForFemaleGrade8Kashmir)
        setTotalForFemaleGrade8Balochistan(totForFemaleGrade8Balochistan)
        setTotalForFemaleGrade8Gilgit(totForFemaleGrade8Gilgit)
        setTotalForFemaleGrade8Khyber(totForFemaleGrade8Khyber)
        setTotalForFemaleGrade8Punjab(totForFemaleGrade8Punjab)
        setTotalForFemaleGrade8Sindh(totForFemaleGrade8Sindh)




        setTotalForMaleGrade9Kashmir(totForMaleGrade9Kashmir)
        setTotalForMaleGrade9Balochistan(totForMaleGrade9Balochistan)
        setTotalForMaleGrade9Gilgit(totForMaleGrade9Gilgit)
        setTotalForMaleGrade9Khyber(totForMaleGrade9Khyber)
        setTotalForMaleGrade9Punjab(totForMaleGrade9Punjab)
        setTotalForMaleGrade9Sindh(totForMaleGrade9Sindh)

        setTotalForFemaleGrade9Kashmir(totForFemaleGrade9Kashmir)
        setTotalForFemaleGrade9Balochistan(totForFemaleGrade9Balochistan)
        setTotalForFemaleGrade9Gilgit(totForFemaleGrade9Gilgit)
        setTotalForFemaleGrade9Khyber(totForFemaleGrade9Khyber)
        setTotalForFemaleGrade9Punjab(totForFemaleGrade9Punjab)
        setTotalForFemaleGrade9Sindh(totForFemaleGrade9Sindh)




        setTotalForMaleGrade10Kashmir(totForMaleGrade10Kashmir)
        setTotalForMaleGrade10Balochistan(totForMaleGrade10Balochistan)
        setTotalForMaleGrade10Gilgit(totForMaleGrade10Gilgit)
        setTotalForMaleGrade10Khyber(totForMaleGrade10Khyber)
        setTotalForMaleGrade10Punjab(totForMaleGrade10Punjab)
        setTotalForMaleGrade10Sindh(totForMaleGrade10Sindh)

        setTotalForFemaleGrade10Kashmir(totForFemaleGrade10Kashmir)
        setTotalForFemaleGrade10Balochistan(totForFemaleGrade10Balochistan)
        setTotalForFemaleGrade10Gilgit(totForFemaleGrade10Gilgit)
        setTotalForFemaleGrade10Khyber(totForFemaleGrade10Khyber)
        setTotalForFemaleGrade10Punjab(totForFemaleGrade10Punjab)
        setTotalForFemaleGrade10Sindh(totForFemaleGrade10Sindh)




        setTotalForMaleGrade11Kashmir(totForMaleGrade11Kashmir)
        setTotalForMaleGrade11Balochistan(totForMaleGrade11Balochistan)
        setTotalForMaleGrade11Gilgit(totForMaleGrade11Gilgit)
        setTotalForMaleGrade11Khyber(totForMaleGrade11Khyber)
        setTotalForMaleGrade11Punjab(totForMaleGrade11Punjab)
        setTotalForMaleGrade11Sindh(totForMaleGrade11Sindh)

        setTotalForFemaleGrade11Kashmir(totForFemaleGrade11Kashmir)
        setTotalForFemaleGrade11Balochistan(totForFemaleGrade11Balochistan)
        setTotalForFemaleGrade11Gilgit(totForFemaleGrade11Gilgit)
        setTotalForFemaleGrade11Khyber(totForFemaleGrade11Khyber)
        setTotalForFemaleGrade11Punjab(totForFemaleGrade11Punjab)
        setTotalForFemaleGrade11Sindh(totForFemaleGrade11Sindh)




        setTotalForMaleGrade12Kashmir(totForMaleGrade12Kashmir)
        setTotalForMaleGrade12Balochistan(totForMaleGrade12Balochistan)
        setTotalForMaleGrade12Gilgit(totForMaleGrade12Gilgit)
        setTotalForMaleGrade12Khyber(totForMaleGrade12Khyber)
        setTotalForMaleGrade12Punjab(totForMaleGrade12Punjab)
        setTotalForMaleGrade12Sindh(totForMaleGrade12Sindh)

        setTotalForFemaleGrade12Kashmir(totForFemaleGrade12Kashmir)
        setTotalForFemaleGrade12Balochistan(totForFemaleGrade12Balochistan)
        setTotalForFemaleGrade12Gilgit(totForFemaleGrade12Gilgit)
        setTotalForFemaleGrade12Khyber(totForFemaleGrade12Khyber)
        setTotalForFemaleGrade12Punjab(totForFemaleGrade12Punjab)
        setTotalForFemaleGrade12Sindh(totForFemaleGrade12Sindh)


        

        

        
        setTotalForMaleKashmir(totForMaleKashmir)
        setTotalForMaleBalochistan(totForMaleBalochistan)
        setTotalForMaleGilgit(totForMaleGilgit)
        setTotalForMaleKhyber(totForMaleKhyber)
        setTotalForMalePunjab(totForMalePunjab)
        setTotalForMaleSindh(totForMaleSindh)

        setTotalForFemaleKashmir(totForFemaleKashmir)
        setTotalForFemaleBalochistan(totForFemaleBalochistan)
        setTotalForFemaleGilgit(totForFemaleGilgit)
        setTotalForFemaleKhyber(totForFemaleKhyber)
        setTotalForFemalePunjab(totForFemalePunjab)
        setTotalForFemaleSindh(totForFemaleSindh)


        

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
                <h6 className="m-0 font-weight-bold text-white">Classes, Gender and Province</h6>
              </div>
              <div className="card-body">


                  <Bar 
                    data = {{
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        datasets: [{
                            label: 'Male - Azad Jammu and Kashmir',
                            data: [totalForMaleGrade1Kashmir, totalForMaleGrade2Kashmir, totalForMaleGrade3Kashmir, totalForMaleGrade4Kashmir,
                                totalForMaleGrade5Kashmir, totalForMaleGrade6Kashmir, totalForMaleGrade7Kashmir, totalForMaleGrade8Kashmir,
                                totalForMaleGrade9Kashmir, totalForMaleGrade10Kashmir, totalForMaleGrade11Kashmir, totalForMaleGrade12Kashmir, totalForMaleKashmir,],
                                },
                                {
                                    label : 'Male - Balochistan',
                                    data: [totalForMaleGrade1Balochistan, totalForMaleGrade2Balochistan, totalForMaleGrade3Balochistan, totalForMaleGrade4Balochistan, 
                                        totalForMaleGrade5Balochistan, totalForMaleGrade6Balochistan, totalForMaleGrade7Balochistan, totalForMaleGrade8Balochistan,
                                        totalForMaleGrade9Balochistan, totalForMaleGrade10Balochistan, totalForMaleGrade11Balochistan, totalForMaleGrade12Balochistan],
                                    
                                }, 
                                {
                                    label : 'Male - Gilgit-Baltistan',
                                    data: [6,7,8,9,10],
                                    
                                },
                                {
                                    label : 'Male - Khyber Pakhtunkhwa',
                                    data: [6,7,8,9,10],
                                    
                                },
                                {
                                    label : 'Male - Punjab',
                                    data: [6,7,8,9,10],
                                    
                                },
                                {
                                    label : 'Male - Sindh',
                                    data: [6,7,8,9,10],
                                    
                                },  
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
                              <th>Class </th>
                              <th>1</th>
                              <th>2</th>
                              <th>3</th>
                              <th>4</th>
                              <th>5</th>
                              <th>6</th>
                              <th>7</th>
                              <th>8</th>
                              <th>9</th>
                              <th>10</th>
                              <th>11</th>
                              <th>12</th>
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
                                
                            </tr>
                            <tr>
                                <td>
                                Female
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

export default StatsOfProvincesVsGendersVsClasses
