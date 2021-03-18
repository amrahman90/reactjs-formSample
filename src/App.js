import './App.css';
import Header from './components/Header';
import FormIndex from './components/Form/FormIndex';
import Stepper from './components/Stepper';
import { useState, useEffect } from 'react';


function App() {

  const [schema,setSchema] = useState({})


  useEffect(()=>{
    fetch('/mocks/formSchema.json').then(resp=> {
      resp.json().then(data=>{
          setSchema(data.schema)
      })
    } )
  },[])

  return (
    <div className="App">
      <Header/>
      <div>Form Heading</div>
      <div>Beitrag $ 0.00</div>
      <Stepper/>
      <FormIndex schema={{}}/>
    </div>
  );
}

export default App;
