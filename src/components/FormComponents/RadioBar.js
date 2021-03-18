import React, { useState } from "react";
import { MDBContainer, MDBInput } from "mdbreact";

const RadioBar = (props) => {
   

     const expectedProps =  {
        "label": "",
        "items" :[
           {"label":"one","value": 1}, 
           {"label":"two","value": 2} 
        ],
        "text1" : "line one",
        "text2" : "line two"
    }

    const {items, text1, text2} = expectedProps;


  const [selectedItem,setSelectedItem] = useState('')

  

  return (
    <MDBContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      { items.map(item=>{
            return (
              <MDBInput
              gap
              onClick={() => setSelectedItem(item.value)}
              checked={item.value === selectedItem}
              value={item.value}
              label={item.label}
              type="radio"
              id={item.label}
              key={item.label}
            />
            )
        }) }
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
    </MDBContainer>
  );
};

export default RadioBar;
