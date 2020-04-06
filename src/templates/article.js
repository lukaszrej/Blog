import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";

import Layout from '../components/layout';
import SEO from "../components/seo";

const ArticleTemplate = ({ data }) => (
    <Layout>
        <SEO title={data.strapiArticle.title} />

        <article className="c-article">
            <h2 className='c-article__title'>{data.strapiArticle.title}</h2>
            <p className='c-article__details'>
                by <Link className='c-link__author' to={`/author/${data.strapiArticle.author.slug}`}>
                {data.strapiArticle.author.username}</Link>&nbsp;
                in <Link className='c-link__category c-link__category-underline'
                         to={`/category/${data.strapiArticle.category.slug}`}>{data.strapiArticle.category.category}</Link>
            </p>
            <ReactMarkdown source={data.strapiArticle.content} />
        </article>

        <Link className='c-link__back' to="/">Go Back</Link>
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