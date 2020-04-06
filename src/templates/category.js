import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import ReactMarkdown from "react-markdown";
import SEO from "../components/seo";

const CategoryTemplate = ({ data }) => (
    <Layout>
        <SEO title={`All articles from the category ${data.strapiCategory.category}`}/>

        <section className="c-category">
            <h2 className='c-category__title'>
                Articles from the category <span className='c-category__name'>{data.strapiCategory.category}</span>
            </h2>
            {data.strapiCategory.articles.map(article => (
                <article className='c-article' key={article.id}>
                    <h2 className='c-article__title'>
                        <Link className='c-link__title' to={`/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <ReactMarkdown className='c-article__excerpt' source={article.excerpt} />
                    <Link className='c-link__read-more' to={`/${article.slug}`}>Read more</Link>
                </article>
            ))}
        </section>

        <Link className='c-link__back' to="/">Go Back</Link>
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