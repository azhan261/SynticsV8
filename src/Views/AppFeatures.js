import React from 'react'

function AppFeatures() {
    return (
        <div>
          
      {/* ======= App Features Section ======= */}
      <section id="features" className="features mt-5">
        <div className="container">
          <div className="section-title">
            <h2>App Features</h2>
            <p>Didactics uses state-of-the-art technology to allow everybody access to education. The team at Didactics are passionate about enabling everybody to learn in the best way possible and are constantly updating the features of the platform to ensure that the students are receiving high quality education. See some of our main features below.</p>
          </div>
          <div className="row no-gutters">
            <div className="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="bx bx-receipt" />
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                    <i className="bx bx-cube-alt" />
                    <h4>Ullamco laboris nisi</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bx bx-images" />
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bx bx-shield" />
                    <h4>Beatae veritatis</h4>
                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bx bx-atom" />
                    <h4>Molestiae dolor</h4>
                    <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                    <i className="bx bx-id-card" />
                    <h4>Explicabo consectetur</h4>
                    <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
              <img src={`${process.env.PUBLIC_URL}/img/features.svg`} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>{/* End App Features Section */}
      <section id="details" className="details mt-5">
        <div className="container">
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/details-1.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-4" data-aos="fade-up">
              <h3>Tablet Based.</h3>
              <p className="fst-italic">
              Study using a tablet and write in any language. Practise and improve your handwriting whilst studying from any location.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/details-2.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Built-in Video Classes.</h3>
              <p className="fst-italic">
              Study from anywhere at a time suitable for you with your teacher, just as if you are in the classroom with them.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/details-3.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5" data-aos="fade-up">
              <h3>Video and Audio Messaging.</h3>
              <p>Whenever you need anything, you can communicate with a teacher 24 hours a day, 7 days a week.</p>
              
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/details-4.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Digital Books.</h3>
              <p className="fst-italic">
              Interactive learning material and content in order to stimulate students while teaching new concepts.
              </p>
            </div>
          </div>
        </div>
      </section>{/* End Details Section */}
      <section id="details" className="details mt-5">
        <div className="container">
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/details-1.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-4" data-aos="fade-up">
              <h3>Digital Notebook.</h3>
              <p className="fst-italic">
              Keep all your notes in one online place and never lose that crucial piece of paper before the exam.
              </p>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/details-2.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Group Self-Study Classes.</h3>
              <p className="fst-italic">
              Study with other students from all around the world at a convenient time for you to help support each other’s learning.
              </p>
            
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/details-3.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5" data-aos="fade-up">
              <h3>Online Testing.</h3>
              <p>Testing is very important in all learning. Online, time-bounded testing allows you to take the test from anywhere in the world.</p>
             
            </div>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
              <img src={`${process.env.PUBLIC_URL}/img/details-4.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
              <h3>Facial Recognition.</h3>
              <p className="fst-italic">
              State-of-the-art facial recognition system to check attendance in class, time spent studying and to validate testing.
             </p>
            </div>
          </div>
        </div>
      </section>{/* End Details Section */}
      <section id="details" className="details mt-5">
        <div className="container">
          <div className="row content">
            <div className="col-md-4" data-aos="fade-right">
              <img src={`${process.env.PUBLIC_URL}/img/details-1.png`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-4" data-aos="fade-up">
              <h3>Performance Reports.</h3>
              <p className="fst-italic">
              Regular performance reports will be sent based on artificial intelligence and various analytics, including how active students are in lessons.
              </p>
              
            </div>
          </div>
       </div>
      </section>{/* End Details Section */}
        </div>
    )
}

export default AppFeatures
