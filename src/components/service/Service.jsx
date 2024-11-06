import React, {  useState } from 'react';
import "./service.css"
export const Service = () => {

    const[toggles, setToggle]=useState(0);

    const toggleTab=(index)=>{
        setToggle(index)
    }

    return (
    <section className="services section" id='service'>
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        
        {/* Frontend Development Service */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Frontend <br/> Development</h3>
          </div>
          <span className="services__button"  onClick={()=>{
            toggleTab(1)
          }}>View More 
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggles ===1 ? "services__modal active-modal": "services__modal"} >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>{
                setToggle(0)
              }}></i>
              <h3 className="services__modal-title">Frontend Development</h3>
              <p className="services__modal-description">I specialize in creating responsive, efficient, and visually appealing websites that enhance user experience.</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Custom website design and development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive and mobile-friendly layouts</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Optimized for performance and SEO</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backend Development Service */}
        <div className="services__content">
          <div>
            <i className="uil uil-server-network services__icon"></i>
            <h3 className="services__title">Backend <br/> Development</h3>
          </div>
          <span className="services__button" onClick={()=>setToggle(2)}>View More 
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggles ===2 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>setToggle(0)}></i>
              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description">Building robust and scalable backend solutions to support seamless application functionality.</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">API development and integration</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Database design and management</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Server-side logic and optimization</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-Stack Development Service */}
        <div className="services__content">
          <div>
            <i className="uil uil-layer-group services__icon"></i>
            <h3 className="services__title">Full-Stack <br/> Development</h3>
          </div>
          <span className="services__button" onClick={()=>setToggle(3)}>View More 
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggles===3 ? "services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>setToggle(0)}></i>
              <h3 className="services__modal-title">Full-Stack Development</h3>
              <p className="services__modal-description">Combining frontend and backend skills to build complete, functional, and optimized web applications.</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">End-to-end application development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Cross-functional integration between client and server</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Performance optimization and scalability</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
