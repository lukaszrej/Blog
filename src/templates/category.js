import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const CategoryTemplate = ({ data }) => (
    <Layout>
        <main className="p-main">
            <section className="p-articles">
                <h2 className='p-article__title'>Articles from the category {data.strapiCategory.category}</h2>
                <Link className='c-link__back' to="/">Go Back</Link>
            </section>
        </main>
    </Layout>
);

export default CategoryTemplate;

export const query = graphql`
  query CategoryTemplate($id: String!) {
     strapiCategory(id: {eq: $id}) {
        id
        category
     }
  }
`;