import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="about_title">Services</h2>
      <span className="about_subtitle">What I Offer</span>

      <div className="services_container container grid">

       
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Frontend <br /> Development
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => toggleTab(1)}
          >
            View More{" "}
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services_modal-title">
                Frontend Development
              </h3>

              <p className="services_modal-description">
                Building responsive and interactive user interfaces using
                React, HTML, CSS, JavaScript, and Bootstrap.
              </p>

              <ul className="services_modal-services grid">
                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop responsive React applications
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Build modern user interfaces
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Create reusable React components
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Optimize website performance
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Ensure mobile-friendly designs
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

       
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Backend <br /> Development
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => toggleTab(2)}
          >
            View More{" "}
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services_modal-title">
                Backend Development
              </h3>

              <p className="services_modal-description">
                Developing secure and scalable server-side applications
                using Node.js, Express.js, and MongoDB.
              </p>

              <ul className="services_modal-services grid">
                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Build RESTful APIs
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Implement user authentication
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Manage MongoDB databases
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Handle server-side logic
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Connect frontend with backend
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Full Stack <br /> Development
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => toggleTab(3)}
          >
            View More{" "}
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services_modal-title">
                Full Stack Development
              </h3>

              <p className="services_modal-description">
                Creating complete MERN Stack applications from frontend
                to backend with clean, efficient, and scalable code.
              </p>

              <ul className="services_modal-services grid">
                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop complete MERN applications
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Integrate frontend and backend
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Deploy applications on Netlify and Render
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Build CRUD-based web applications
                  </p>
                </li>

                <li className="services-modal services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Maintain clean and scalable code
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;