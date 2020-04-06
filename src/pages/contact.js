import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
      <SEO title="Contact" />

      <section className="p-contact">
          <h1 className='p-contact__title'>Contact</h1>
          <p>If you need contact write me an email kid.</p>
      </section>

      <Link className='c-link__back' to="/">Go Back</Link>
  </Layout>
);

export default ContactPage;
