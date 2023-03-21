const Footer = () => {
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              {new Date().getFullYear()} <span>Alphy Portfolio</span>
            </strong>
          </div>
        </div>
      </footer>
      {/* <!-- End  Footer --> */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center 
  justify-content-center"
      >
        <i className="bx bx-chevrons-up"></i>
        {/* <!-- <i className="bi bi-arrow-up-short"></i> --> */}
      </a>
    </>
  );
};

export default Footer;
