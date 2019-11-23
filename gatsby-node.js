const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/product.js`)
  return graphql(`
    {
        allContentfulProducts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulProducts.edges.forEach(edge => {
      createPage({
        path: `/products/${edge.node.slug}`,
        component: productTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}