import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";

import Layout from '../components/layout';
import SEO from "../components/seo";

const ArticleTemplate = ({ data }) => (
    <Layout>
        <SEO title={data.strapiArticle.title} />
        <main className="p-main">
            <section className="p-articles">
                <h2 className='p-article__title'>{data.strapiArticle.title}</h2>
                <p className='p-article__date'>
                    &nbsp;by&nbsp;<Link className='c-link__author' to={`/author/${data.strapiArticle.author.slug}`}>
                        {data.strapiArticle.author.username}</Link>
                    &nbsp;in&nbsp;<Link className='c-link__category c-link__category-underline' to={`/category/${data.strapiArticle.category.slug}`}>
                        {data.strapiArticle.category.category}</Link>
                </p>
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
        slug
      }
      category {
        category
        id
        slug
      }
      category {
        category
        id
      }
    }
  }
`;