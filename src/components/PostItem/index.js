import React from "react";
import { MDBRow, MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";

const PostItem = ({ image, title, description, date, author, link}) => {
  return (
        <MDBRow className="pb-5">
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <img
                className="img-fluid"
                src={image}
                alt=""
              />
              <a href={link}>
                <MDBMask overlay="white-slight" />
              </a>
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
              by <a href="#!" className="font-weight-bold">{author}</a>, {date}
            </p>
            <a href={link} >
              <MDBBtn className="btn btn-blue btn-rounded btn-md waves-effect waves-light" size="md">
                Ler Mais
              </MDBBtn>
            </a>
          </MDBCol>
        </MDBRow>
  )
}

export default PostItem;