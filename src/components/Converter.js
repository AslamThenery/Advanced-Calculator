import { React, useState, useContext } from 'react'
import { calcContext } from '../pages/CalcContext'
import "./converter.css"

function Converter() {
   const {units , value} =useContext(calcContext)

  
  const [areas, setAreas] = useState(["Square Meter", "Square KiloMeter", "Square MilliMeter", "Square CentiMeter", "Square MicroMeter", "Hector", 'Acre', "Are", "Cent"])
  const [length, setLenght] = useState(["Meter", "Millimeter", "Centimeter", "Feet", "Kilometer", "Mile", "Inch"])
  const [volume, setVolume] = useState(["Cubic Meter", "Cubic Millimeter", "Cubic Centimeter", "Liter", "Milliliter", "Mile", "Inch"])
  const [time, setTime] = useState(["Second", "Millisecond", "Microsecond", "Minute", "Hour", "Day", "Week", "Month", "Year"])
  const [weight, setWeight] = useState(["Kilogram", "Gram", "Ton", "Pound", "Ounce", "Carrat", "Metric Ton", "Month", "Year"])
  
  
  
  return (

    <div className='converter'>
      <div className="from">
        <label for="optns">From:</label>
        <br />
        <select id="cars">
        { units == "Area" && areas.map((options) => (

            <option value="volvo">{options}</option>
          ))

        
          
          }
        { units == "Length" && length.map((options) => (

            <option value="volvo">{options}</option>
          ))

        
          
          }
        { units == "Volume" && volume.map((options) => (

            <option value="volvo">{options}</option>
          ))
          }
        { units == "Weight" && weight.map((options) => (

            <option value="volvo">{options}</option>
          ))
          }
        { units == "Time" && time.map((options) => (

            <option value="volvo">{options}</option>
          ))
          }
          


        </select>
        <br />
        <input type="text" value={value} />
      </div>

      <div className="convert">
        <button className='convert-btn'>Convert</button>
      </div>
      <div className="to">
        <label for="optns">To:</label>
        <br />

        <select id="cars">
        { units == "Area" && areas.map((options) => (

<option value="volvo">{options}</option>
))



}
{ units == "Length" && length.map((options) => (

<option value="volvo">{options}</option>
))



}
{ units == "Volume" && volume.map((options) => (

<option value="volvo">{options}</option>
))
}
{ units == "Weight" && weight.map((options) => (

<option value="volvo">{options}</option>
))
}
{ units == "Time" && time.map((options) => (

<option value="volvo">{options}</option>
))
}

        </select>
        <br />
        <input type="text" />
      </div>

    </div>

  )
}

export default Converter