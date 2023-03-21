import React from 'react'
import { useState } from 'react';
import ServiceModal from '../components/ServiceModal'
import { Data } from '../Data'

const Services = () => {
  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");
    const showModal = (e) => {
      setOpen(true);
      setServiceId(e)
    };
    const hideModal = (e) => {
       setTimeout(() => {
        setOpen(false);
       }, 100);
     };
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="slide-right">Services</h2>
          <p data-aos="slide-left">What I Offer.</p>
        </div>
        <div className="row">
          {Data.services.map((item) => (
            <div
              className="col-lg-4 col-md-6 icon-box "
              data-aos="fade-down"
              key={item.id}
            >
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <h4 className="title">
                <a href="">{item.title}</a>
              </h4>
              <p className="description" data-aos="fade-up">
                {item.description}
              </p>
              <span
                className="services__button"
                onClick={() => showModal(`${item.title}`)}
              >
                Read More{" "}
                <i className="bx bx-right-arrow-alt services__icon"></i>
              </span>
            </div>
          ))}
        </div>
        {/* <!-- services modal --> */}
        <ServiceModal open={open} performAction={() => hideModal()} sId={serviceId} />
        {/* <!-- services modal ends--> */}
      </div>
    </section>
  );
}

export default Services