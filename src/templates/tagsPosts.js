import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import {MDBCard, MDBCardBody} from 'mdbreact'


const Tags = ({ data, pageContext }) => {
    const { tag } = pageContext
    const postList = data.allMarkdownRemark.edges

    return(
        <Layout>
            <SEO title={tag}
            description='Post'/>
            <MDBCard>
                <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Tag: { tag }
                </h2>
                <p className="text-center w-responsive mx-auto mb-5">
                    Posts de Nosso Louvado Mclovin.
                </p>
                    { postList.map(({node}, i) =>(
                        <PostItem key = {i}
                            image={node.frontmatter.thumbnail}
                            title={node.frontmatter.title}
                            description={node.frontmatter.description}
                            date={node.frontmatter.date}
                            author={node.frontmatter.author}
                            link={node.fields.slug}  
                        />
                    ))}
                </MDBCardBody>
            </MDBCard>
        </Layout>
    )
}

export const query = graphql`
    query Tags($tag: String!) {
        allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, 
        filter: {frontmatter: {tags: { in: [$tag]}}}) {
            edges {
                node {
                    frontmatter {
                        title
                        thumbnail
                        description
                        date
                        tags
                    }
                    fields {
                        slug
                      }
                }
            }
        }
    }
`

export default Tags