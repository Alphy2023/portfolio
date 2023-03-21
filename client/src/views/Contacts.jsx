import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
const Contacts = () => {
  const [loading, setLoading] = useState(false)
  // schema
  let schema = Yup.object().shape({
    name: Yup.string().required("Your name is required."),
    email: Yup.string().email("Invalid email address.").required("Email is required."),
    subject: Yup.string().required("Please enter your subject."),
    message: Yup.string().min(5,"Message should be a mininum of 5 characters.").required("Please enter your message."),
  });
  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      subject: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setLoading(true)
      // alert(JSON.stringify(values));
      // setInterval(() => {
      //   setLoading(false);
      //   // formik.resetForm();
      // }, 1000);
    },
  });
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="slide-right">Contact</h2>
          <p data-aos="slide-left" data-aos-delay="200">
            Lets Keep In Touch.
          </p>
        </div>

        <div className="row" data-aos="slide-in">
          <div
            className="col-lg-5 d-flex align-items-stretch"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Saika Apartments, Kagundo Road, Nairobi, Kenya</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <a href="email:alphonceomondi64@gmail.com">
                    alphonceomondi64@gmail.com
                  </a>
                </p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+254740803271</p>
                {/* <!-- <a href="" target="_blank" >Write to me <i className="bx bx-arrow-right"></i></a> --> */}
              </div>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+
              Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0"
               style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
            </div>
          </div>

          <div
            className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form onSubmit={formik.handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <CustomInput
                    type="text"
                    label="Your Name"
                    name="name"
                    disabled={loading}
                    val={formik.values.name}
                    onCh={formik.handleChange("name")}
                    onBl={formik.handleChange("name")}
                    e_class={
                      formik.touched.name && formik.errors.name
                        ? "input-error"
                        : ""
                    }
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="feedback-error mb-3 mt-1">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="form-group col-md-6">
                  <CustomInput
                    type="email"
                    label="Email"
                    name="email"
                    disabled={loading}
                    val={formik.values.email}
                    onCh={formik.handleChange("email")}
                    onBl={formik.handleChange("email")}
                    e_class={
                      formik.touched.email && formik.errors.email
                        ? "input-error"
                        : ""
                    }
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="feedback-error mb-3 mt-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <CustomInput
                    type="text"
                    label="Subject"
                    name="subject"
                    disabled={loading}
                    val={formik.values.subject}
                    onCh={formik.handleChange("subject")}
                    onBl={formik.handleChange("subject")}
                    e_class={
                      formik.touched.subject && formik.errors.subject
                        ? "input-error"
                        : ""
                    }
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <div className="feedback-error mb-3 mt-1">
                      {formik.errors.subject}
                    </div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className={
                      formik.touched.message && formik.errors.message
                        ? "input-error form-control"
                        : "form-control"
                    }
                    name="message"
                    rows="10"
                    disabled={loading}
                    val={formik.values.message}
                    onChange={formik.handleChange("message")}
                    onBlur={formik.handleChange("message")}
                    placeholder="Your message.."
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <div className="feedback-error mb-3 mt-1">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="my-3">
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                {loading ? (
                  <div className="loading active">Please wait.....</div>
                ) : (
                  <button type="submit">Send Message</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
