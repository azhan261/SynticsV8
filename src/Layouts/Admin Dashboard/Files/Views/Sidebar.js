import React from 'react';
import { NavLink, useParams, useHistory,} from 'react-router-dom';
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import "./black-dashboard-theme.css"

const SidebarForStudent = (props) => {
  let { id } = useParams();
  const history = useHistory()
  const handleLocation = (e, data) => {
    e.preventDefault()
    history.push({
      pathname: `/student/dashboard/${id}`,
      state : data
  })
  }

    /*
  <Link to={location}/>
  <Redirect to={location}/>
  history.push(location)
  history.replace(location)
  */
    return (
      <div
      >
        <div>
        <div className="sidebar" >
          <div className="sidebar-wrapper">
            <Nav>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/admin/stats-category/${id}`} 
                    >
                      <i className = "tim-icons icon-badge" />
                      <p>Statistics</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/admin/teacher-info-table/${id}`} 
                    >
                      <i className = "tim-icons icon-single-copy-04" />
                      <p>Teacher Section</p>
                    </NavLink>
                 
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/admin/gender-category-student/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>Student Section</p>
                    </NavLink>

                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/admin/list-of-projects/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>Projects</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/admin/chat-admin`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>Syntics Chat</p>
                    </NavLink>
                   {/*}
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={``}
                    >
                      <i className = "tim-icons icon-bell-55" />
                      <p>Blogs</p>
                    </NavLink>
                   
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={``}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Testimonials</p>
                    </NavLink>
    */}
                  
                  
            </Nav>
            
          </div>
        </div>
     

      </div>
      </div>
    );
  };
  

export default SidebarForStudent;
