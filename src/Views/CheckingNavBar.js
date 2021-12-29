import React from 'react'

function CheckingNavBar() {
    return (
        <div>
             <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />                        
              </button>
              <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Page 1-1</a></li>
                    <li><a href="#">Page 1-2</a></li>
                    <li><a href="#">Page 1-3</a></li>
                  </ul>
                </li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <h3>Collapsible Navbar</h3>
          <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).
          </p><p>Only when the button is clicked, the navigation bar will be displayed.</p>
        </div>
      </div>
        </div>
    )
}

export default CheckingNavBar
