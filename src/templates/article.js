import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";

import Layout from '../components/layout';

const ArticleTemplate = ({ data }) => (
    <Layout>
        <main className="p-main">
            <section className="p-articles">
                <h2 className='p-article__title'>{data.strapiArticle.title}</h2>
                <p className='p-article__date'>by <Link className='c-link__author' to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
                <ReactMarkdown source={data.strapiArticle.content} />
                <Link className='c-link__back' to="/">Go Back</Link>
            </section>
        </main>
    </Layout>
);

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      excerpt
      content
      author {
        id
        username
      }
    }
  }
`;