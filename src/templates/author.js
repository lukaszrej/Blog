import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";

import Layout from '../components/layout';
import SEO from "../components/seo";

const UserTemplate = ({ data }) => (
    <Layout>
        <SEO title={`All articles from ${data.strapiUser.username}`}/>

        <section className="p-author">
            <h2 className='p-author__title'>
                All articles from <span className='p-author__name'>{data.strapiUser.username}</span>
            </h2>
            {data.strapiUser.articles.map(article => (
                <article className='c-article' key={article.id}>
                    <h2 className='c-article__title'>{article.title}</h2>
                    <ReactMarkdown source={article.content} />
                </article>
            ))}
        </section>

        <Link className='c-link__back' to="/">Go Back</Link>
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