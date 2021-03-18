import React from "react";
import { MDBBtn } from "mdbreact";
import FormHeader from "../FormComponents/FormHeader";
import InputBox from "../FormComponents/InputBox";
import DatePicker from "../FormComponents/DatePicker";
import Slider from "../FormComponents/Slider";
import Box from "../common/Box";

const FormStep2 = ({ children }) => {
  return (
    <div>
      <FormHeader count="2" label="Form Header 2.1" />
      <div style={{ padding: "10px 5rem" }}>
        <div className="d-flex justify-content-between py-2">
          <MDBBtn color="default">Type 1</MDBBtn>
          <MDBBtn color="warning">Type 2</MDBBtn>
        </div>
        <div>
          <InputBox label="Marke" />
          <InputBox label="Model" />
          <InputBox label="Motor" />
          <div className="form-group">
            <label className="font-weight-bold">Date</label>
            <DatePicker />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">
              Erstzulassung auf dem Halter
            </label>
            <DatePicker />
          </div>
          <div>
            {[0, 1].map((i) => (
              <Box type="contained" key={i}>
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 3fr",
                      alignItems: "center",
                    }}
                  >
                    <h5>label</h5>
                    <div>item</div>
                  </div>
                ))}
              </Box>
            ))}
          </div>
          <InputBox label="Schadenfreiheitsklasse (SF-Klasse)" />
          <InputBox label="Kasko (SF-Klasse)" />
          <Slider label={"Fahrleistung in Jahr"} />
        </div>
        <div className="d-flex justify-content-end">
          <MDBBtn color="default">Cancel</MDBBtn>
          <MDBBtn color="warning">warning</MDBBtn>
        </div>
      </div>
    </div>
  );
};

export default FormStep2;
