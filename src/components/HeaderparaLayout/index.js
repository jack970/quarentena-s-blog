import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';

const Headers = () => {
  const data = useStaticQuery(graphql`
    query Title {
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
    <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">{data.site.siteMetadata.title}</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar style={{marginBlockStart: '0'}}>
        <NavItem>
            <NavLink href="/Videos/">Vídeos</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/tags">Tags</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
            Áudios
            </DropdownToggle>
            <DropdownMenu right>
            <DropdownItem>
                Áudios
            </DropdownItem>
            <DropdownItem>
                Imagens
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
                Reset
            </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
    </Collapse>
    </Navbar>
  )
}

export default Headers;