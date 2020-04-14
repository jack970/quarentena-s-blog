import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Headers from "../Header"
import GlobalStyles from "../../Styles/global"
import MenuFooter from "../MenuFooter"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Headers siteTitle={data.site.siteMetadata.title} />
        <main style={{ 
          maxWidth: '960px',
          margin: '0 auto'}}
        >{children}</main>
      <MenuFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
