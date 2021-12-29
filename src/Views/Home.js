import React, {Component} from 'react';
import {Accordion} from 'react-bootstrap';

export default class Home extends Component{
    render(){
        return(
            <div>
            
            
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center justify-content-center">
              <div className="container position-relative">
                <h1>We provide custom digital solutions for our clients and trainings for enthusiasts</h1>
                <h2 style={{fontStyle: 'bold'}}>International Certifications  |<span className="font-weight-bold" style={{color: '#ffc107'}}> Scholarships for Toppers (No Certification Fee) <br />Remote Course Internship Access for Outstationed candidates, Graduate Students, Working Professionals &amp; Females</span></h2>
                <a href="https://youtu.be/TF3tLr33v2M" className="btn-get-started scrollto"><i className="fas fa-play-circle" /> Get to know us better</a>
              </div>
            </section>
            {/* End Hero */}
            <main id="main">
              {/* ======= Clients Section ======= */}
              <section id="clients" className="clients section-bg" style={{backgroundColor: 'rgba(55, 64, 85, 0.9)'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
                      <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
                      <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
                      <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
                      <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </section>{/* End Clients Section */}
              {/* ======= About Section ======= */}
              <section id="about" className="about">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src="assets/img/p2.jpeg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                      <h3>We build Customized Software Solutions</h3>
                      <p>
                        We take pride in our strong capability for designing and engineering robust software using mobile, web, and cloud based technologies. Specializing in custom web applications, intuitive mobile apps, and robust data mining techniques, our team creates digital solutions that impact millions of lives.
                      </p>
                      <div className="row">
                        <div className="col-md-4">
                          <i className="fas fa-code-branch" />
                          <h4>WEB</h4>
                          <p>Our web development team creates intuitive user experiences wrapped up in beautiful designs. Everything we create is custom and precisely made to your specification.</p>
                        </div>
                        <div className="col-md-4">
                          <i className="fas fa-brain" />
                          <h4>AI</h4>
                          <p>We have an exceptional team of Artificial Intelligence developers. We have members from all over the world. We follow international standards.</p>
                        </div>
                        <div className="col-md-4">
                          <i className="fas fa-dice-d20" />
                          <h4>GAMES</h4>
                          <p>Our expert team of developers, develop exceptional and customized games as per our client's requests. We have built award-winning games and are waiting to break the records again.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/* End About Section */}
              {/* ======= Counts Section ======= */}
              <section id="counts" className="counts section-bg">
                <div className="container">
                  <div className="row counters">
                    <div className="col-lg-3 col-6 text-center">
                      <h1>15</h1>
                      
                      {/* <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" /> */}
                      <p>Clients</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center"><h1>10</h1>
                      {/* <span data-purecounter-start={0} data-purecounter-end={10} data-purecounter-duration={1} className="purecounter" /> */}
                      <p>Projects</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center"><h1>24</h1>
                      {/* <span data-purecounter-start={0} data-purecounter-end={24} data-purecounter-duration={1} className="purecounter" /> */}
                      <p>Hours Of Support</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center"><h1>115</h1>
                      {/* <span data-purecounter-start={0} data-purecounter-end={115} data-purecounter-duration={1} className="purecounter" /> */}
                      <p>Our Students</p>
                    </div>
                  </div>
                </div>
              </section>{/* End Counts Section */}
              {/* ======= Services Section ======= */}
              <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2 style={{color: 'rgba(55, 64, 85, 0.9) !important', fontSize: '40px'}}>Services</h2>
                    <p>We offer a full range of engineering services that your company needs</p>
                  </div>
                  <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                      <div className="icon-box iconbox-blue">
                        <div className="icon">
                          <i className="bx bx-laptop" />
                        </div>
                        <h4><a href>Web Development</a></h4>
                        <p>We create beautifully designed web apps precisely tailored to your situation. From providing Software as a Service to creating custom software to support your customers, our Web App team will get you up and running.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="icon-box iconbox-orange ">
                        <div className="icon">
                          <i className="bx bx-mobile-alt" />
                        </div>
                        <h4><a href>Mobile App Development</a></h4>
                        <p>US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps. Your app needs to be brilliantly designed and intuitive to have a shot at getting anyone’s attention.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                      <div className="icon-box iconbox-pink">
                        <div className="icon">
                          <i className="bx bx-expand" />
                        </div>
                        <h4><a href>Enterprise Software Development</a></h4>
                        <p>We provide full range of custom software development services to bring your ideas to life. Our turnkey solutions are custom-designed to fit into your enterprise software ecosystem. Anything you can dream up, from a custom desktop application to a global app, we can build it.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                      <div className="icon-box iconbox-yellow">
                        <div className="icon">
                          <i className="bx bx-layer" />
                        </div>
                        <h4><a href>Mern Stack</a></h4>
                        <p>We provide digital solutions for clients, which are developed in the latest technology stacks</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="icon-box iconbox-red">
                        <div className="icon">
                          <i className="bx bx-code" />
                        </div>
                        <h4><a href>QA &amp; Software Testing Solutions</a></h4>
                        <p>A software team is only as good as the quality of the work it produces. That’s why we value excellence over success, and provide specialized QA &amp; testing as a separate service–as well as baked right into every project we take up. No shortcuts.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                      <div className="icon-box iconbox-teal">
                        <div className="icon">
                          <i className="bx bx-brain" />
                        </div>
                        <h4><a href>AI Solutions</a></h4>
                        <p>We integrate our systems with Artificial Intelligence. We make sure that our product stands out.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/* End Services Section */}
              {/* ======= Cta Section ======= */}
              <section id="cta" className="cta">
                <div className="container">
                  <div className="text-center">
                    <h3>Syntics</h3>
                    <p>We build unique and completely customized products designed to impress and satisfy the requiremnets of our clients!</p>
                    <a className="cta-btn" target="_blank" href="https://api.whatsapp.com/send?phone=923084339423"><i className="fab fa-whatsapp" /><span>&nbsp; &nbsp;Connect with us</span></a>
                  </div>
                </div>
              </section>{/* End Cta Section */}
              {/* ======= Portfolio Section ======= */}
              <section id="portfolio" className="services section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2 style={{color: 'rgba(55, 64, 85, 0.9) !important', fontSize: '40px'}}>Commercial Projects that we are working on!</h2>
                  </div>
                  <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                      <div className="icon-box iconbox-yellow">
                        <div className="icon">
                          <i className="bx bx-money" />
                        </div>
                        <h4>International Payment Gateway | Digital Banking (Canada)</h4>
                        <p>Our Team at Syntics is working on creating an International Payment System that would modernize the lives of the people.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="icon-box iconbox-orange ">
                        <div className="icon">
                          <i className="bx bxs-server" />
                        </div>
                        <h4>Hosting &amp; Domain Service Provider (Canada)</h4>
                        <p>Optimal Hosting service is essential, that is why our Team at Syntics Hosting Service Provider is working to create a hosting service suitable for all.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                      <div className="icon-box iconbox-pink">
                        <div className="icon">
                          <i className="bx bxs-camera-home" />
                        </div>
                        <h4>Home &amp; Commercial Security with AI (Pakistan)</h4>
                        <p>Having a fool-proof &amp; affordable security system  is essential. Our Team at Syntics is working to create security systems that are affordable and easy to install.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                      <div className="icon-box iconbox-blue">
                        <div className="icon">
                          <i className="bx bx-plus-medical" />
                        </div>
                        <h4>Advanded Medical Facilities with AI (Pakistan)</h4>
                        <p>Safe medical assistance is extremely important for Syntics. Syntics Health assistance is coming soon.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="icon-box iconbox-orange ">
                        <div className="icon">
                          <i className="bx bx-sort" />
                        </div>
                        <h4>A Project of Analytics (an E.R.P) (Canada)</h4>
                        <p>Syntics is branching out into multiple sectors. Analytics is another branch is Syntics which is coming soon.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                      <div className="icon-box iconbox-pink">
                        <div className="icon">
                          <i className="bx bxs-truck" />
                        </div>
                        <h4>FMCG (Fast Moving Consumer Goods) Delivery System (Pakistan)</h4>
                        <p>Syntics has brought it all, food, Grocery, and other consumable goods. Syntics Delivery is coming soon in Pakistan.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                      <div className="icon-box iconbox-blue">
                        <div className="icon">
                          <i className="bx bx-briefcase-alt" />
                        </div>
                        <h4>Online Job Portal</h4>
                        <p>Syntics is developing an International Job portal which would allow easy access, premium job offers and much more.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="icon-box iconbox-orange ">
                        <div className="icon">
                          <i className="bx bxs-shopping-bag-alt" />
                        </div>
                        <h4>Ecommerce Digital Webshop</h4>
                        <p>Syntics is developing an International ecommerce digital portal. Coming Soon Internationally.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                      <div className="icon-box iconbox-pink">
                        <div className="icon">
                          <i className="bx bxs-ship" />
                        </div>
                        <h4>Advanced Courier System (Pakistan)</h4>
                        <p>Our aim at Syntics is to optimize Courier system in Pakistan. Our project is coming out soon.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/* End Services Section */}
              {/* End Portfolio Section */}
              {/* ======= Pricing Section ======= */}
              <section id="pricing" className="pricing section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2 style={{color: 'rgba(55, 64, 85, 0.9) !important', fontSize: '40px'}}>Trainings</h2>
                    <p>We offer One Year courses which are specially designed for young enthusiasts. We offer market-competitve trainings and internship opportunities.</p>
                  </div>
                  <div className="container my-5 justify-content-center d-flex">
                    <img src="assets/img/Internships.png" alt="We offer Internship opportunities" className="img-fluid" />
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={100}>
                      <div className="box featured">
                        <span className="advanced">Advanced</span>
                        <p /><h3>What We Offer</h3> <br /> <small>One Year Course</small> <br />
                        Full-stack web development<p />
                        <h4><sup>PKR</sup>6,667<span> / month</span></h4>
                        <ul>
                          <li><i className="fab fa-html5" /> Html <i className="bx bx-check" /></li>
                          <li><i className="fab fa-css3-alt" /> Css <i className="bx bx-check" /></li>
                          <li><i className="fab fa-bootstrap" /> Bootstrap <i className="bx bx-check" /></li>
                          <li><i className="fab fa-jquery" /> jquery <i className="bx bx-check" /></li>
                          <li><i className="fab fa-node-js" /> Javascript <i className="bx bx-check" /></li>
                          <li><i className="fas fa-database" /> Hosting / Domain / Online Pyment Gateway <i className="bx bx-check" /></li>
                          <li><i className="fab fa-node" /> NodeJs <i className="bx bx-check" /></li>
                          <li><i className="fab fa-angular" /> angular <i className="bx bx-check" /></li>
                          <li><i className="fas fa-server" /> MongoDB <i className="bx bx-check" /></li>
                          <li><i className="fab fa-react" /> ReactJs <i className="bx bx-check" /></li>
                          <li><i className="fab fa-vuejs" /> VueJs <i className="bx bx-check" /></li>
                          <li><i className="fas fa-briefcase" /> <b>INTERNSHIP</b> <i className="bx bx-check" /></li>
                          <li>Disclaimer: <br /> 
                            International Certification Fee is not included. (Optional)</li>
                          <p>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Details</Accordion.Header>
                              <Accordion.Body>
                                  
                                  During the course of ONE YEAR, students will have to pass multiple levels.<br />
                                  <b>Level 1</b><br />
                                  Understanding Data Structures <br />
                                  Algorithmic Exercises <br />
                                  Understanding Big-O &amp; optimized algorithms <br />
                                  <b>Level 2</b><br />
                                  Front-end Basics: <br />
                                  HTML <br />
                                  CSS <br />
                                  Bootstrap <br />
                                  Tailwind CSS <br />
                                  jquery <br />
                                  Javascript <br />
                                  <b>Level 2</b><br />
                                  Back-end Basics:
                                  SQL/Hosting / Domain / Online Pyment Gateway/POSTGRE SQL <br />
                                  Api<br />
                                  Nodejs <br />
                                  angular <br />
                                  Implement relational databases and schemas <br />
                                  <b>Level 3</b><br />
                                  React<br />
                                  Redux<br />
                                  Express js <br />
                                  start building portfolio projects <br />
                                  <b>Level 4</b><br />
                                  LAMP STACK <br />
                                  MERN STACK <br />
                                  <b>Level 5</b><br />
                                  Internships <br />
                                  Freelancing portal access by Syntics <br />  
                                
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                            {/* <button className="btn btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                              Read More
                            </button> */}
                          </p>
                          {/* <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                              During the course of ONE YEAR, students will have to pass multiple levels.
                              <b>Level 1</b>
                              Understanding Data Structures <br />
                              Algorithmic Exercises <br />
                              Understanding Big-O &amp; optimized algorithms <br />
                              <b>Level 2</b>
                              Front-end Basics: <br />
                              HTML <br />
                              CSS <br />
                              Bootstrap <br />
                              Tailwind CSS <br />
                              jquery <br />
                              Javascript <br />
                              <b>Level 2</b>
                              Back-end Basics:
                              SQL/Hosting / Domain / Online Pyment Gateway/POSTGRE SQL <br />
                              Api<br />
                              Nodejs <br />
                              angular <br />
                              Implement relational databases and schemas <br />
                              <b>Level 3</b>
                              React<br />
                              Redux<br />
                              Express js <br />
                              start building portfolio projects <br />
                              <b>Level 4</b>
                              LAMP STACK <br />
                              MERN STACK <br />
                              <b>Level 5</b>
                              Internships <br />
                              Freelancing portal access by Syntics <br />  
                            </div>
                          </div> */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
                      <div className="box featured">
                        <span className="advanced">Advanced</span>
                        <p /><h3>What We Offer</h3> <br /> <small>One Year Course</small> <br />
                        Artificial Intelligence (Machine Learning &amp; Deep Learning)<p />
                        <h4><sup>PKR</sup>7,100<span> / month</span></h4>
                        <ul>
                          <li><i className="fas fa-calculator" /> Math Foundations <i className="bx bx-check" /></li>
                          <li><i className="fab fa-python" /> Python <i className="bx bx-check" /></li>
                          <li><i className="fas fa-database" /> Data-structures <i className="bx bx-check" /></li>
                          <li><i className="fab fa-hive" /> Intro to Artificial Intelligence <i className="bx bx-check" /></li>
                          <li><i className="fab fa-trade-federation" /> Advanced Python Libraries <i className="bx bx-check" /></li>
                          <li><i className="fas fa-project-diagram" /> AI projects <i className="bx bx-check" /></li>
                          <li><i className="fas fa-laptop-code" /> Machine Learning <i className="bx bx-check" /></li>
                          <li><i className="fas fa-code-branch" /> Machine Learning Projects <i className="bx bx-check" /></li>
                          <li><i className="fab fa-codepen" /> Deep Learning <i className="bx bx-check" /></li>
                          <li><i className="fas fa-code-branch" /> Deep Learning Projects <i className="bx bx-check" /></li>
                          <li><i className="fas fa-briefcase" /> <b>INTERNSHIP</b> <i className="bx bx-check" /></li>
                          <li>Disclaimer: <br /> 
                            International Certification Fee is not included. (Optional)</li>
                          <li />
                          <p>
                            {/* <button className="btn btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                              Read More
                            </button> */}
                            <Accordion>
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>Details</Accordion.Header>
                                <Accordion.Body>
                                
                                  During the course of ONE YEAR, students will have to pass multiple levels.<br />
                                  <b>Level 1</b><br />
                                  Math Foundations: <br />
                                  Discrete Mathematics <br />
                                  Data Structures <br />
                                  Programming Basics in python (Part 1) <br />
                                  Programming Basics in python (Part 2) <br />
                                  Artificial Intelligence Basics <br />
                                  <b>Level 2</b><br />
                                  Artificial Intelligence Branches <br />
                                  Advanced Mathematics <br />
                                  Neural Networks Basics<br />
                                  Neural Network Projects <br />
                                  <b>Level 3</b><br />
                                  What is Machine Learning <br />
                                  Advanced Python Libraries like Tensorflow, numpy, pandas... <br />
                                  Machine Learning Projects using databases<br />
                                  <b>Level 4</b><br />
                                  What is Deep Learning <br />
                                  Advanced Python Libraries like Keras <br />
                                  Deep Learning Projects using databases<br />
                                  <b>Level 5</b><br />
                                  Internships <br />
                                  Freelancing portal access by Syntics <br />
                                
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>

                          </p>
                          {/* <div className="collapse" id="collapseExample2">
                            <div className="card card-body">
                              During the course of ONE YEAR, students will have to pass multiple levels.
                              <b>Level 1</b><br />
                              Math Foundations: <br />
                              Discrete Mathematics <br />
                              Data Structures <br />
                              Programming Basics in python (Part 1) <br />
                              Programming Basics in python (Part 2) <br />
                              Artificial Intelligence Basics <br />
                              <b>Level 2</b><br />
                              Artificial Intelligence Branches <br />
                              Advanced Mathematics <br />
                              Neural Networks Basics<br />
                              Neural Network Projects <br />
                              <b>Level 3</b><br />
                              What is Machine Learning <br />
                              Advanced Python Libraries like Tensorflow, numpy, pandas... <br />
                              Machine Learning Projects using databases<br />
                              <b>Level 4</b><br />
                              What is Deep Learning <br />
                              Advanced Python Libraries like Keras <br />
                              Deep Learning Projects using databases<br />
                              <b>Level 5</b><br />
                              Internships <br />
                              Freelancing portal access by Syntics <br />
                            </div>
                          </div> */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                      <div className="box featured">
                        <span className="advanced">Advanced</span>
                        <p /><h3>What We Offer</h3> <br /> <small>One Year Course</small> <br />
                        Game Development<p />
                        <h4>Coming soon<span> (2022) </span></h4>
                        <ul>
                          <li><i className="fas fa-biking" /> Game development life-cycle <i className="bx bx-check" /></li>
                          <li><i className="fas fa-cubes" />  3D game systems and coordinates<i className="bx bx-check" /></li>
                          <li><i className="fab fa-unity" /> Unity <i className="bx bx-check" /></li>
                          <li><i className="fas fa-globe-africa" /> Environment &amp; terrain drawing <i className="bx bx-check" /></li>
                          <li><i className="fab fa-hive" /> Unity assets <i className="bx bx-check" /></li>
                          <li><i className="fas fa-dna" /> Game physics <i className="bx bx-check" /></li>
                          <li><i className="fas fa-project-diagram" /> Game optimization <i className="bx bx-check" /></li>
                          <li><i className="fas fa-laptop-code" /> Publishing &amp; Monitizing Games <i className="bx bx-check" /></li>
                          <li><i className="fas fa-code-branch" /> Building humanoids <i className="bx bx-check" /></li>
                          <li><i className="fab fa-codepen" /> Mega Game development Projects <i className="bx bx-check" /></li>
                          <li><i className="fas fa-briefcase" /> <b>INTERNSHIP</b> <i className="bx bx-check" /></li>
                          <li>Disclaimer: <br /> 
                            International Certification Fee is not included. (Optional)</li>
                          <li />
                          <li />
                          <li />
                          <li />
                          <li />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container my-5 justify-content-center d-flex">
                  <button className="p-3 border-0 bg-transparent shadow-lg" style={{borderRadius: '20px', fontSize: '20px'}}><a href="apply"> <b>Apply NOW</b></a></button>
                </div>
              </section>
              {/* End Pricing Section */}
              {/* ======= Team Section ======= */}
              <section id="team" className="team section-bg">
                <div className="container">
                  <div className="section-title">
                    <h2 style={{color: 'rgba(55, 64, 85, 0.9) !important', fontSize: '40px'}}>Team</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-1" />
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
                      <div className="member">
                        <div className="member-img">
                          <img src="assets/img/instructor-1.png" className="img-fluid" alt="" />
                          <div className="social">
                            
                            React | Linux | BlockChain | AI
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>Shahid Qureshi</h4>
                          <span>AI Instructor</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 d-flex justify-content-center">
                      <div className="align-middle">
                        I hold Post Graduate diploma and BSc(Hons) in computing from British universities. After my graduation, I  worked in the IT industry for over 9 years in the UK. At the tail-end of 2019, I moved down to Dubai where I worked as an IT Manager. I have worked with wide variety of employers ranging from web hosting companies to charities. I'm a life-long learner and always keep myself abreast with latest technologies. I have completed many online courses during past 5 years. The list of courses includes Linux, React, Artificial intelligence, bloackchain and many more. I have been graduated from a  highly selective and very intense AI mastercamp called Strive school based in Germany, entirely remote and backed by YCombinator.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-1" />
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member">
                        <div className="member-info">
                          <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mr Tariq &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                          <span>Full-Stack Web Instructor</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 d-flex justify-content-center">
                      <div className="align-middle">
                        Mr. Tariq is at the pinnacle of mentoring. He has expertise in numerous fields together with MERN, MEAN Stack, angular, and Web Development. He is an online guide to over 2,000 students throughout Pakistan. 
                        His Web Development courses have obtained high admiration due to his comprehensive tutorials, sensible techniques, &amp; masses of palms-on examples. 
                        He is a Software Engineer, Computer expert, and Blogger. His teaching style is extremely versatile. He teaches with practical real-world examples. He is Google Certified, also dealing with the cooperate pieces of training.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-1" />
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member">
                        <div className="member-img">
                          <img src="assets/img/azlan.png" className="img-fluid" alt="" />
                          <div className="social">
                            
                            MERN Stack Developer
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Syed Azlan Ul-Haq &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                          <span>CEO of Syntics</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 d-flex justify-content-center">
                      <div className="align-middle">
                        Experienced Member with a demonstrated history of working in the computer software industry. 
                        Skilled in Web App Development knowing a wide 
                        range of programming languages.
                        Strong operations professional with a Bachelor of
                        Computer Science - BCS (Hons.) from Forman Christian
                        College (A Chartered University). Worked in Different
                        Web Applications projects such as accounting software,
                        educational portals, e-commerce as well as artificial
                        intelligence. 
                        As a CEO of Syntics Soft,
                        I will be bringing my experience in the field of Computer Science
                        and leading my department to success with professionalism 
                        and ethics which will not only help my department to achieve 
                        success, but also, become valuable members of the IT industry
                        of Pakistan.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-1" />
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member">
                        <div className="member-img">
                          <img src="assets/img/amna.png" className="img-fluid" alt="" />
                          <div className="social">
                            
                            LAMP Stack Developer
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amna Salman &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                          <span>IT Manager</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 d-flex justify-content-center">
                      <div className="align-middle">
                        IT Manager and Full-stack web Developer, bringing forth her industry experience to strategize &amp; optimize the company's model. She’s honed her communication, management, and problem-solving skills. 
                        Her versatility with assistance to everyone provides successful management of the company's responsibilities.  Amna holds a BS Honors in Computer Science from Forman Christian College (A Chartered University). 
                      </div>
                    </div>
                  </div>
                  {/* <div class="row">
              
              <div class="col-lg-1"></div>
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member">
                
                  <div class="member-info">
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Muhammad Usman &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                    <span>CEO of Syntics</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-6 d-flex justify-content-center">
                <div class="align-middle">
                  Muhammad Usman has an invaluable 10 years track 
                  record of prudent financial management from working 
                  in senior finance manager roles across various businesses, 
                  including manufacturing, education, international trade and 
                  Investment management and analysis. He is a qualified accountant 
                  as serving as chief financial officer in Syntics. His primary 
                  responsibilities are to maintain financial records in accordance 
                  with applicable laws and regulation, preparation of strategic budgets, 
                  preparation of strategic competitive reports and act as main person to 
                  collaborate with international clients for business development and to 
                  provide cost effective solutions with the help of existing professional IT team.
                  He is currently holding numerous financial achievements: FCCA, ACCA, UAECA, 
                  CGMA and Advanced Diploma in Finance, Management Accounting, Business Development, and Business Analysis.
                </div>
              </div>
            </div> */}
                </div>
              </section>
              {/* End Team Section */}
              {/* ======= Frequently Asked Questions Section ======= */}
              <section id="careers" className="faq section-bg">
                <div className="container">
                  <div className="section-title">
                    <h2 style={{color: 'rgba(55, 64, 85, 0.9) !important', fontSize: '40px'}}>Careers</h2>
                    <p>Email your resume and cover letter at recruitment@syntics.co</p>
                  </div>
                  <div className="faq-list">
                    <ul>
                      <li data-aos="fade-up">
                      <Accordion>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Chairman of Board (1 Position Vaccant)</Accordion.Header>
                          <Accordion.Body>
                          15 years of experience <br />
                            Ensures that the firm's duties to shareholders are being fulfilled <br />
                            Deals with upper management <br />
                            The board chair is the leader of the board.The board chair is responsible for: <br />
                            • Ensuring the integrity and effectiveness of the board’s governance role and processes. <br />
                            • Presiding at meetings of the board, the board’s Executive Committee, if the board has one, and the board’s
                            Executive Performance and Compensation Committee <br />
                            • Representing the board within the hospital and the hospital in the community. <br />
                            • Maintaining effective relationships with board members, management and stakeholders. <br />
                            The board chair ensures the board meets its obligations and fulfills its governance responsibilities.The board
                            chair oversees the quality of the board’s governance processes including: <br />
                            • Ensuring that the board performs a governance role that respects and understands the role of management. <br />
                            • Ensuring that the board adopts an annual workplan and objectives that are consistent with the hospital’s
                            strategic directions, mission and vision. <br />
                            • Ensuring that the work of the board committees is aligned with the board’s role and annual work plan and
                            that the board respects and understands the role of board committees and does not redo committee work
                            at the board level. <br />
                            • Ensuring board succession by ensuring there are processes in place to recruit, select and train directors
                            with the skills, experience, background and personal qualities required for effective board governance. <br />
                            • Ensuring that the board and individual directors have access to appropriate education. <br />
                            • Overseeing the board’s evaluation processes and providing constructive feedback to individual committee
                            chairs and board members as required. <br />
                            • Ensuring that the board’s governance structures and processes are reviewed, evaluated, and revised from
                            time to time.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                        {/* <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Chairman of Board (1 Position Vaccant)<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                        <div id="faq-list-1" className="collapse ml-3" data-bs-parent=".faq-list">
                          <p>
                            15 years of experience <br />
                            Ensures that the firm's duties to shareholders are being fulfilled <br />
                            Deals with upper management <br />
                            The board chair is the leader of the board.The board chair is responsible for: <br />
                            • Ensuring the integrity and effectiveness of the board’s governance role and processes. <br />
                            • Presiding at meetings of the board, the board’s Executive Committee, if the board has one, and the board’s
                            Executive Performance and Compensation Committee <br />
                            • Representing the board within the hospital and the hospital in the community. <br />
                            • Maintaining effective relationships with board members, management and stakeholders. <br />
                            The board chair ensures the board meets its obligations and fulfills its governance responsibilities.The board
                            chair oversees the quality of the board’s governance processes including: <br />
                            • Ensuring that the board performs a governance role that respects and understands the role of management. <br />
                            • Ensuring that the board adopts an annual workplan and objectives that are consistent with the hospital’s
                            strategic directions, mission and vision. <br />
                            • Ensuring that the work of the board committees is aligned with the board’s role and annual work plan and
                            that the board respects and understands the role of board committees and does not redo committee work
                            at the board level. <br />
                            • Ensuring board succession by ensuring there are processes in place to recruit, select and train directors
                            with the skills, experience, background and personal qualities required for effective board governance. <br />
                            • Ensuring that the board and individual directors have access to appropriate education. <br />
                            • Overseeing the board’s evaluation processes and providing constructive feedback to individual committee
                            chairs and board members as required. <br />
                            • Ensuring that the board’s governance structures and processes are reviewed, evaluated, and revised from
                            time to time.
                          </p>
                        </div> */}
                      </li>
                      <li data-aos="fade-up" data-aos-delay={100}>
                      <Accordion>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>IT Supervisors (2 Positions Vaccant)</Accordion.Header>
                          <Accordion.Body>
                          3 years of experience <br />
                            One Male &amp; One Female <br />
                            Responsible for installing and managing IT infrastructure <br />
                            Analyze a company's technology needs, develop systems and software
                            IT Supervisors should display stronger than average communication, analytical, organizational and problem solving skills to be successful in this field. <br />
                            They should be team-building leaders who possess time management and troubleshooting skills and a thorough understanding of computer systems and functions. <br />
                            Knowledge of business operations, such as financial and personnel management, is important. <br />
                            A deep understanding of project management practices and processes, such as scheduling, budgeting and meeting deadlines, is crucial for IT Supervisors. <br />
                            In addition to these important skills and abilities, employers typically seek IT Supervisors with the following capabilities: <br />
                            Knowledge of computer operating, software and other systems. <br />
                            Understanding of most recent computer system upgrades. <br />
                            Integrating new and upgraded systems. <br />
                            Monitoring systems operations and make recommendations as needed. <br />
                            Developing technological procedural and operations manuals. <br />
                            IT staff selection and training.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                        {/* <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">IT Supervisors (2 Positions Vaccant) <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                        <div id="faq-list-2" className="collapse ml-3" data-bs-parent=".faq-list">
                          <p>
                            3 years of experience <br />
                            One Male &amp; One Female <br />
                            Responsible for installing and managing IT infrastructure <br />
                            Analyze a company's technology needs, develop systems and software
                            IT Supervisors should display stronger than average communication, analytical, organizational and problem solving skills to be successful in this field. <br />
                            They should be team-building leaders who possess time management and troubleshooting skills and a thorough understanding of computer systems and functions. <br />
                            Knowledge of business operations, such as financial and personnel management, is important. <br />
                            A deep understanding of project management practices and processes, such as scheduling, budgeting and meeting deadlines, is crucial for IT Supervisors. <br />
                            In addition to these important skills and abilities, employers typically seek IT Supervisors with the following capabilities: <br />
                            Knowledge of computer operating, software and other systems. <br />
                            Understanding of most recent computer system upgrades. <br />
                            Integrating new and upgraded systems. <br />
                            Monitoring systems operations and make recommendations as needed. <br />
                            Developing technological procedural and operations manuals. <br />
                            IT staff selection and training.
                          </p>
                        </div> */}
                      </li>
                      <li data-aos="fade-up" data-aos-delay={200}>
                      <Accordion>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>Business Development Officer (2 Positions Vaccant)</Accordion.Header>
                          <Accordion.Body>
                          5 years of experience <br />
                            One Male &amp; One Female <br /> 
                            Optimize Business Model <br />
                            Widen Business's reach and approach <br />
                            Responsible for Business's growth, Planning, lead branch effectively <br />
                            Ensure achievement of Sales and profitability objectives <br />
                            Manage client relationships of the Business <br />
                            A Business Development Officer’s main goal is to identify opportunities for business growth and create marketing strategies based on those opportunities in order to meet and exceed revenue goals. <br />
                            A Business Development Officer’s typical responsibilities include: <br />
                            Analyzing current and past financial data and providing strategies to cut costs and increase revenue <br />
                            Leading the charge on market research plans to identify new opportunities <br />
                            Working with executives to implement marketing strategies and new opportunities <br />
                            Encouraging new and existing clients by creating and improving proposals <br />
                            Tracking expenses and maintaining the company budget <br />
                            Ensuring that the company meets revenue targets <br />
                            Providing training and mentoring to other members of the team <br />
                            Developing and pitching ideas for potential investors <br />
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                        {/* <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Business Development Officer (2 Positions Vaccant) <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                        <div id="faq-list-3" className="collapse ml-3" data-bs-parent=".faq-list">
                          <p>
                            5 years of experience <br />
                            One Male &amp; One Female <br /> 
                            Optimize Business Model <br />
                            Widen Business's reach and approach <br />
                            Responsible for Business's growth, Planning, lead branch effectively <br />
                            Ensure achievement of Sales and profitability objectives <br />
                            Manage client relationships of the Business <br />
                            A Business Development Officer’s main goal is to identify opportunities for business growth and create marketing strategies based on those opportunities in order to meet and exceed revenue goals. <br />
                            A Business Development Officer’s typical responsibilities include: <br />
                            Analyzing current and past financial data and providing strategies to cut costs and increase revenue <br />
                            Leading the charge on market research plans to identify new opportunities <br />
                            Working with executives to implement marketing strategies and new opportunities <br />
                            Encouraging new and existing clients by creating and improving proposals <br />
                            Tracking expenses and maintaining the company budget <br />
                            Ensuring that the company meets revenue targets <br />
                            Providing training and mentoring to other members of the team <br />
                            Developing and pitching ideas for potential investors <br />
                          </p>
                        </div> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* End Frequently Asked Questions Section */}
              {/* ======= Contact Section ======= */}
              <section id="contact" className="contact">
                <div className="container">
                  <div className="section-title">
                    <h2 style={{color: 'rgba(55, 64, 85, 0.9) !important', fontSize: '40px'}}>Contact</h2>
                    <p />
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="info-box">
                            <i className="bx bx-map" />
                            <h3 style={{color: 'rgba(55, 64, 85, 0.9) !important'}}>Our Address</h3>
                            <p style={{color: 'rgba(55, 64, 85, 0.9) !important'}}>Ferozpur Road, Lahore, Pakistan</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-box mt-4">
                            <i className="bx bx-envelope" />
                            <h3 style={{color: 'rgba(55, 64, 85, 0.9) !important'}}>Email Us</h3>
                            <p style={{color: 'rgba(55, 64, 85, 0.9) !important'}}>amna@syntics.co<br />azlan@syntics.co</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-box mt-4">
                            <i className="bx bx-phone-call" />
                            <h3 style={{color: 'rgba(55, 64, 85, 0.9) !important'}}>Call Us</h3>
                            <p style={{color: 'rgba(55, 64, 85, 0.9) !important'}}>+923084339423<br /> &nbsp;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/* End Contact Section */}
            </main>{/* End #main */}
            
            
          </div>
        )
    }
}

// export default Home;