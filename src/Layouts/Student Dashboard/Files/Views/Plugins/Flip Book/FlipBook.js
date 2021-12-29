
import React, { Component, useRef,useState, useEffect} from 'react'
import HTMLFlipBook from 'react-pageflip';
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
//import FileUploadNewForTeacherForBook from './FileUploadNew';
import HandWritingDemoStudentsLinguistics from './Demo/HandWritingDemo';
import { getBookContents } from '../../../../../Teacher Dashboard/Files/Apis/apiForBookContent';
import { getFileSpecific } from '../../../Apis/apiForGridFs';
//import { fetchAudioFile } from '../../../../../../Apis/apiForAudioSending';
import MediaFileUplaodStudent from './MediaFileUplaodStudent';
import axios from 'axios';

import "./index.scss"
import "./main.a8ff09de.chunk.css"



function FlipBookForStudents() {
  var serialNumber = 0
  const book = useRef();
  const location = useLocation();
  const [items, setItems] = useState([])
  const [media, setMedia] = useState('')
  var arrayMediaText = []

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getBookContents()
      console.log(contents)
      setItems(contents)
    }
    fetchItems()
    
    
  }, []);
  
const handleFlipBookFile = (data) => {
  axios({
    method: "POST",
    url: `https://syntics.co/api/file/display/${data}`,
    responseType: "blob"
  })
    .then(res => rezzingFileForCv(res.data),)
    const rezzingFileForCv = (response) => {
      var urlCreator = window.URL || window.webkitURL;
      var cvUrl = urlCreator.createObjectURL(response);
      if(document.getElementById('audioReference') != null){
    document.getElementById('audioReference').setAttribute('src', cvUrl)
    document.getElementById('audioReference').src = cvUrl
  }
    }
    return(
      <div>
        <img id="audioReference" width="350" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold",  boxShadow: "5px 5px #888888"}}/>
      </div>
    )
}
  const handlingSerialNumber = () => {
    serialNumber = serialNumber + 1
    return(
    <div className = "text-right" style={{fontFamily: 'Lucida Handwriting, Cursive', fontWeight:'bold'}}>{serialNumber}</div>
)
}
  const history = useHistory()
    return (
        <div>
          <div>
             
             <div>
 <div className = "mt-5 pt-4">
 {/* Content Wrapper */}
 <div id="content-wrapper" className="d-flex flex-column">
 {/* Main Content */}
 <div id="content">
   {/* Begin Page Content */}
   <div className="containerBlackDashboard-fluid">
     {/* Page Heading */}
     <h1 className="h3BlackDashboard mb-2 text-gray-800">Books</h1>
     {/* DataTales Example */}
     <div className="card shadow mb-4 text-center">
       <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
         <h6 className="m-0 font-weight-bold text-white"></h6>
       </div>
       <div className="card-body">
       <h1 id = "checking" className="h3BlackDashboard mb-2 text-gray-800"></h1>
       <HTMLFlipBook
             width={550}
             height={733}
             size="stretch"
             minWidth={315}
             maxWidth={1000}
             minHeight={400}
             maxHeight={1533}
             maxShadowOpacity={0.5}
             useMouseEvents = {false}
             //showCover={true}
             mobileScrollSupport={true}
             ref={book}
             >
        
                 <div className="page page-cover" data-density="hard">
                     <div className="page-content">
                     <h2>Digital Book</h2>
                     </div>
                 </div>
                 {
                              items.map(contents => (
                                  <div className="page" key={contents._id}>
                                    {handlingSerialNumber()}
                                    <div className = "mt-5">
                                      {handleFlipBookFile(contents)}
                                    </div>
                                    <div className = "mt-5 mb-2">
                                      <h3>{contents.bookContent}</h3>
                                    </div>
                                  </div>
                                   
                              ))
                              }
             </HTMLFlipBook>
              <div className="">
                  <button className="btn btn-outline-primary" style = {{fontWeight : 'bold', height:"90px", width: "90px"}}   onClick={() => book.current.pageFlip().flipPrev()}>
                     Prev page
                  </button>
                  <button className="btn btn-outline-primary" style = {{fontWeight : 'bold', height:"90px", width: "90px"}}   onClick={() => book.current.pageFlip().flipNext()}>
                    Next page
                  </button>
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
     </div>
        </div>
    )
}

export default FlipBookForStudents
