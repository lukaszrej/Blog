import React from "react";
import { Link, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import 'moment-timezone';

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />

        {data.allStrapiArticle.edges.map(document => (
            <article className='c-article' key={document.node.id}>
                <h2 className='c-article__title'>
                    <Link className='c-link__title'
                          to={`/${document.node.slug}`}>{document.node.title}</Link>
                    <Link className='c-link__category'
                          to={`/category/${document.node.category.slug}`}>{document.node.category.category}</Link>
                </h2>
                <p className='c-article__details'>
                    Added <Moment
                    format="DD-MM-YYYY">{document.node.date}</Moment> by <Link className='c-link__author'
                    to={`/author/${document.node.author.slug}`}>{document.node.author.username}</Link>
                </p>
                <ReactMarkdown className='c-article__excerpt' source={document.node.excerpt}/>
                <Link className='c-link__read-more' to={`/${document.node.slug}`}>Read more</Link>
            </article>
        ))}
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiArticle(
            sort: { fields: [date], order: DESC }
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    date
                    excerpt
                    category {
                        id
                        category
                        slug
                    }
                    content
                    author {
                        id
                        username
                        slug
                    }
                }
            }
        }
    }
`;
