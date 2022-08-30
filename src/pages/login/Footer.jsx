import React from "react";

import "../css/Footer.css"
import { Link } from "react-router-dom";



const FooterApp = () => {
  return (
    <>
   
   <div className="footer__container">
            <div className="social__media--wrap">
            <div className="button">
              <div className="icon">
                <i className="fa fa-instagram"></i>
              </div>
              <span>Instagram</span>
            </div>

            <div className="button">
              <div className="icon">
                <i className="fa fa-facebook-f"></i>
              </div>
              <span>Facebook</span>
            </div>

            <div className="button">
              <div className="icon">
                <i className="fa fa-twitter"></i>
              </div>
              <span>Twitter</span>
            </div>

            <div className="button">
              <div className="icon">
                <i className="fa fa-linkedin"></i>
              </div>
              <span>LinkedIn</span>
            </div>

            <div className="button">
              <div className="icon">
                <i className="fa fa-youtube"></i>
              </div>
              <span>YouTube</span>
            </div>
          </div>
          </div>
          <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(70,70,70)' }}>
        © 2022 Bill$ :
        <a className='text-light' href=''>
          Bill$Company.com
        </a>
      </div>
    </>
  );
};

export default FooterApp;