import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Loadmore = () => {
    const [image, setImage] = useState("");
    const [recImg, setRecImg] = useState([]);
    const [visible, setVisible] = useState(3);

    const url = "https://api.unsplash.com/search/photos?page=1";
    const changeImage = () => {
        axios.get(`${url}&query=${image}&client_id=D5oBgZTPiqLyL5R90u4tNwcLtFkbN9xeusSLTRw4D8g&limit`)
            .then((res) => {
                setRecImg(res.data.results);
                console.log(recImg);
            })
    }

    const loadMoreItems = () => {
        setVisible((visible) => visible + 3)
    }
    return (
        <>
            <div className='container'>
                <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />
                <button type="submit" onClick={changeImage} style={{ color: "brown", border: '4px solid white', borderRadius: "10px", marginLeft: "10px" }}>Search Now</button>
            </div>

            <div>
                {recImg.slice(0, visible).map((pic) => {
                    return (
                        <img src={pic.urls.small} key={pic.id} style={{ height: "250px", width: "150px", margin: "5%" }} />)
                })}
            </div>

            <button onClick={loadMoreItems} style={{ background: "red", color: "white", borderRadius: '20%', marginTop: "10px" }}> Show More</button>

            <p>
                <button style={{ color: "red", background: "yellow", margin: '50px', border: "10px solid grey" }}>
                    <Link to="/">Home</Link></button>
            </p>


            <p>
                <button ><Link to="/Apisearch" className='linkbtn'>1</Link></button>
                <button ><Link to="/Counter" className='linkbtn'>2</Link></button>
                <button ><Link to="/InputSearch" className='linkbtn'>3</Link></button>
                <button ><Link to="/InputDisplay" className='linkbtn'>4</Link></button>
                <button ><Link to="/Loadmore" className='linkbtn'>5</Link></button>
            </p>
        </>
    )
}

export default Loadmore
