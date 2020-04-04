import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import ReactMarkdown from "react-markdown";

const CategoryTemplate = ({ data }) => (
    <Layout>
        <main className="p-main">
            <section className="p-articles">
                <h2 className='p-article__title p-article__title-category'>
                    Articles from the category <span className='p-article__category'>{data.strapiCategory.category}</span>
                </h2>
                {data.strapiCategory.articles.map(article => (
                    <div key={article.id}>
                        <h2 className='p-article__title'>{article.title}</h2>
                        <ReactMarkdown className='p-article__excerpt' source={article.excerpt} />
                        <Link className='c-link__read-more' to={`/${article.slug}`}>Read more</Link>
                    </div>
                ))}
                <Link className='c-link__back' to="/">Go Back</Link>
            </section>
        </main>
    </Layout>
);

export default CategoryTemplate;

export const query = graphql`
  query CategoryTemplate($id: String!) {
     strapiCategory(id: {eq: $id}) {
        category
        articles {
            id
            title
            slug
            excerpt
            content
        }
     }
  }
`;