import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact page" />
    <h1>Contact</h1>
    <p>Here will be some tips on how to contact me.</p>
    <Link to="/">Back to the homepage</Link>
  </Layout>
);

export default ContactPage;
