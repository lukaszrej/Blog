import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
      <SEO title="Page Not found" />

      <section className="not-found">
          <h1 className='p-not-found__title'>Page not found</h1>
          <p>The page you were looking for doesn't exist.</p>
      </section>

      <Link className='c-link__back' to="/">Go Back</Link>
  </Layout>
);

export default NotFoundPage;
