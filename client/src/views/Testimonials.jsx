import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import { Data } from "../Data";

// install Swiper modules
SwiperCore.use([Pagination,Navigation,Pagination]);
const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="slide-left">Testimonials</h2>
            <p data-aos="slide-right">What My Clients Say About Me.</p>
          </div>

          <div className="testimonials-slider swiper">
            <Swiper
              slidesPerView={3}
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerColumn={2}
              slidesPerRow={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="mySwiper"
            >
              <div className="swiper-wrapper">
                {/* <!-- End testimonial item --> */}
                {Data.testimonials.map((item) => (
                  <SwiperSlide className="swiper-slide">
                    <div className="swiper-slide" key={item._id}>
                      <div className="testimonial-item" data-aos="fade-down">
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          {item.quote}
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img
                          src={item.image}
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>{item.client_name}</h3>
                        <h4>{item.role}</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* <!-- End testimonial item --> */}
              </div>
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials