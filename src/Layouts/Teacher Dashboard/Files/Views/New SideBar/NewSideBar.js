import React from 'react'
import { Link } from 'react-router-dom'

function NewSideBar() {
    return (
        <div>
            
      {/* Sidebar */}
      <ul className="navbarBlackDashboard-nav bg-gradient-primary sidebarBlackDashboard sidebarBlackDashboard-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Link className="sidebarBlackDashboard-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebarBlackDashboard-brand-icon rotate-n-15">
           <img src={`${process.env.PUBLIC_URL}/img/logo/Logo.jpg`} className="img-fluid" alt="" />
          </div>
          <div className="sidebarBlackDashboard-brand-text mx-3">SB Admin ss</div>
        </Link>
        {/* Divider */}
        <hr className="sidebarBlackDashboard-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span></Link>
        </li>
        {/* Divider */}
        <hr className="sidebarBlackDashboard-divider" />
        {/* Heading */}
        <div className="sidebarBlackDashboard-heading">
          Interface
        </div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog" />
            <span>Components</span>
          </Link>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" href="buttons.html">Buttons</Link>
              <Link className="collapse-item" href="cards.html">Cards</Link>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench" />
            <span>Utilities</span>
          </Link>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" href="utilities-color.html">Colors</Link>
              <Link className="collapse-item" href="utilities-border.html">Borders</Link>
              <Link className="collapse-item" href="utilities-animation.html">Animations</Link>
              <Link className="collapse-item" href="utilities-other.html">Other</Link>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebarBlackDashboard-divider" />
        {/* Heading */}
        <div className="sidebarBlackDashboard-heading">
          Addons
        </div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </Link>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" href="login.html">Login</Link>
              <Link className="collapse-item" href="register.html">Register</Link>
              <Link className="collapse-item" href="forgot-password.html">Forgot Password</Link>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" href="404.html">404 Page</Link>
              <Link className="collapse-item" href="blank.html">Blank Page</Link>
            </div>
          </div>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span></Link>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <Link className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span></Link>
        </li>
        {/* Divider */}
        <hr className="sidebarBlackDashboard-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        {/* Sidebar Message */}
        <div className="sidebarBlackDashboard-card d-none d-lg-flex">
          <img className="sidebarBlackDashboard-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
          <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
          <Link className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</Link>
        </div>
      </ul>
      {/* End of Sidebar */}

        </div>
    )
}

export default NewSideBar
