import React, { useEffect, useState } from 'react';
import { Link }from 'react-router-dom';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `you clicked ${count}times`;
    // })
    const IncreaseCount = () => {
        setCount(count + 1)
    }
    
    const DecreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            setCount(count);
        }
    }

 const ContinueCount = () =>{
     setInterval(()=>{
        setCount(count+1)
     },1000)
    }    

 const StopCount = () =>{
    setCount(0);
}
    return (
        <>
           
                <div>
                <h1>Har Har Mahadev Jai Mata Di</h1>
                <h1>Jai Shree Ram Jai Maa Janki </h1>
                <h1>Jai bajarang Bali</h1>
                </div>
           
            <p >{count}</p>


            <button 
              onClick={IncreaseCount} 
              onMouseEnter={ContinueCount}  
              onMouseLeave={StopCount} 
              className="btn" 
              data-testid = "button">Increment</button>

            <button 
             onClick={DecreaseCount} 
             className="btn">Decrement</button>
            <div>


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
        </>
    )
}

export default Counter
