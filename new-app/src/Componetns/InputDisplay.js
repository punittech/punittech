import React from 'react';
import {Link} from 'react-router-dom';

const InputDisplay = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <h1>Welcome to Input Display Data </h1>
      <button style={{color:"red",background :"yellow",margin : '50px' , border:"10px solid grey"}}>
      <Link to="/">Go to home</Link></button>
      
      <p>
      <button ><Link to="/Apisearch" className='linkbtn'>1</Link></button>
      <button ><Link to="/Counter" className='linkbtn'>2</Link></button>
      <button ><Link to="/InputSearch" className='linkbtn'>3</Link></button>
      <button ><Link to="/InputDisplay" className='linkbtn'>4</Link></button>
      <button ><Link to="/Loadmore" className='linkbtn'>5</Link></button>
      </p>
    </div>
  )
}
export default InputDisplay;
