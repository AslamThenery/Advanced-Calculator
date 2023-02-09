import {React, useState} from 'react'
import "./header.css"

function Header() {


  const [clCalculator, setClCalculator] = useState("active-button")
  const [clConverter, setClConverter] = useState("inactive-button")
  const handleCalculator= ()=>{
        
          setClCalculator("active-button")
      setClConverter("inactive-button")
         
        }
   const handleConverter = ()=>{
      setClCalculator("inactive-button")
      setClConverter("active-button")
         
   }       
  
  return (


  
    
    <div className='header'>
        {/* <button className="active-button" onClick={handleClass}>Calculator</button> */}
        <button className={`${clCalculator}`} onClick={handleCalculator}>Calculator</button>
        {/* <button className='inactive-button'>Coverter</button> */}
        <button className={ `${clConverter}`} onClick={handleConverter}>Coverter</button>
        
    </div>
  )
}

export default Header