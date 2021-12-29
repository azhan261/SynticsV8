import React from 'react'
import SideBarForStudent from './Files/Views/Sidebar'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom' 



const DashboardLayout = ({ children, ...rest }) => {
    return (
    
      <div>
         <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-2"> 
          <SideBarForStudent />
          </div>
          <div className="col-md-10 col-sm-10">
            {children}
          </div>
          </div>
          </div>
      </div>
   
    );
  };
  
  const StudentDashboardLayout = ({ component: Component, ...rest }) => {
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
  
  export default StudentDashboardLayout;
  