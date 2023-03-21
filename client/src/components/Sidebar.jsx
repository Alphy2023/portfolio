import { menus } from "./Menu"
import { useParams,Link } from 'react-router-dom';
import { useEffect } from 'react';
const Sidebar = () => {
  const params = useParams().slug;
  useEffect(()=>{

  },[params])
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/assets/img/uploads/photo-2.jpg"
            alt=""
            data-aos="fade-right"
            className="img-fluid rounded-circle shadow"
          />
          <h1 className="text-light">
            <a href="">Alphonce Omondi</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#" className="github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar" data-aos="zoom-in">
          <ul>
            {menus.map((item, index) => (
              <li key={index}>
                {params ? (
                  <>
                    <a href={`/${item.link}`}>
                      <i className={item.icon}></i> <span>{item.title}</span>
                    </a>
                  </>
                ) : (
                <a href={item?.link} className={item?.class}>
                  <i className={item?.icon}></i> <span>{item?.title}</span>
                </a>
                )}
              </li>
            ))}
         
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}
        <div>
          <hr />
          <span className="mode-switch">
            <span>Switch mode:</span>
            <i className="bx bx-moon change-theme" id="theme-button"></i>
          </span>
          {/* </span> */}
        </div>
      </div>
    </header>
  );
}

export default Sidebar