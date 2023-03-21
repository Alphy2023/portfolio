
const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="zoom-in">
            <h2 data-aos="slide-left">About Me</h2>
            <p data-aos="slide-right">Why Choose Me?</p>
          </div>

          <div className="row">
            <div className="col-lg-3" data-aos="fade-right">
              <img
                src="assets/img/uploads/photo.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-9 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3 data-aos="slide-down">UI/UX Designer &amp; Web Developer.</h3>
              <p className="fst-italic" data-aos="slide-up">
                I am a fullstack web developer, I create web pages with UI/ UX
                user interface. I have years of experience and many clients are
                happy with the projects carried out.
              </p>
              <div className="about__info">
                <div className="about__box" data-aos="fade-up">
                  <i className="bx bx-award about__icon"></i>
                  <h3 className="about__title">Experience</h3>
                  <span className="about__subtitle">3+ Years working</span>
                </div>

                <div className="about__box" data-aos="fade-up">
                  <i className="bx bx-briefcase-alt about__icon"></i>
                  <h3 className="about__title">Projects</h3>
                  <span className="about__subtitle">23+ Completed</span>
                </div>

                <div className="about__box" data-aos="fade-up">
                  <i className="bx bx-support about__icon"></i>
                  <h3 className="about__title">Support</h3>
                  <span className="about__subtitle">Online 24/7</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6" data-aos="slide-up">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>1 May 1995</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+123 456 7890</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>New York, USA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6" data-aos="slide-up">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>30</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>PhEmailone:</strong>{" "}
                      <span>email@example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p data-aos="slide-left">
                You have your desired website you want developed? worry not you
                are in the right place. Reach out to me.
              </p>
            </div>
          </div>
        </div>
      </section>
    
      <section id="facts" class="facts">
        <div class="container">
          <div class="section-title">
            <h2 data-aos="slide-left">Facts</h2>
            <p data-aos="slide-right">Facts to consider.</p>
          </div>

          <div class="row no-gutters">
            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="slideIn"
            >
              <div class="count-box">
                <i class="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong> consequuntur quae
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="count-box">
                <i class="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="count-box">
                <i class="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="count-box">
                <i class="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Hard Workers</strong> rerum asperiores dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
