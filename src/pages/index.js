import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <main className="p-main">
            <section className="p-articles">
                {data.allStrapiArticle.edges.map(document => (
                    <article key={document.node.id}>
                        <h2 className='p-article__title'><Link to={`/${document.node.id}`}>{document.node.title}</Link></h2>
                        <p className='p-article__date'>Added {document.node.date} by <Link to={`/authors/User_${document.node.author.id}`}>{document.node.author.username}</Link></p>
                        <p className='p-article__content'>{document.node.content}</p>
                    </article>
                ))}
            </section>
            <Link to="/contact/">Contact</Link>
        </main>
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiArticle {
            edges {
                node {
                    id
                    title
                    date
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
