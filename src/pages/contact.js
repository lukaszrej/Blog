import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
      <main className="p-main">
          <SEO title="Contact page" />
          <h1>Contact</h1>
          <p>If you need contact write me an email kid.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <Link to="/">Back to the homepage</Link>
      </main>
  </Layout>
);

export default ContactPage;
