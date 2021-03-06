// Implement Gatsby's Node APIs in this file
// See: https://www.gatsbyjs.org/docs/node-apis/

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            return result;
        })
    )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
        // Create pages for each article.
        result.data.allStrapiArticle.edges.forEach(({ node }) => {

            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`src/templates/article.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    const getAuthors = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            id
            username
            slug
          }
        }
      }
    }
    `).then(result => {
        // Create pages for each user
        result.data.allStrapiUser.edges.forEach(({ node }) => {
            createPage({
                path: `/author/${node.slug}`,
                component: path.resolve(`src/templates/author.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    const getCategories = makeRequest(graphql, `
    {
      allStrapiCategory {
        edges {
          node {
            id
            category
            slug
          }
        }
      }
    }
    `).then(result => {
        // Create pages for each user.
        result.data.allStrapiCategory.edges.forEach(({ node }) => {
            createPage({
                path: `/category/${node.slug}`,
                component: path.resolve(`src/templates/category.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    // Queries for articles and authors nodes to use in creating pages.
    return Promise.all([
        getArticles,
        getAuthors,
        getCategories
    ])
};