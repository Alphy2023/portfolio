import { Outlet } from "react-router-dom";
import Sidebar from "./../components/Sidebar";
import Hero from "../views/Hero";
import { useState } from "react";
import Footer from "../components/Footer";

import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";


const MainLayout = () => {
    const location = useLocation();
    const params = useParams().slug;

  
   
    const [active, setActive] = useState(true);
   
   
     const handleSidebar = () =>{
        setActive(!active)
     }
    
    useEffect(() => {
      if (params !== undefined) {
        localStorage.setItem("p-sector", "123");
      } else {
        localStorage.removeItem("p-sector", "");
      }
        const select = (el, all = false) => {
          el = el.trim();
          if (all) {
            return [...document.querySelectorAll(el)];
          } else {
            return document.querySelector(el);
          }
        };
        const on = (type, el, listener, all = false) => {
          let selectEl = select(el, all);
          if (selectEl) {
            if (all) {
              selectEl.forEach((e) => e.addEventListener(type, listener));
            } else {
              selectEl.addEventListener(type, listener);
            }
          }
        };
        const onscroll = (el, listener) => {
          el.addEventListener("scroll", listener);
        };
      let navbarlinks = select("#navbar .scrollto", true);
      const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink) => {
          if (!navbarlink.hash) return;
          let section = select(navbarlink.hash);
          if (!section) return;
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            navbarlink.classList.add("active");
          } else {
            navbarlink.classList.remove("active");
          }
        });
      };
      window.addEventListener("load", navbarlinksActive);
      onscroll(document, navbarlinksActive);
      const scrollto = (el) => {
        let elementPos = select(el).offsetTop;
        window.scrollTo({
          top: elementPos,
          behavior: "smooth",
        });
      };
      let backtotop = select(".back-to-top");
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add("active");
          } else {
            backtotop.classList.remove("active");
          }
        };
        window.addEventListener("load", toggleBacktotop);
        onscroll(document, toggleBacktotop);
      }

      on("click", ".mobile-nav-toggle", function (e) {
          //  select("body").classList.toggle("mobile-nav-active");
        let body = document.body;
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
        // body.classList.toggle("mobile-nav-active");
           body.classList.toggle("mobile-nav-active");
        //    body.classList.toggle("bi-x");
      });

      on(
        "click",
        ".scrollto",
        function (e) {
          if (select(this.hash)) {
            e.preventDefault();
            let body = document.body;
            if (body.classList.contains("mobile-nav-active")) {
              body.classList.remove("mobile-nav-active");
              let navbarToggle = select(".mobile-nav-toggle");
              navbarToggle.classList.toggle("bi-list");
              navbarToggle.classList.toggle("bi-x");
            }
            scrollto(this.hash);
          }
        },
        true
      );

      window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
    }, []);
  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      {/* <i
        className={`bi mobile-nav-toggle d-xl-none ${
          active ? "bi-x" : "bi-list"
        }`}
        onClick={handleSidebar}
      ></i> */}

      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      {/* sidebar */}
      <Sidebar />
      {!params && <Hero />}
      {/* <Hero /> */}
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
