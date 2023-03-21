
const Hero = () => {
  // greetings depending on time
  let greeting="";
//   let greeting = document.getElementsByClassName(".home__greeting");

  let date = new Date();
  let hoursNow = date.getHours();

  if (hoursNow > 16) {
    //5pm to 6am
    greeting = "Hello, Good Evening,";
  } else if (hoursNow > 11) {
    //12pm to 5pm
    greeting = "Hello, Good Afternoon,";
  } else if (hoursNow > 5) {
    //12pm to 5pm
    greeting = "Hello, Good Morning,";
  } else {
    greeting = "Hello, Welcome,";
  }
  return (
    <section
      id="hero"
      className="d-flex flex-column 
      justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <div className="home__data" data-aos="slide-right">
          <span className="home__greeting">
            <span className="greeting">{greeting}</span>
            {/* <!-- <span>and welcome To My portfolio</span> --> */}
            {/* <!-- <br> --> */}
            {/* <!-- <span>and welcome To My portfolio</span> --> */}
          </span>
          <span>Welcome to my portfolio website</span>
          <h1 className="home__name">I'm Alphonce Omondi</h1>

          <p>
            I'm a
            <span
              className="typed"
              data-typed-items=",UI/UX Designer, Developer, Freelancer"
            ></span>
          </p>

          <div className="home__buttons">
            <a
              download=""
              href="assets/pdf/Alphy-Resume.pdf"
              className="button button--ghost"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Get Resume
              <i className="bx bx-download"></i>
            </a>
            <a
              href="#contact"
              className="button"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Hire Me
              <i className="bx bx-check"></i>
            </a>
          </div>
        </div>
        {/* <!-- profile-picture --> */}
        <div className="profile-picture" data-aos="slide-left">
          <div
            className="profile-picture-bg"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {/* style={{ backgroundImage: url("./assets/img/uploads/photo-2.jpg") }} */}
          </div>

          {/* <!-- mouse scroll --> */}
        </div>
        {/* <!-- profile-picture ends --> */}
        <a href="#about" className="home__scroll" data-aos="slide-down">
          <i className="bx bx-mouse home__scroll-icon"></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}

export default Hero