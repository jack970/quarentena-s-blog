import React from "react";
import { 
  MDBCarousel, 
  MDBCarouselCaption, 
  MDBCarouselInner, 
  MDBCarouselItem, 
  MDBView, 
  MDBMask, 
  MDBContainer 
} from "mdbreact";
import { useStaticQuery, graphql, Link } from "gatsby";

const CarouselPage = () => {
    const data = useStaticQuery(graphql`
    query allPosts {
      allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              thumbnail
              author
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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
  `)
  return (
    <MDBContainer style={{margin: '0', padding: '0', maxWidth: '100%'}}>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        {data.allMarkdownRemark.edges.map(({node}, i) => {
        return(
          <MDBCarouselItem itemId={i + 1} key={i}>
            <Link to={node.fields.slug}>
              <MDBView style={{cursor: 'pointer'}}>
                <img
                  className="d-block w-100"
                  src={node.frontmatter.thumbnail}
                  alt={node.frontmatter.title}
                />
              <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">{node.frontmatter.title}</h3>
                <h4 className='h4-responsive'>{node.frontmatter.description}</h4>
                <p>{node.frontmatter.date}</p>
              </MDBCarouselCaption>
            </Link>
          </MDBCarouselItem>
        )})}
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;