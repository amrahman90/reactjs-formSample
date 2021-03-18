import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Header = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="4">Logo</MDBCol>
        <MDBCol size="4">Search Icon</MDBCol>
        <MDBCol size="4">Profile Icon</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Header;
