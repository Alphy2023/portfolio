import { Data } from "../Data";

const ServiceModal = (props) => {
    const { sId, open, performAction } = props;
    // api request
    const service=Data.services.find((item)=>item.title===sId);

  return (
    <div className={`services__modal  ${open ? "active-modal" : ""}`}>
      <div className="services__modal-content">
        <i
          className="bx bx-x services__modal-close"
          onClick={performAction}
        ></i>
        <h3 className="services__modal-title">{service?.title} </h3>
        <p className="services__modal-description">{service?.serviceDesc}</p>
        <div className="services__modal-list">
          {service?.services.map((s, i) => (
            <li className="services__modal-item" key={i}>
              <i className="bx bxs-badge-check services__modal-icon"></i>
              <p className="services__modal-info">{s.name}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceModal