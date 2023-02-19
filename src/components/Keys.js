
import {React, useContext} from 'react'
import { calcContext } from '../pages/CalcContext'
import "./keys.css"

function Keys() {
 const {value, setValue, converter, setConverter } = useContext(calcContext)

 const keys =[]  

//  TYPING KEYS
 const handleKeys =  (e) =>{

     keys.push(e.target.value)
      setValue([...value, keys])
      console.log("values are ")
      console.log(typeof(value))
 
  }
  //  CLEARING SCREEN
  const handleClear = () =>{
        setValue([])
      
  }

  // DELETING NUMBERS
  const handleDelete = ()=>{
     
  }
  return (
    <div className='keys'>
       

        <div className="row-1">
        <button className='number-btn' value="sin" onClick={handleKeys}>{converter ? "Back" : 'sin'}</button>
        <button className='number-btn' value="cos" onClick={handleKeys}>{converter ? "Area" : 'cos'}</button>
        <button className='number-btn' value="tan" onClick={handleKeys}>{converter ? "Length" : 'tan'}</button>
        <button className='number-btn' value="√" onClick={handleKeys}>{converter ? "Volume" : '√'}</button>
        <button className='number-btn' value="π" onClick={handleKeys}>{converter ? "Time" : 'π'}</button>

        </div>
        <div className="row-1">
        <button className='number-btn'value="(" onClick={handleKeys}>(</button>
        <button className='number-btn'value="7" onClick={handleKeys}>7</button>
        <button className='number-btn' value="4" onClick={handleKeys}>4</button>
        <button className='number-btn' value="1" onClick={handleKeys}>1</button>
        <button className='number-btn' value="0" onClick={handleKeys}>0</button>

        </div>
        <div className="row-1">
        <button className='number-btn'value=")" onClick={handleKeys}>)</button>
        <button className='number-btn'value="8" onClick={handleKeys}>8</button>
        <button className='number-btn'value="5" onClick={handleKeys}>5</button>
        <button className='number-btn'value="2" onClick={handleKeys}>2</button>
        <button className='number-btn'value="." onClick={handleKeys}>.</button>

        </div>
        <div className="row-1">
        <button className='number-btn' value="" onClick={handleClear}>AC</button>
        <button className='number-btn' value="9" onClick={handleKeys}>9</button>
        <button className='number-btn' value="6" onClick={handleKeys}>6</button>
        <button className='number-btn'value="3" onClick={handleKeys}>3</button>
        <button className='number-btn' value="" onClick={handleDelete}>DEL</button>

        </div>
        <div className="row-5">
        <button className='number-btn'value="/" onClick={handleKeys}>/</button>
        <button className='number-btn'value="x" onClick={handleKeys}>x</button>
        <button className='number-btn'value="-" onClick={handleKeys}>-</button>
        <button className='number-btn'value="+" onClick={handleKeys}>+</button>
        <button className='number-btn' value="=" onClick={handleKeys}>=</button>

        </div>

        
    </div>
  )
}

export default Keys