import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const ArticleTemplate = ({ data }) => (
    <Layout>
        <main className="p-main">
            <h2 className='p-article__title'>{data.strapiArticle.title}</h2>
            <p className='p-article__date'>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
            <p className='p-article__content'>{data.strapiArticle.content}</p>
            <Link to="/">Go Back</Link>
        </main>
    </Layout>
);

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
      author {
        id
        username
      }
    }
  }
`;