import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getNotificationSpecificWithSubject } from '../../Apis/apiForNotifications';
import "../../../../../Sass.scss"

function NotificationListForStudent() {
    let {id} = useParams()
    const [items, setItems] = useState([])
    const location = useLocation();

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getNotificationSpecificWithSubject(id, location.state)
        console.log(location.state)
        setItems(contents)
      }
      fetchItems()
    }, []);
    var serialNumber = 0
    const history = useHistory()
    const handleOnClickEdit = (data) => {
      history.push({
        pathname:"/student/edit-current-notification",
        state: data
      })
    }
    const handleOnClickDelete = (data) => {
      axios.delete('https://syntics.co/notifications/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname:"/student/current-notification-view",
        state: data
      })
    }

    const handleCreateQueryClick = (e) => {
      
    }
    const handleOnClickCheckResponse = (data) => {
      history.push({
        pathname:`/student/notification-response/${id}`,
        state: data
      })
    }
    const onCreateBlog = (e) => {
      console.log("hit")
      history.push({
        pathname: `/student/notifications-subject-students/${id}`,
        state : "View"
      })
    }
          const handlingSerialNumber = () => {
          serialNumber = serialNumber + 1
          return(
          <td>{serialNumber}</td>
      )
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
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Query List</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#306EFF"}}>
      <h6 className="m-0 font-weight-bold text-white">List of User Created Queries</h6>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
        <thead>
                            <tr>
                            <th>Serial Number</th>
                            <th>Query Title</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(contents => (
                                <tr key={contents._id}>
                                    {handlingSerialNumber()}
                                <td>
                                    {contents.notificationTitle}
                                </td>
                                <td>
                                <div className="">
                                  <button className="btn btn-outline-primary" onClick={() => handleOnClickCheckResponse(contents)} style = {{fontWeight : "bold", height : "114px", width: "114px"}}>
                                    Teacher's Response
                                  </button>
                                </div>
                                </td>
                                
                                {/*}
                                <td>
                                <div className="">
                                  <button className="btn btn-outline-primary"  onClick={() => handleOnClickEdit(contents)} style = {{fontWeight : "bold", height : "115px", width: "115px",}}>
                                    Edit Query
                                  </button>
                                </div>
                                </td>
                              */}
                                
                                </tr>
                            ))
                            }
                        </tbody>
        </table>
        <center>
                    <div>    
                    <div className="buttonNewTheme mt-3 mb-3">
                      <button className="btn btn-outline-primary" style = {{fontWeight : "bold", height : "95px", width: "95px"}} onClick = {(e) => onCreateBlog(e)}>
                        Create Query
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

export default NotificationListForStudent
