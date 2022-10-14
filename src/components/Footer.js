import React from 'react';
import logoFooter from '../assets/images/ucla-samueli-logo-white.svg';
import {Link} from 'react-router-dom';



const Footer = () => {

  return (
    <div className=" site-footer ">
      <Link to={'/'}>
          <img
          className="footer-logo"
            src={logoFooter}
            alt="UCLA Samueli School of Engineering"
            title="UCLA Samueli School of Engineering Logo"
          />
      </Link>
        <div className="footer-dept">
          Electrical and Computer Engineering Department - 2021-2022 Annual Report
        </div>
    </div>
  );
}

export default Footer;
