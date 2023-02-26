import React from 'react';
import { Link }from 'react-router-dom';
import './RouteN.css'

const RouteN = () => {
  return (
    <table style={{width:"100%",margin:"auto"}}>
      <tr>
      <td><button className='btn1'><Link to="/Apisearch" className='linkbtn'>Apisearch</Link></button></td>
      <td><button className='btn1'><Link to="/Counter" className='linkbtn'>Counter</Link></button></td>
      <td><button className='btn1'><Link to="/InputSearch" className='linkbtn'>InputSearch</Link></button></td>
      </tr>
      <tr>
      <td><button className='btn1'><Link to="/InputDisplay" className='linkbtn'>InputDisplay</Link></button></td>
      <td><button className='btn1'><Link to="/Loadmore" className='linkbtn'>LoadMore</Link></button></td>
      </tr>
    </table>
  )
}

export default RouteN
