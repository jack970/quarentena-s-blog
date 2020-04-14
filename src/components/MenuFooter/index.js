import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon} from "mdbreact";
import formatDate from '../../utils/formatDate'
import { useStaticQuery, graphql } from "gatsby";

const MenuFooter = () => {

    const data = useStaticQuery(graphql`
        query SiteDescriptionQuery {
            site {
                siteMetadata {
                    author
                    description
                    menuFooter
                    informacoesFooter {
                        label
                        icon
                      }
                }
            }
        }
    `)

    const style={
        marginBottom: '2rem',
    }
    const categorias = data.site.siteMetadata.menuFooter
    const informacoes = data.site.siteMetadata.informacoesFooter

    return (
    <MDBFooter color="#bdbdbd grey lighten-1" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
        <MDBRow style={{ margin: '0 auto', maxWidth: '62rem'}}>
            <MDBCol className="col-sm-4 col-md-4" >
            <h5 className="spacing font-weight-bold">Descrição</h5>
                <hr className="info-color mt-3 d-inline-block mx-auto" style={{width: '4rem'}} />
                <p>{data.site.siteMetadata.description}</p>
            </MDBCol>
            <MDBCol className="col-sm-4 col-md-4 text-center" style={style}>
            <h5 className="spacing font-weight-bold">Localização</h5>
            <ul>
            <hr className="info-color mb-4 mt-0 d-inline-block mx-auto" style={{width: '4rem'}} />
                {informacoes.map((info, i) => (
                    <li className="list-unstyled" key={i}>
                        <span className="input-group-text">
                            <MDBIcon far icon={info.icon} />
                            <p>{info.label}</p>
                        </span>
                    </li>
                ))}                
            </ul>
            </MDBCol>
            <MDBCol className="col-sm-4 col-md-4 text-center" style={style}>
            <h5 className="spacing font-weight-bold">Categorias</h5>
            <ul>
                <hr className="info-color mb-4 mt-0 d-inline-block mx-auto" style={{width: '4rem'}} />
                {categorias.map((labels, i) => (
                    <li className="list-unstyled" key={i}>
                        <a href="#!">{labels}</a>
                    </li>
                ))}
            </ul>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            {formatDate(Date())} <br></br> 
            &copy; Desenvolvido com <a href="https://www.gatsbyjs.com"> Gatsby </a>
            {` `} | By {data.site.siteMetadata.author}
        </MDBContainer>
        </div>
    </MDBFooter>
  );
}

export default MenuFooter;