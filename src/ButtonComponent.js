import logo from './logo.svg';
import React,{useState} from 'react';
import axios from 'axios';

function ButtonComponent() {

  let [count,setCount]=useState(0);


  const increment = ()=>{
    setCount(count+3);
  }
  const decrement =()=>{
    setCount(count-6);
  }
  return (
    <div >
     <h2 style={{paddingLeft:"30px",textAlign:"center"}}> Value : {count}<br/></h2>
     <div style={{textAlign:"center"}}>
      <button style={{padding:"10px",margin:"10px",backgroundColor:"green",color:"white"}} onClick={increment}>Increment</button>
      <button style={{padding:"10px",margin:"10px",backgroundColor:"red",color:"white"}}  onClick={decrement}>Decrement</button>
    </div>

  <br/><a href="/DisplayData">Get Data From API</a>
    </div>
  );
}

export default ButtonComponent;
