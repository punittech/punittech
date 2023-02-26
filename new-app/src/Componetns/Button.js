import axios from 'axios';
import { useState } from 'react';
import Showtemp from './Showtemp';

function Button() {
    const [name, setName] = useState("");
    const[data,setData]= useState({
       description : 0,
       temp : 0,
       temp_max : 0,
       temp_min : 0,
       humidity : 0,
       sunrise : 0 ,
       sunset : 0,
       country : ""
    })

    const handleClick = ()=>{
          axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3a5730e64302cf3ce33e3a656bbb40e5`)
          .then((response)=>{
           setData({
            description :response.data.weather[0].description,
            temp : response.data.main.temp,
            temp_max : response.data.main.temp_max,
            temp_min : response.data.main.temp_min,
            humidity : response.data.main.humidity,
            sunrise : response.data.sys.sunrise ,
            sunset : response.data.sys.sunset,
            country : response.data.sys.country,
           })
          })
    }
    return (
        <div>
            <h1>Weather App Api</h1>
            <input type="text" className='form' value={name} onChange={(e)=>setName(e.target.value)} />
            <button type="submit" onClick = {handleClick}>Search Temp</button>
            <Showtemp text = {data} />
        </div>
    )
}
export default Button