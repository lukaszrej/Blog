import PropTypes from "prop-types";
import React from "react";

const Footer = () => (
    <footer className='p-footer'>
        <section className='p-footer__content'>© 2020 Łukasz Rej</section>
    </footer>
);

Footer.propTypes = {
    siteTitle: PropTypes.string,
};

export default Footer;
