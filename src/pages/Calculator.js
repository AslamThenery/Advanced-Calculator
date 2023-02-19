import {React, useContext} from 'react'
import Screen from '../components/Screen'
import Header from '../components/Header'
import Keys from '../components/Keys'
import "./calculator.css"
import { calcContext } from './CalcContext'
import Converter from '../components/Converter'

function Calculator() {

  const {converter, setConverter} = useContext(calcContext)
  return (
    <div className='calc-container'>
      <div className="calculator">


        <Header />
        {
          converter ?
          <Converter />

          :
        <Screen />
        }


        
        <Keys />

      </div>
    </div>
  )
}

export default Calculator