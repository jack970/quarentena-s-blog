import React from "react";
import { MDBRow, MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";
import Img from "gatsby-image";
import { Link } from 'gatsby'

const PostItem = ({ image, title, description, date, author, link}) => {
  return (
        <MDBRow className="pb-5">
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <Img
                className="img-fluid"
                fluid={image}
                alt=""
              />
              <Link to={link}>
                <MDBMask overlay="white-slight" />
              </Link>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{title}</strong>
            </h3>
            <p className="dark-grey-text">
              {description}
            </p>
            <p>
              Por <a href="#!" className="font-weight-bold">{author}</a>, {date}
            </p>
            <Link to={link} >
              <MDBBtn className="btn btn-blue btn-rounded btn-md waves-effect waves-light" size="md">
                Ler Mais
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
  )
}

export default PostItem;