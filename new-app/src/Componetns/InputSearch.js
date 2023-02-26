import React, { useState } from 'react';
import InputDisplay from './InputDisplay';
import Demodata from './Demodata.json';
import { Link }from 'react-router-dom';
import LoadMore  from './Loadmore';
import './RouteN.css'

  const InputSearch = () => {
  const [data, setData] = useState("")
  const [item, setItem] = useState([])

        const dataAdded = () => {
           if (data == "") {
              alert("please type something")
              }
           else {
           setItem([...item, data])
           }
        }

     return (
        <div style={{ margin: "20px", borderRadius: "15x solid grey" }}>
        <input type="text"
         placeholder='Please Search'
         value={data}
         onChange={(e) => setData(e.target.value)} />
         <button style={{ marginLeft: "10px", background: "red", color: "yellow" }}
         onClick={dataAdded}>add me</button>
         <div>
        {item.map((currElm, index) => {
        return (
                <div key={index}>
                 <p>{currElm}</p>
                </div>
              )})}
           </div>

         {/* <InputDisplay name={data} /> */}

         {Demodata.filter((val) => {
          if (data === "") {
          return val
          }
          else if (val.firstName.toLowerCase().includes(data.toLowerCase())) {
          return val
          }
          }).map((val, key) => {
          return <>
          <p> {val.firstName} </p>
          <p> {val.lastName}  </p>
          </>
          })}
         <button style={{color:"red",background :"yellow",margin : '50px' , border:"10px solid grey"}}>
         <Link to="/">Home</Link></button>
          <p>
          <button ><Link to="/Apisearch" className='linkbtn'>1</Link></button>
          <button ><Link to="/Counter" className='linkbtn'>2</Link></button>
          <button ><Link to="/InputSearch" className='linkbtn'>3</Link></button>
          <button ><Link to="/InputDisplay" className='linkbtn'>4</Link></button>
          <button ><Link to="/Loadmore" className='linkbtn'>5</Link></button>
          </p>
         </div>
)}
export default InputSearch