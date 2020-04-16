import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { MDBBadge, MDBContainer } from "mdbreact"

const TagsPage = ({ data }) => {
    const tags = data.allMarkdownRemark.group

    const cores = [
        'green',
        'pink',
        'default',
        'danger',
        'success',
        'primary',
        'secondary',
        'warning',
        'info'
    ]

    return(
        <Layout>
            <SEO title="Todas as Tags"/>
            <ul>
                {tags.map((tag, i) => {
                    const randomNumber = Math.floor(Math.random() * (cores.length))
                    console.log(randomNumber)
                    return(
                    <Link key={i} to={`/tags/${kebabCase(tag.fieldValue)}`}>
                        <MDBContainer className= 'p-2'>
                            <MDBBadge className='p-2' pill color={cores[randomNumber]}>
                                {tag.fieldValue} {tag.totalCount}
                            </MDBBadge>
                        </MDBContainer>
                    </Link>)
                })}
            </ul>
        </Layout>
    )
}

export default TagsPage

export const query = graphql`
    query allPage {
        allMarkdownRemark {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`