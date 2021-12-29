import React from 'react'

function Pricing() {
    return (
        <div>
            
      {/* ======= Pricing Section ======= */}
      <section id="pricing" className="pricing mt-5">
        <div className="container">
          <div className="section-title">
            <h2>Institution Fee</h2>
            <p>Didactics aim is to enable every student access to study, removing the current challenges that many people face. Our fees are very competitive in order to allow everybody the right high-quality education.</p>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-3 box" data-aos="fade-right">
              <h3>1 - 4</h3>
              <h4>2,500 PKR<span>per month</span></h4>
              <ul>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Registration fee</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Building maintenance charges</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Annual stationary charges</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Hidden charges</span></li>
              </ul>
              <a href="/main/registration" className="get-started-btn">Get Started</a>
            </div>
            <div className="col-lg-3 box" data-aos="fade-up">
              <h3>5 - 8</h3>
              <h4>3,000 PKR<span>per month</span></h4>
              <ul>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Registration fee</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Building maintenance charges</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Annual stationary charges</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Hidden charges</span></li>
              </ul>
              <a href="/main/registration" className="get-started-btn">Get Started</a>
            </div>
            <div className="col-lg-3 box" data-aos="fade-left">
              <h3>9 - 10 (O Levels)</h3>
              <h4>4,000 PKR<span>per month</span></h4>
              <ul>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Registration fee</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Building maintenance charges</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Annual stationary charges</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Hidden charges</span></li>
              </ul>
              <a href="/main/registration" className="get-started-btn">Get Started</a>
            </div>
            <div className="col-lg-3 box" data-aos="fade-left">
              <h3>11 - 12 (A Levels)</h3>
              <h4>4,500 PKR<span>per month</span></h4>
              <ul>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Registration fee</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Building maintenance charges</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Annual stationary charges</span></li>
                <li style = {{color : "red"}} className="na"><i className="bx bx-x" /> <span>Hidden charges</span></li>
              </ul>
              <a href="/main/registration" className="get-started-btn">Get Started</a>
            </div>
          </div>
        </div>
      </section>{/* End Pricing Section */}
        </div>
    )
}

export default Pricing
