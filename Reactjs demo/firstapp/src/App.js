// this is a root or first component
//component just a small view. start with capital letter
// component is a fxn in the end
//component contains JSX. Its a OOPS.

import React from "react";
import './App.css';
import { First } from "./Components/First";
import { Second } from "./Components/Second";
import { Third } from "./Components/Third";

const App=()=>{
  const value=3;
  const conditionalRendering=()=>{
    if (value === 1){
      return <First msg='Hello'/>
    }
    if (value ===2){
      return <Second/>
    }
    if (value === 3){
      return <Third/>
    }
  }

    const name='VIPS';
      return (<>
      
      {conditionalRendering()}
      <h1>Calling {name}</h1>
      </>);
  }
export default App;