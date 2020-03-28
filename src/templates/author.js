import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const UserTemplate = ({ data }) => (
    <Layout>
        <main className='p-main'>
            <h2 className='p-article__title'>All articles from {data.strapiUser.username}</h2>
                {data.strapiUser.articles.map(article => (
                    <div key={article.id}>
                        <h2>
                            <Link to={`/Article_${article.id}`}>{article.title}</Link>
                        </h2>
                        <p>{article.content}</p>
                    </div>
                ))}
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
        content
      }
    }
  }
`;