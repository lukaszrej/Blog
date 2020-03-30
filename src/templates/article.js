import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";

import Layout from '../components/layout';

const ArticleTemplate = ({ data }) => (
    <Layout>
        <main className="p-main">
            <h2 className='p-article__title'>{data.strapiArticle.title}</h2>
            <p className='p-article__date'>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
            <ReactMarkdown className='p-article__content' source={data.strapiArticle.content} />
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