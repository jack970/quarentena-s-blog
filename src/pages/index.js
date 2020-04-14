import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import CarouselPage from '../components/Carousel'
import PostItem from "../components/PostItem"
import CarouselPhrases from "../components/CarouselPhrases"
import { graphql } from "gatsby"
import {MDBCard, MDBCardBody} from 'mdbreact'

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark.edges
  return(
  <Layout style={{ maxWidth: 'none'}}>
    <SEO title="Home" />
    <CarouselPage />
    <main
        style={{
          margin: `0 auto`,
          maxWidth: 960
        }}
      >
        <CarouselPhrases 
          frase="Dentro de cada um de nós existe um DEUS e ele SANGRA, na imensa guerra carnal..." 
          image="https://scontent.fudi3-1.fna.fbcdn.net/v/t1.0-9/13006525_858098300968524_2799394175421649653_n.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_oc=AQmhSloSLX9fmsONBfBGYT5DXg-ztUJC1o-OEhSkM7DK4vusmQv-KC-GqDIH1nLYYhU&_nc_ht=scontent.fudi3-1.fna&oh=3502d2c85c56d762b61be00a2aa7e548&oe=5EB6962D" 
        />
        <MDBCard className="my-5 px-5">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Posts Recentes
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
        <section style={{ 
            backgroundImage: 'url(https://pcdob.org.br/wp-content/themes/generic/images/images-background/background-vermelho.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
          <div>
            <img alt="foad" src="https://pcdob.org.br/wp-content/themes/generic/images/fotos-padrao/logo-vermelho-branco.svg" />
          </div>
        </section>
      </main>
    </Layout>
)}

export default IndexPage

export const PostListQuery = graphql`
  query PostList {
    allMarkdownRemark(limit: 4, 
      filter: {frontmatter: {tags: {eq: "Notícias"}}}
      ) {
      edges {
        node {
          frontmatter {
            thumbnail
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