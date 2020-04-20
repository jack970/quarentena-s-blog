import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Headers = () => {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  
  `)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const styleLink = {
    color: '#fff',
    marginLeft: '1rem'
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link to="/"><strong className='white-text'>{data.site.siteMetadata.title}</strong></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{marginBlockStart: '0', marginLeft: '1rem'}}>
            <NavItem>
                <Link style={ styleLink } to="/tags/noticias/">Notícias</Link>
            </NavItem>
            <NavItem>
                <Link style={ styleLink } to="/tags">Categorias</Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link to='/sobre'>
              Sobre
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Headers;