import React from 'react'

function FAQ() {
    return (
        <div>
            
      {/* ======= Frequently Asked Questions Section ======= */}
      <section id="faq" className="faq section-bg">
        <div className="container mt-5" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Got a question? Get your answer. 
               If you can’t find the answer on this page, feel free to ask us via the “Contact Us” page.</p>
          </div>
          <div className="accordion-list">
            <ul>
              <li data-aos="fade-up">
                <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">Do I have to use a tablet?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                  <p>
                  Yes. Using a tablet will allow you to write in your online notebook in your own handwriting and easily access the platform from any location, at any time of the day or night.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={100}>
                <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">How will I communicate with my teacher?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                  Built-in video classes will allow you to receive the learning content from your teacher, just like being in the classroom with them. Teachers are also available 24 hours a day, 7 days a week, to ask them any questions while you are studying.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={200}>
                <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">Do I need to buy any books, materials or notebooks?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                  No. Everything that you need for learning is incorporated into the platform. You will have an online notebook in order to make notes and save them in one easily accessible place. One huge advantage of having everything online is that you will never lose your notes and learning material is interactive, using videos and other engaging methods.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={300}>
                <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed">How are students tested?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                  Students are regularly tested through the platform. Facial recognition will ensure that the correct students are sitting the tests and that they are being completed in an appropriate and fair way for all students.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={400}>
                <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed">How do I know my child is studying?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                  Facial recognition will be used to ensure that the correct students are attending classes and study sessions. When using the platform, students will not be able to access other applications on the tablet, meaning that their main focus will be on their learning.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={400}>
                <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed">How do I know how my child is progressing?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                  <p>
                  Regular performance reports will be sent to parents and guardians based on artificial intelligence and various analytics, including how much students are participating in classes and performance results.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>{/* End Frequently Asked Questions Section */}
        </div>
    )
}

export default FAQ
