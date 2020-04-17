const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ 
        node, 
        getNode, 
        basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    return graphql(
      `
      {
        postRemark: allMarkdownRemark(
          sort: {order: ASC, fields: [frontmatter___date]}
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
            next{
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
      `
    ).then(result => {
        const posts = result.data.postRemark.edges
        const tags = result.data.tagsGroup.group

        posts.forEach(({node, next, previous}) => {
            createPage ({
                path: node.fields.slug,
                component: path.resolve('./src/templates/blogPost.js'),
                context: {
                    slug: node.fields.slug,
                    previous: previous,
                    next: next
                }
            })
        })

        tags.forEach(tag => {
            createPage ({
                path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
                component: path.resolve('./src/templates/tagsPosts.js'),
                context: {
                  tag: tag.fieldValue,
                }
            })
        })

        tags.forEach(tag => {
          createPage ({
              path: `/tags`,
              component: path.resolve('./src/templates/tagsPage.js'),
              context: {
                tags: tag,
              }
          })
      })
    })
  }