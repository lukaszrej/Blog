import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";

import Layout from '../components/layout';
import SEO from "../components/seo";

const UserTemplate = ({ data }) => (
    <Layout>
        <SEO title={`All articles from ${data.strapiUser.username}`}/>
        <main className='p-main'>
            <h2 className='p-article__title-from-author'>
                All articles from <span className='p-article__author'>{data.strapiUser.username}</span>
            </h2>
                {data.strapiUser.articles.map(article => (
                    <div key={article.id}>
                        <h2 className='p-article__title'>{article.title}</h2>
                        <ReactMarkdown source={article.content} />
                    </div>
                ))}
            <Link className='c-link__back' to="/">Go Back</Link>
        </main>
    </Layout>
);

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        excerpt
        content
      }
    }
  }
`;