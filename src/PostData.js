import React,{useState,useEffect} from 'react';
import axios from 'axios';

function PostData(){

    let [title,setTitle]=useState('');

    let submitTitle = async(e)=>{
        e.preventDefault();
          await axios.post('https://gorest.co.in/public/v1/todos',title)
          .then(res=>{
            console.log(title)
          })
          .catch(e=>{
            console.log(title)
          })
         }
        
         let changeTitle = (e)=>{
           setTitle(e.target.value)
         }
    return(
        <div>Posting Data
            <form onSubmit={submitTitle}>
      <input type="text" value={title} onChange={changeTitle}/><button type="submit">Submit</button>
    </form>
        </div>
    )
}

export default PostData;