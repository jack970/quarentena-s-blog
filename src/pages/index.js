import React from "react"

import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import CarouselPhrases from "../components/CarouselPhrases"
import { graphql } from "gatsby"
import Headers from '../components/Header'
import {MDBCard, MDBCardBody} from 'mdbreact'
import MenuFooter from "../components/MenuFooter"

const IndexPage = ({data}) => {
  const postList = data.allMarkdownRemark.edges
  return(
    <section style={{backgroundColor: '#ededed'}}>
    <Headers />
    <SEO title="Home" />
    <main
        style={{
          margin: `0 auto`,
          maxWidth: 960
        }}
      >
        <CarouselPhrases 
          frase="Dentro de cada um de nós existe um DEUS e ele SANGRA, na imensa guerra carnal..." 
          image="https://media.giphy.com/media/SS7l9AjlvaiJi/giphy.gif" 
        />
        <MDBCard className="my-5 px-5">
          <MDBCardBody>
            <h2 className="h1 font-weight-bold text-center my-5">
              Notícias
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Descrição do Post
            </p>
            { postList.map(({node}, i) =>(
              <PostItem key = {i}
                image={node.frontmatter.image.childImageSharp.fluid}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                date={node.frontmatter.date}
                author={node.frontmatter.author}
                link={node.fields.slug}  
              />
            ))}
          </MDBCardBody>
        </MDBCard>   
      </main>
      <MenuFooter />
      </section>
)}

export default IndexPage

export const PostListQuery = graphql`
  query PostList {
    allMarkdownRemark(limit: 4, 
      filter: {frontmatter: {tags: {eq: "Notícias"}}}
      sort: {order: ASC, fields: [frontmatter___date]}
      ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author
            date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`