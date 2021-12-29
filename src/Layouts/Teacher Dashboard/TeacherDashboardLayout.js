import React from 'react'
import SidebarForTeacher from './Files/Views/Sidebar';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom' 




const DashboardLayout = ({ children, ...rest }) => {
    return (
      <div>
         <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-2"> 
          <SidebarForTeacher />
          </div>
          <div className="col-md-10 col-sm-10">
            {children}
          </div>
          </div>
          </div>
      </div>
    );
  };
  
  const TeacherDashboardLayout = ({ component: Component, ...rest }) => {

    return (
      <Route
        {...rest}
        render={(props) => (
          <DashboardLayout>
            <Component {...props} />
          </DashboardLayout>
        )}
      />
    );
  };
  
  export default TeacherDashboardLayout;
  