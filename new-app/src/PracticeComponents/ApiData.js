import React, {useState,useEffect} from 'react';
import axios from 'axios';

function ApiData() {
  const [myData,setMyData] = useState([]);
  const [isError,setIsError]=useState("")
  const getApidata = async()=> {
  const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
  setMyData(res.data)
  // .catch((error) =>{setIsError(error.message)})
  }
  useEffect(() => {
    getApidata();
  }, [])
  
  return (
    <div>
    <h1>Axios</h1>
    {/* {isError!=="" && <h2>{isError}</h2> } */}
    {myData.map((post)=> {
      const {id,title,body}=post;
      return (<div key={id}>
        <p>{title.slice(0,15)}</p>
        <p>{body.slice(0,100)}</p>
      </div>)
    })}
    </div>
  )
}

export default ApiData