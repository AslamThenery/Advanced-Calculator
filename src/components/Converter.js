import React from 'react'
import "./converter.css"

function Converter() {
  return (
    <div  className='converter'>
<div className="from">
     <label for="optns">From:</label>
       <br />
<select id="cars">
  <option value="volvo">Square Meter</option>
  <option value="volvo">Square KiloMeter</option>
  <option value="volvo">Square MilliMeter</option>
  <option value="volvo">Square CentiMeter</option>
  <option value="volvo">Square MicroMeter</option>
  <option value="volvo">Hector</option>
  <option value="volvo">Acre</option>
  <option value="volvo">Are</option>
  <option value="volvo">Cent</option>
  
</select>
   <br />
    <input type="text" />
</div>

<div className="convert">
    <button className='convert-btn'>Convert</button>
</div>
<div className="to">
     <label for="optns">To:</label>
     <br />

<select id="cars">
  <option value="volvo">Square Meter</option>
  <option value="volvo">Square KiloMeter</option>
  <option value="volvo">Square MilliMeter</option>
  <option value="volvo">Square CentiMeter</option>
  <option value="volvo">Square MicroMeter</option>
  <option value="volvo">Hector</option>
  <option value="volvo">Acre</option>
  <option value="volvo">Are</option>
  <option value="volvo">Cent</option>
  
</select>
   <br />
    <input type="text" />
</div>

</div>

  )
}

export default Converter