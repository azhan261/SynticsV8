import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom' 
//import "../../App.css"
import Header from '../../Views/Header'
import Footer from '../../Views/Footer'

  
const MainThemeLayout = ({ children, ...rest }) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  );
};

const MainLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainThemeLayout>
          <Component {...props} />
        </MainThemeLayout>
      )}
    />
  );
};

export default MainLayout;
