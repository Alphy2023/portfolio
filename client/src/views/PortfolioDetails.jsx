
import {Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import BreadCrumb from '../components/BreadCrumb';
import CustomHelmet from '../components/CustomHelmet';
import { Data } from '../Data';
SwiperCore.use([Pagination, Navigation, Pagination]);

const PortfolioDetails = (props) => {
  const {slug} = useParams();

  const portfolio = Data.portfolio.projects.find((item)=>item.title===slug);
    // useEffect(()=>{
     
    // },[slug])
    console.log(portfolio.images[2]);
  return (
    <>
      <CustomHelmet title={`Portfolio | ${slug}`} />
      <BreadCrumb title={slug} />

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <Swiper
                  slidesPerView={1}
                  modules={[Autoplay, Navigation, Pagination]}
                  slidesPerColumn={4}
                  slidesPerRow={2}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  className="mySwiper"
                >
                  <div className="swiper-wrapper align-items-center">
                    {portfolio?.images?.map((item, i) => (
                      <SwiperSlide className="swiper-slide" key={i}>
                        {/* <div className="swiper-slide"> */}
                          <img src={item?.image} alt="" style={{height:"60vh"}}/>
                        {/* </div> */}
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {portfolio.category}
                  </li>
                  <li>
                    <strong>Client</strong>: {portfolio.client}
                  </li>
                  <li>
                    <strong>Project date</strong>: {portfolio.delivery_date}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href={portfolio.project_url} target="_blank">
                      {portfolio.project_url}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Project Description</h2>
                <p>{portfolio.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioDetails