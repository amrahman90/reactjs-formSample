import React, {useState} from 'react';
import { MDBInput } from 'mdbreact';


const CheckBox = (props) => {

  const expectedProps =  {
    "label": "",
    "items" : [
      {"label":"sie","value": "1"}, 
      {"label":"partner","value": "2"}, 
      {"label":"andere","value": "3"} 
  ]
}

const {items,label} = expectedProps;
const [selectedItems,setSelectedItems] = useState([])
console.log("🚀 ~ file: CheckBox.js ~ line 18 ~ CheckBox ~ selectedItems", selectedItems)


const handleOnChange = (e) =>{

  const checkedItems  = [...selectedItems];

  if(!checkedItems.includes(e.target.value)){
    checkedItems.push(e.target.value)
  }
  console.log("🚀 ~ file: CheckBox.js ~ line 26 ~ onClick ~ e.target.value", e.target.value)

  setSelectedItems(checkedItems);
  console.log("🚀 ~ file: CheckBox.js ~ line 30 ~ onClick ~ checkedItems", checkedItems)

}

  return (
    <div>
      <h2>{label}</h2>
      <div className="custom-control custom-checkbox">
        {
          items.map(item=>{
            console.log("🚀 ~ file: CheckBox.js ~ line 53 ~ CheckBox ~ item", item)
            console.log("🚀 ~ file: CheckBox.js ~ line 48 ~ CheckBox ~ selectedItems.includes(item.value)", selectedItems.includes(item.value))
            return (
              <>
              <input key={item.value} type="checkbox"  checked={selectedItems.includes(item.value)} value={item.value} className="custom-control-input" onChange={handleOnChange} id={item.value}/>
              <label className="custom-control-label" htmlFor={item.value} >{item.label}</label>
              </>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default CheckBox;