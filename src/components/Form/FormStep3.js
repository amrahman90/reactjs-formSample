import React from "react";
import FormHeader from "../FormComponents/FormHeader";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Slider from "../FormComponents/Slider";
import Toggle from "../FormComponents/Toggle";
import HorizontalSeperator from "../common/HorizontalSeperator";
import Row from "../common/Row";

const FormStep3 = ({ children }) => {
  return (
    <div>
      <h1>Heading</h1>
      <FormHeader label="Form Header 3" count={3} />
      <div style={{ padding: "1rem 5rem" }}>
        {[0, 1, 2, 3].map((item) => (
          <div key={item}>
            <MDBRow>
              <MDBCol sm="6">
                <h1>left</h1>
              </MDBCol>
              <MDBCol sm="6">
                <h1>Right</h1>
              </MDBCol>
            </MDBRow>
            <HorizontalSeperator />
          </div>
        ))}
      </div>
      <div>
        <Row type="dark">
          <MDBRow>
            <MDBCol md="6">
              <Slider />
            </MDBCol>
            <MDBCol md="6">
              <label className="font-weight-bold py-2">Toggle</label>
              <Toggle />
            </MDBCol>
          </MDBRow>
        </Row>
        <Row>
          <MDBRow>
            <MDBCol md="6">
              <Slider />
            </MDBCol>
            <MDBCol md="6">
              <label className="font-weight-bold py-2">CheckBox</label>
              <input type="checkbox" /> CheckBox
            </MDBCol>
          </MDBRow>
        </Row>
        <Row type="dark">
          <MDBRow>
            <MDBCol md="6">
              <label className="font-weight-bold py-2">Toggle</label>
              <Toggle />
            </MDBCol>
            <MDBCol md="6">
              <label className="font-weight-bold py-2">CheckBox</label>
              <input type="checkbox" /> CheckBox
            </MDBCol>
          </MDBRow>
        </Row>
        <Row>
          <MDBRow>
            <MDBCol md="6">
              <label className="font-weight-bold py-2">Toggle</label>
              <Toggle />
            </MDBCol>
            <MDBCol md="6">
              <label className="font-weight-bold py-2">CheckBox</label>
              <input type="checkbox" /> CheckBox
            </MDBCol>
          </MDBRow>
        </Row>
        <Row type="dark">
          <MDBRow>
            <MDBCol md="6">
              <Slider />
            </MDBCol>
            <MDBCol md="6">
              <Slider />
            </MDBCol>
          </MDBRow>
        </Row>
      </div>
      <div className="d-flex justify-content-end py-4">
        <MDBBtn color="default">Cancel</MDBBtn>
        <MDBBtn color="warning">Next</MDBBtn>
      </div>
    </div>
  );
};

export default FormStep3;
