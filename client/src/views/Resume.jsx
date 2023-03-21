
import { Data } from './../Data';
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="slide-right">Resume</h2>
          <p data-aos="slide-left">Have a look at my journey.</p>
        </div>
        <div className="col-lg-6p" data-aos="fade-down">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0">
            <h4> {Data?.resume.summary.name}</h4>
            <p>
              <em>{Data?.resume.summary.title}</em>
            </p>
            <ul>
              <li> {Data?.resume.summary.address}</li>
              <li> {Data?.resume.summary.phone}</li>
              <li> {Data?.resume.summary.email}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            {Data?.resume?.experience.map((item, i) => (
              <div className="resume-item" key={i}>
                <h4>{item.role}</h4>
                <h5>
                  {item.start_date} - {item.end_date}
                </h5>
                <p>
                  <em>{item.company}</em>
                </p>
                <ul>
                  {item?.duties.map((duty, i) => (
                    <li key={i}>{duty.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            {Data?.resume?.education.map((item) => (
              <div className="resume-item">
                <h4>{item.course}</h4>
                <h5>
                  {item.start_date} - {item.end_date}
                </h5>
                <p>
                  <em>{item.institution}</em>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume