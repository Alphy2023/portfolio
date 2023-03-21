import { Link } from "react-router-dom"
import { Data } from "../Data"

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="slide-left">Portfolio</h2>
          <p data-aos="slide-right">My Recent Projects.</p>
        </div>

        <div className="row" data-aos="fade-down" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              {Data.portfolio.categories.map((item) => (
                <li data-filter={`.${item.name}`} key={item._id}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {Data.portfolio.projects.map((item, i) => (
            <div
              className={`col-lg-3 col-md-4 portfolio-item ${item.category}`}
              key={i}
            >
              <div className="portfolio-wrap">
                <img src={item.images[0].image} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href={item.images[0].image}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title={item.title}
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <Link to={`/portfolio/${item.title}`} title="More Details">
                    <i className="bx bx-link"></i>
                  </Link>
                </div>
                <div>
                  {/* <span>test project</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio
