import React from "react";
import { Link, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import 'moment-timezone';

import Layout from "../components/layout";
import SEO from "../components/seo";

// const input = ;

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <main className="p-main">
            <section className="p-articles">
                {data.allStrapiArticle.edges.map(document => (
                    <article key={document.node.id}>
                        <h2 className='p-article__title'>
                            <Link className='c-link__title' to={`/${document.node.id}`}>{document.node.title}</Link>
                            <Link className='c-link__category' to={`/Category_${document.node.category.id}`}>{document.node.category.category}</Link>
                        </h2>
                        <p className='p-article__date'>
                            Added <Moment format="DD-MM-YYYY">{document.node.date}</Moment> by <Link
                            className='c-link__author' to={`/authors/User_${document.node.author.id}`}>{document.node.author.username}</Link>
                        </p>
                        <ReactMarkdown className='p-article__excerpt' source={document.node.excerpt}/>
                        <Link className='c-link__read-more' to={`/${document.node.id}`}>Read more</Link>
                    </article>
                ))}
            </section>
        </main>
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
                    date
                    excerpt
                    category {
                        id
                        category
                    }
                    content
                    author {
                        id
                        username
                    }
                }
            }
        }
    }
`;
