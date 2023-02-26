import { useEffect, useState } from "react";
import React from 'react';
import './LoadBtn.css'

const Loadbtn = () => {
    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState(2);

    useEffect(() => {
        fetch('https://5f7146ed64a3720016e603e1.mockapi.io/api/student?page=1&limit=' + limit)
            .then((res) => res.json())
            .then((data) => setItems(data)
            )
            // console.log("before>>",limit);
    },[limit])


    // console.log("after>>",limit);
    const LoadMore = () => {
        setLimit(limit+2)
    }
    // console.log("btn>>",limit);
    return (
        <div >
            {items.map((item) => (
                <div key={item.id}>
                    <div className="card">
                        <div className="container">
                            <p>Item : {item.id}</p>
                            <p>Name : {item.name} </p>
                            <p>Age : {item.age} </p>
                        </div>
                    </div>
                </div>
            ))}

            <button onClick={LoadMore} className="btnNew">LoadMore</button>
        </div>
    )
}

export default Loadbtn
