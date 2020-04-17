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
            <div style={{padding: '2rem'}}>
                <div className='text-center'>
                    <h1 className='h1'>Todas as Categorias</h1><br/>
                </div>
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
            </div>
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