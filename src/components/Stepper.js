import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Stepper = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="4">1 <br/> one</MDBCol>
        <MDBCol size="4">2 <br/> Two </MDBCol>
        <MDBCol size="4">3  <br/> Three</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Stepper;
