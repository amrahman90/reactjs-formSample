import React from "react";
import { MDBBtn } from "mdbreact";
import FormHeader from "../FormComponents/FormHeader";
import InputBox from "../FormComponents/InputBox";
import Toggle from "../FormComponents/Toggle";
import DatePicker from "../FormComponents/DatePicker";
import HorizontalSeperator from "../common/HorizontalSeperator";
import { MDBRow, MDBCol } from "mdbreact";
import RadioBar from "../FormComponents/RadioBar";

const FormStep1 = ({ children }) => {
  return (
    <div>
      <RadioBar/>
      <FormHeader count="1" label="Form Header 1" />
      <div style={{ padding: "10px 5rem" }}>
        <div>
          <div>Sie</div>
          <MDBRow>
            <MDBCol md="6">
              <InputBox label="Name" />
            </MDBCol>
            <MDBCol md="6">
              <DatePicker label="Date" />
            </MDBCol>
          </MDBRow>
          <div>Partner /-in</div>
          <div>Andere</div>
        </div>
        <HorizontalSeperator margin={20} width={100} color="#ddd" />
        <div>
          <h2>Kendergruppe</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "cente",
            }}
          >
            <div>Sonstiges</div>
            <div>Offentliche Kommunen</div>
            <div>Offentlicher Dienst Land {"&"} Bund</div>
          </div>
        </div>
        <HorizontalSeperator margin={20} width={100} color="#ddd" />
        <div>
          <h2>Toggle label</h2>
          <div
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   alignItems: "cente",
          // }}
          >
            <Toggle type="variant2" />
          </div>
        </div>
        <HorizontalSeperator margin={20} width={100} color="#ddd" />
        <div>
          <h2>Wohnsituation</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "cente",
            }}
          >
            <div>radio button 1</div>
            <div>radio button 2</div>
          </div>
        </div>
        <HorizontalSeperator margin={20} width={100} color="#ddd" />
        <div>
          <InputBox label="Postleitzahl Wohnort" />
        </div>
      </div>
      <div className="d-flex justify-content-end py-2">
        <MDBBtn color="default">Cancel</MDBBtn>
        <MDBBtn color="warning">Next</MDBBtn>
      </div>
    </div>
  );
};

export default FormStep1;
