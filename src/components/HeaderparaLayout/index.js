import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Headers = () => {
  const data = useStaticQuery(graphql`
    query QueryTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  
  `)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link to="/"><strong className='white-text'>{data.site.siteMetadata.title}</strong></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{marginBlockStart: '0'}}>
            <NavItem>
              <NavLink href="/tags/noticias/">Notícias</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tags">Tags</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <a href='/sobre'>
              Sobre
            </a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Headers;