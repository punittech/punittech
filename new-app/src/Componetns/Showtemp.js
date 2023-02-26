import React from 'react'

const Showtemp = ({text}) => {
  return (
    <div>
      <div>
          <h1>Description</h1>
         <p> {text.description}</p>
         <h1>Temp Max</h1>
         <p>{text.temp_max}</p>
         <h1>Temp Min</h1>
         <p>{text.temp_min}</p>
         <h1> Humidity</h1>
         <p>{text.humidity}</p>
         <h1> Sunrise</h1>
         <p>{text.sunrise}</p>
         <h1> Sunset</h1>
         <p>{text.sunset}</p>
         <h1> Country</h1>
         <p>{text.country}</p>
      </div>
    </div>
  )
}

export default Showtemp
