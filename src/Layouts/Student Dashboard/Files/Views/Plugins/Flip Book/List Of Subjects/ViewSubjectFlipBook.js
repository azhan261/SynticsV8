import React, { Component, useRef,useState, useEffect} from 'react'
import HTMLFlipBook from 'react-pageflip';
import html2canvas from 'html2canvas';
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
//import FileUploadNewForTeacherForBook from './FileUploadNew';
import HandwritingSubjectForFlipBook from './Plugins For Subject FlipBook/HandwritingSubjectForFlipBook';
//import { getBookContents } from '../../../../../Teacher Dashboard/Files/Apis/apiForBookContent';
//import { fetchAudioFile } from '../../../../../../Apis/apiForAudioSending';
//import MediaFileUplaodStudent from './MediaFileUplaodStudent';
import "../index.scss"
import "../main.a8ff09de.chunk.css"



function ViewSubjectFlipBook() {
  const book = useRef();
  const location = useLocation();
  const [items, setItems] = useState([])
  const [media, setMedia] = useState([])
  const arrayMediaText = []
  useEffect(() => {
    
    
  }, []);
  function takeshot(e) {
    let div =
        document.getElementById('photo');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            document
            .getElementById('output')
            .appendChild(canvas);
        }
    )}
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
                     <h2>Digital Note Book</h2>
                     </div>
                 </div>
                <div className = "page">
                <button onClick={(e) => takeshot(e)}>
                    Save Notes on Next page
                  </button>
                <HandwritingSubjectForFlipBook/>
                </div>
                <div id='output' className = "page">

                </div>
                <div className = "page">
                <HandwritingSubjectForFlipBook/>
                </div>
                <div id='output' className = "page">

                </div>
                <div className = "page">
                <HandwritingSubjectForFlipBook />
                </div>
                <div id='output' className = "page">

                </div>
                <div className = "page">
                <HandwritingSubjectForFlipBook/>
                </div>
                <div id='output' className = "page">

                </div>
                <div className = "page">
                <HandwritingSubjectForFlipBook/>
                </div>
                <div id='output' className = "page">

                </div>
                 
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

export default ViewSubjectFlipBook
