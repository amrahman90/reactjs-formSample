import React, { useState } from "react";
import { MDBContainer, MDBInput } from "mdbreact";

const Radiobutton = (props) => {

  const expectedProps =  {
    "label": "Kundelgrppe",
    "items" :[
       {"label":"one","value": 1}, 
       {"label":"two","value": 2} 
    ],
}

const {items,label} = expectedProps;
const [selectedItem,setSelectedItem] = useState('')



  return (
    <MDBContainer>
      <h2>{label}</h2>  
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
    </MDBContainer>
  );
};

export default Radiobutton;
