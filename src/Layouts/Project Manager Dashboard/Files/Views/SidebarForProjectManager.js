import React from 'react';
import { NavLink, useParams, useHistory,} from 'react-router-dom';
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import "./black-dashboard-theme.css"

const SidebarForProjectManager = (props) => {
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
                      to={`/manager/gender-category/${id}`} 
                    >
                      <i className = "tim-icons icon-badge" />
                      <p>List of Students</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/manager/list-of-teachers/${id}`} 
                    >
                      <i className = "tim-icons icon-single-copy-04" />
                      <p>List of Teachers</p>
                    </NavLink>
                 
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/manager/list-of-projects/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>List of Projects</p>
                    </NavLink>
                   
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/manager/progress-report-student-groups/${id}`}
                    >
                      <i className = "tim-icons icon-bell-55" />
                      <p>Progress Reports</p>
                    </NavLink>
                   
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/manager/query-list/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Queries</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/manager/chat-manager`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>Syntics Chat</p>
                    </NavLink>
                  {/*}
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/manager/teacher-remarks/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Teacher Remarks</p>
                    </NavLink>
    */}
                  
                  
            </Nav>
            
          </div>
        </div>
     

      </div>
      </div>
    );
  };
  

export default SidebarForProjectManager;
