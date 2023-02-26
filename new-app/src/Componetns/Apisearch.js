import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Apisearch = () => {
    const [image, setImage] = useState("");
    const [recImg, setRecImg] = useState([]);


    const url = "https://api.unsplash.com/search/photos?page=2";
    const changeImage = () => {
        debugger
        axios.get(`${url}&query=${image}&client_id=D5oBgZTPiqLyL5R90u4tNwcLtFkbN9xeusSLTRw4D8g`)
            .then((res) => {
             setRecImg(res.data.results);
             console.log(recImg);
            })
        //via Fetch
        // fetch(`https://api.unsplash.com/search/photos?page=1&query=audi&client_id=hSphgtXj5O3mvq96Ra_Iczyv8r8YSNf4TFb6202cnUc`)
        // .then((res)=>{
        // return res.json();
        // }).then((data)=>{
        //     console.log(data.results[0].urls.small)
        // })
    }

    return (
        <>
            <div className='container'>
                <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />
                <button type="submit" onClick={changeImage}>Search Now</button>
            </div>

            <div>
                {recImg.map((pic) => {
                    return (
                        <img src={pic.urls.small} key={pic.id} style={{ height: "250px", width: "150px", margin: "5%" }} />)
                })}
            </div>

            {/* <p>
            <button style={{ color: "red", background: "yellow", margin: '50px', border: "10px solid grey" }}>
            <Link to="/">Home</Link></button>
            </p>
            <p>
            <button ><Link to="/Apisearch" className='linkbtn'>1</Link></button>
            <button ><Link to="/Counter" className='linkbtn'>2</Link></button>
            <button ><Link to="/InputSearch" className='linkbtn'>3</Link></button>
            <button ><Link to="/InputDisplay" className='linkbtn'>4</Link></button>
            <button ><Link to="/Loadmore" className='linkbtn'>5</Link></button> 
            </p> */}
        </>
    )
}

export default Apisearch
