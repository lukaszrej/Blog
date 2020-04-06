import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className='p-header'>
      <section className='p-header__content'>
          <h1><Link className='c-link__title' to="/">{siteTitle}</Link></h1>
          {/*<nav>*/}
          {/*    <ul>*/}
          {/*        <li a href='#'>Categories</li>*/}
          {/*    </ul>*/}
          {/*</nav>*/}
      </section>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
