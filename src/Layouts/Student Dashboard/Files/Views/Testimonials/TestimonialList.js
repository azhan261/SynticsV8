import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getTestimonials, deleteTestimonial } from "../../Apis/apiForTestimonials"
import "../../../ButtonStyleOriginalSass.scss"

function TestimonialListForStudent() {
    let {id} = useParams()
    const [items, setItems] = useState([])
    var serialNumber = 0
    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getTestimonials()
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClickEdit = (data) => {
      history.push({
        pathname:`/student/edit-current-testimonial/${id}`,
        state: data
      })
    }
    const handleOnClickDelete = (data) => {
      axios.delete('https://syntics.co/testimonials/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname:`/student/current-testimonial-view/${id}`,
        state: data
      })
    }
    const handlingSerialNumber = () => {
      serialNumber = serialNumber + 1
      return(
      <td>{serialNumber}</td>
  )
}
const onCreateBlog = (e) => {
  e.preventDefault()
  history.push(`/student/testimonials-creation/${id}`)
}
    return  (
          <>
      <div>
       {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
  {/* Page Heading */}
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Student Complaints</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
      <h6 className="m-0 font-weight-bold text-white">List of Student Created Complaints</h6>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
        <thead>
                              <tr>
                              <th>Serial Number</th>
                              <th>Complain Title</th>
                              <th colSpan="3">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                    {handlingSerialNumber()}
                                  <td>
                                      {contents.testimonialTitle}
                                  </td>
                                  <td>
                                      <button className="btn btn-outline-primary" onClick={() => handleOnClickView(contents)}>View</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-outline-primary"  onClick={() => handleOnClickEdit(contents)}>Edit Complain</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-outline-primary" onClick={() => handleOnClickDelete(contents)}>Delete Complain</button>
                                  </td>
                                  </tr>
                              ))
                              }
                          </tbody>
        </table>
        <center>
                    <div>    
                    <div className="containerTestimonialButton mb-3">
                      <button className="btn btn-outline-primary" style = {{fontWeight : "bold" }} onClick = {(e) => onCreateBlog(e)}>
                        Create Complain
                      </button>
                    </div>
                  </div>
                  </center>
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
    </>
    )
}

export default TestimonialListForStudent
