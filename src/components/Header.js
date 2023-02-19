import { React, useState, useContext } from 'react'
import { calcContext } from '../pages/CalcContext'
import "./header.css"

function Header() {

 const { converter, setConverter } =  useContext(calcContext)
   

  const [clCalculator, setClCalculator] = useState("active-button")
  const [clConverter, setClConverter] = useState("inactive-button")
  const [clArea, setClArea] = useState("inactive-button")
  const handleCalculator = () => {

    setClCalculator("active-button")
    setClConverter("inactive-button")
    setClArea("inactive-button")

    setConverter(false)


  }
  const handleConverter =  () => {
    setClCalculator("inactive-button")
    setClArea("inactive-button")
     setClConverter("active-button")

     console.log(converter)
     setConverter(!converter)
     

    

  }

  const handleArea = () => {
    setClCalculator("inactive-button")
    setClArea("active-button")
    setClConverter("inactive-button")

  }

  return (




    <div className='header'>

      <button className={`${clCalculator}`} onClick={handleCalculator}>Calculator</button>

      <button className={`${clConverter}`} onClick={handleConverter}>Coverter</button>
      <button className={`${clArea}`} onClick={handleArea}>Area Calculator</button>

    </div>
  )
}

export default Header