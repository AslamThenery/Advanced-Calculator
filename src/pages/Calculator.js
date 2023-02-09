import React from 'react'
import Screen from '../components/screen'
import Header from '../components/Header'
import Keys from '../components/Keys'
import "./calculator.css"

function Calculator() {
  return (
    <div className='calc-container'>
      <div className="calculator">

      <Header />
        <Screen/>
        <Keys />
      </div>
    </div>
  )
}

export default Calculator