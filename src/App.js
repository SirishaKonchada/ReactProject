import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function App() {

  let [objData,setObjData]=useState('');

 useEffect(()=>{
   getData();
 },[])

  const getData = async()=>{
  await axios.get('https://gorest.co.in/public/v1/todos')
  .then(async(res)=>{
    setObjData(res.data.data)
  })
  }
  if(objData.length>0){
    return(
      <div> <a href="/FormData">Post Data</a><br/>
      {objData.map((obj,index)=>{
        return(
         <span>
           <Card style={{backgroundColor:"cyan",margin:"10px",width:"18rem",display:"inline-block"}}>
           <Card.Header>{obj.user_id}<br/>{obj.title}<br/>{obj.status}</Card.Header>
           </Card>
         </span>
        )
      })} 
      </div>
    )
  }else{
    return (
      <div ><a href="/FormData">Post Data</a><br/><br/>
    <h1>No Data</h1>
      </div>
    );
  }
  
}

export default App;
