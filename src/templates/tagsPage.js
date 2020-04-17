import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { MDBBadge } from "mdbreact"

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
            <ul className='list-unstyled list-inline text-center'>
                {tags.map((tag, i) => {
                    const randomNumber = Math.floor(Math.random() * (cores.length))
                    return(
                        <li className= 'list-inline-item p-2' key={i}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
                                <MDBBadge className='p-2' pill color={cores[randomNumber]}>
                                    {tag.fieldValue} {` `} {tag.totalCount}
                                </MDBBadge>
                            </Link>
                        </li>
                    )})}
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