import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

const TagsPage = ({ data }) => {
    const tags = data.allMarkdownRemark.group
    return(
        <Layout>
            <SEO title="Todas as Tags"/>
            <ul>
                {tags.map((tag, i) => (
                    <Link key={i} to={`/tags/${kebabCase(tag.fieldValue)}`}>
                        <li>
                            {tag.fieldValue} ({tag.totalCount})
                        </li>
                    </Link>
                ))}
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