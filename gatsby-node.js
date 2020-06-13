/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const eventTemplate = path.resolve("src/templates/event.js")
    resolve(
      graphql(`
        {
          allContentfulEvent(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulEvent.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: eventTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
          return
        })
      })
    )
  })
}
