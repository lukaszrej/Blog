import PropTypes from "prop-types";
import React from "react";

const Footer = () => (
    <footer className='p-footer'>
        <div className='p-footer__content'>© {new Date().getFullYear()} Autor Sukcesu</div>
    </footer>
);

Footer.propTypes = {
    siteTitle: PropTypes.string,
};

export default Footer;
